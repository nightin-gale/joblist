export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "UK Joblist For Students, By Students",
	description: "A Job-Listing for UK Students",
	navItems: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    }
	],
	navMenuItems: [
    {
      label: "About",
      href: "/about",
    },
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://paypal.me/harryhanYuhao",
	},
};
