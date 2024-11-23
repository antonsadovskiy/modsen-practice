import {
  Outlet,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { Layout, Menu, MenuProps, theme } from "antd";
import { ThemeProvider } from "styled-components";

import { CircleLoader } from "@/components/circle-loader";
import { routes } from "@/constants/routes";
import { lightTheme } from "@/constants/theme";
import { useAppSelector } from "@/hooks";
import { selectorIsAppInitialized } from "@/store/slices/app";

import S from "./styled";

const { Header, Content } = Layout;

export function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const isAppInitialized = useAppSelector(selectorIsAppInitialized);
  const isAdmin = useAppSelector((state) => state.user.isAdmin);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = [
    { key: routes.home, label: "Главная" },
    { key: routes.shop, label: "Каталог" },
    { key: routes.cart, label: "Корзина" },
    isAdmin && { key: routes.admin, label: "Администрация" },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <Menu
            onClick={onClick}
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={items}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Content style={{ padding: "0 48px", minHeight: "calc(100vh - 65px)" }}>
          <div
            style={{
              margin: "20px 0",
              background: colorBgContainer,
              minHeight: "calc(100vh - 105px)",
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            {isAppInitialized && <Outlet />}
            {!isAppInitialized && (
              <S.LoaderContainer>
                <CircleLoader size={30} />
              </S.LoaderContainer>
            )}
            <ScrollRestoration />
          </div>
        </Content>
      </Layout>
    </ThemeProvider>
  );
}
