import { routes } from "@/constants/routes";

export const footerLinks: { label: string; link?: string }[] = [
  { label: "CONTACT", link: routes.contact },
  { label: "TERMS OF SERVICES", link: routes.notFound },
  { label: "SHIPPING AND RETURNS", link: routes.notFound },
];
