import ReactRefreshTypeScript from "react-refresh-typescript";

import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import Dotenv from "dotenv-webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack from "webpack";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode = "production" | "development";

interface EnvVariable {
  mode?: Mode;
  port?: number;
}

export default (env: EnvVariable) => {
  const isDev = env.mode === "development";

  const config: webpack.Configuration = {
    mode: env.mode ?? "development",
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      publicPath: "/",
      clean: true,
    },
    plugins: [
      new Dotenv({
        systemvars: true,
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        favicon: path.resolve(__dirname, "public", "favicon.ico"),
        meta: {
          viewport:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
        },
      }),
      !isDev &&
        new MiniCssExtractPlugin({
          filename: "css/[name].[contenthash:8].css",
          chunkFilename: "css/[name].[contenthash:8].css",
        }),
      isDev && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.css?$/,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
          ],
        },
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
                getCustomTransformers: () => ({
                  before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                }),
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.svg$/,
          use: [{ loader: "@svgr/webpack", options: { icon: true } }],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    devtool: isDev && "inline-source-map",
    devServer: {
      port: env.port ?? 3000,
      open: true,
      historyApiFallback: true,
      hot: true,
    },
  };

  return config;
};
