import { ComponentType, SVGProps } from "react";

import FacebookSVG from "@/assets/svg/facebook.svg";
import InstagramSVG from "@/assets/svg/instagram.svg";
import LinkedInSVG from "@/assets/svg/linkedin.svg";
import TwitterSVG from "@/assets/svg/twitter.svg";

export const socialMedias: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  link: string;
}[] = [
  {
    icon: LinkedInSVG,
    link: "https://www.linkedin.com/company/modsen",
  },
  {
    icon: FacebookSVG,
    link: "https://www.facebook.com/ModsenSoftware",
  },
  {
    icon: InstagramSVG,
    link: "https://www.instagram.com/modsencompany/",
  },
  {
    icon: TwitterSVG,
    link: "https://x.com/modsencompany",
  },
];
