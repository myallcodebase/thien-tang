// types
import { NavbarProps } from "./Navbar";

const mockData: NavbarProps = {
  socialMediaIcons: [
    {
      id: "99884427",
      url: "mailto:thientangcurren@gmail.com",
      name: "Email",
      reactIconIdentifier: "email",
      icon: { url: "https://www.datocms-assets.com/60761/1641478157-icon_mail.svg" },
    },
    {
      id: "94031955",
      url: "https://www.linkedin.com/in/thien-tang-99a7843b9/",
      name: "LinkedIn",
      reactIconIdentifier: "linkedin",
      icon: { url: "https://www.datocms-assets.com/60761/1641478156-icon_linkedin.svg" },
    },
    {
      id: "94031960",
      url: "https://twitter.com/pobermeier87",
      name: "Twitter",
      reactIconIdentifier: "twitter",
      icon: { url: "https://www.datocms-assets.com/60761/1641478158-icon_twitter.svg" },
    },
    {
      id: "94031963",
      url: "https://github.com/mircle0816",
      name: "GitHub",
      reactIconIdentifier: "github",
      icon: { url: "https://www.datocms-assets.com/60761/1641478154-icon_github.svg" },
    },
  ],
  navigationLinks: [
    { id: "94458330", isExternalLink: false, title: "About", url: "#about" },
  ],
  callToActions: [
    {
      callToActions: [
        {
          id: "94458334",
          icon: { url: "https://www.datocms-assets.com/60761/1642415316-icon_view.svg" },
          ctaType: "primary",
          isExternalLink: false,
          linkUrl: "#portfolio",
          title: "Portfolio",
        },
        {
          id: "99902438",
          icon: undefined,
          ctaType: "secondary",
          isExternalLink: false,
          linkUrl: "#contact",
          title: "Contact",
        },
      ],
    },
  ],
};

export default mockData;
