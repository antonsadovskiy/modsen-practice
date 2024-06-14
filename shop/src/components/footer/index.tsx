import {
  FooterInput,
  FooterLink,
  SocialMediaIconButton,
  Wrapper,
} from "./styled";
import { socialMedias } from "@/constants/socials";
import { ChangeEvent, useCallback, useState } from "react";
import ArrowRightSVG from "@/assets/svg/arrow-right.svg";
import { footerLinks } from "@/constants/footer-links";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");

  const onChangeEmailHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.currentTarget.value);
    },
    [],
  );

  const onSendHandler = useCallback(() => {
    console.log(email);
    setEmail("");
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
            placeholder={"Give an email, get the newsletter."}
            value={email}
            onChange={onChangeEmailHandler}
            onIconClick={onSendHandler}
            endIcon={<ArrowRightSVG />}
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
