import { useEffect } from "react";

import emailjs from "@emailjs/browser";

import { socialMedias } from "@/constants/socials";

import S from "./styled";

export const Footer = () => {
  useEffect(() => emailjs.init(process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY), []);

  return (
    <S.Wrapper>
      <S.CopyrightAndSocials>
        <S.Copyright>
          <span>© 2024 Shelly. </span>
          <S.Slim>Terms of use </S.Slim>
          <span>and </span>
          <S.Slim>privacy policy.</S.Slim>
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
};
