import {
  FooterInput,
  FooterLink,
  SocialMediaIconButton,
  Wrapper,
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

  useEffect(
    () => emailjs.init(process.env.REACT_APP_GET_NEWS_LETTER_PUBLIC_KEY),
    [],
  );

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
        process.env.REACT_APP_GET_NEWS_LETTER_SERVICE_ID,
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
      <div className={"linksAndInput"}>
        <div className={"links"}>
          {footerLinks.map((item, index) => (
            <FooterLink
              onClick={() => item.link && onLinkClickHandler(item.link)}
              $isClickable={!!item.link}
              key={index}
            >
              {item.label}
            </FooterLink>
          ))}
        </div>
        <div className={"inputContainer"}>
          <FooterInput
            placeholder={"Give an email, get the news letter."}
            value={email}
            disabled={isSending}
            onChange={onChangeEmailHandler}
            onIconClick={onSendHandler}
            endIcon={isSending ? <CircleLoader /> : <ArrowRightSVG />}
          />
        </div>
      </div>
      <div className={"copyrightAndSocials"}>
        <div className={"copyright"}>
          <span>© 2023 Shelly. </span>
          <span className={"slim"}>Terms of use </span>
          <span>and </span>
          <span className={"slim"}>privacy policy.</span>
        </div>
        <div className={"socials"}>
          {socialMedias.map((item, index) => (
            <SocialMediaIconButton
              target={"_blank"}
              href={item.link}
              key={index}
            >
              {item.icon}
            </SocialMediaIconButton>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
