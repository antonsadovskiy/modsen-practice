import { Typography } from "antd";

import { socialMedias } from "@/constants/socials";

import { footerLinks } from "./config";
import S from "./styled";

export const Footer = () => (
  <S.Wrapper>
    <S.LinksAndInputContainer>
      <S.Links>
        {footerLinks.map((value, index) => (
          <Typography.Text key={index}>{value.label}</Typography.Text>
        ))}
      </S.Links>
    </S.LinksAndInputContainer>
    <S.CopyrightAndSocials>
      <S.Copyright>
        <Typography.Text>
          © 2024 Shelly. Terms of use and privacy policy.
        </Typography.Text>
      </S.Copyright>
      <S.Socials>
        {socialMedias.map((item, index) => (
          <S.SocialMediaIconButton
            data-cy={`social-media-icon-button-${index}`}
            target={"_blank"}
            href={item.link}
            key={index}
          >
            <item.icon />
          </S.SocialMediaIconButton>
        ))}
      </S.Socials>
    </S.CopyrightAndSocials>
  </S.Wrapper>
);
