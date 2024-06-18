import {
  Copyright,
  FooterInput,
  FooterLink,
  InputContainer,
  Links,
  LinksAndInputContainer,
  Slim,
  SocialMediaIconButton,
  Socials,
  Wrapper,
  CopyrightAndSocials,
} from "./styled";
import { socialMedias } from "@/constants/socials";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import ArrowRightSVG from "@/assets/svg/arrow-right.svg";
import { footerLinks } from "@/constants/footer-links";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { CircleLoader } from "@/components/circle-loader";

export const Footer = () => {
  const [isSending, setIsSending] = useState(false);

  useEffect(() => emailjs.init(process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY), []);

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");

  const onChangeEmailHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.currentTarget.value);
    },
    [],
  );

  const onSendHandler = useCallback(async () => {
    setIsSending(true);
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_GET_NEWS_LETTER_TEMPLATE_ID,
        {
          recipient: email,
        },
      );

      setEmail("");
    } catch (e) {
      console.error(e);
    } finally {
      setIsSending(false);
    }
  }, [email]);

  const onLinkClickHandler = useCallback(
    (link: string) => {
      navigate(link);
    },
    [navigate],
  );

  return (
    <Wrapper>
      <LinksAndInputContainer>
        <Links>
          {footerLinks.map((item, index) => (
            <FooterLink
              onClick={() => item.link && onLinkClickHandler(item.link)}
              $isClickable={!!item.link}
              key={index}
            >
              {item.label}
            </FooterLink>
          ))}
        </Links>
        <InputContainer>
          <FooterInput
            placeholder={"Give an email, get the news letter."}
            value={email}
            disabled={isSending}
            onChange={onChangeEmailHandler}
            onIconClick={onSendHandler}
            endIcon={isSending ? <CircleLoader /> : <ArrowRightSVG />}
          />
        </InputContainer>
      </LinksAndInputContainer>
      <CopyrightAndSocials>
        <Copyright>
          <span>© 2023 Shelly. </span>
          <Slim>Terms of use </Slim>
          <span>and </span>
          <Slim>privacy policy.</Slim>
        </Copyright>
        <Socials>
          {socialMedias.map((item, index) => (
            <SocialMediaIconButton
              target={"_blank"}
              href={item.link}
              key={index}
            >
              {item.icon}
            </SocialMediaIconButton>
          ))}
        </Socials>
      </CopyrightAndSocials>
    </Wrapper>
  );
};
