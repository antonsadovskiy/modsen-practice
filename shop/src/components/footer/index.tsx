import { SocialMediaIconButton, Wrapper } from "./styled";
import { socialMedias } from "@/constants/socials";

export const Footer = () => (
  <Wrapper>
    <div className={"copyrightAndSocials"}>
      <div className={"copyright"}>
        <span>© 2023 Shelly. </span>
        <span className={"slim"}>Terms of use </span>
        <span>and </span>
        <span className={"slim"}>privacy policy.</span>
      </div>
      <div className={"socials"}>
        {socialMedias.map((item, index) => (
          <SocialMediaIconButton target={"_blank"} href={item.link} key={index}>
            {item.icon}
          </SocialMediaIconButton>
        ))}
      </div>
    </div>
  </Wrapper>
);
