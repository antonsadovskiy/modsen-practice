import { ReactNode } from 'react';
import { ReactComponent as LinkedInSVG } from '../assets/svg/linkedin.svg';
import { ReactComponent as FacebookSVG } from '../assets/svg/facebook.svg';
import { ReactComponent as InstagramSVG } from '../assets/svg/instagram.svg';
import { ReactComponent as TwitterSVG } from '../assets/svg/twitter.svg';

export const socialMedias: { icon: ReactNode; link: string }[] = [
  {
    icon: <LinkedInSVG />,
    link: 'https://www.linkedin.com/company/modsen',
  },
  {
    icon: <FacebookSVG />,
    link: 'https://www.facebook.com/ModsenSoftware',
  },
  {
    icon: <InstagramSVG />,
    link: 'https://www.instagram.com/modsencompany/',
  },
  {
    icon: <TwitterSVG />,
    link: 'https://x.com/modsencompany',
  },
];
