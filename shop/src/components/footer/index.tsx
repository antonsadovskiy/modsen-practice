import S from "./styled";
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
    <S.Wrapper>
      <S.LinksAndInputContainer>
        <S.Links>
          {footerLinks.map((item, index) => (
            <S.FooterLink
              onClick={() => item.link && onLinkClickHandler(item.link)}
              $isClickable={!!item.link}
              key={index}
            >
              {item.label}
            </S.FooterLink>
          ))}
        </S.Links>
        <S.InputContainer>
          <S.FooterInput
            placeholder={"Give an email, get the news letter."}
            value={email}
            disabled={isSending}
            onChange={onChangeEmailHandler}
            onIconClick={onSendHandler}
            endIcon={isSending ? <CircleLoader /> : <ArrowRightSVG />}
          />
        </S.InputContainer>
      </S.LinksAndInputContainer>
      <S.CopyrightAndSocials>
        <S.Copyright>
          <span>© 2023 Shelly. </span>
          <S.Slim>Terms of use </S.Slim>
          <span>and </span>
          <S.Slim>privacy policy.</S.Slim>
        </S.Copyright>
        <S.Socials>
          {socialMedias.map((item, index) => (
            <S.SocialMediaIconButton
              target={"_blank"}
              href={item.link}
              key={index}
            >
              {item.icon}
            </S.SocialMediaIconButton>
          ))}
        </S.Socials>
      </S.CopyrightAndSocials>
    </S.Wrapper>
  );
};
