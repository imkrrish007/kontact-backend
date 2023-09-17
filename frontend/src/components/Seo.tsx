import { DefaultSeo as NextDefaultSeo } from "next-seo";

export const DefaultSeo = () => {
  return (
    <NextDefaultSeo
      title="Contact Management"
      titleTemplate="Kontact | %s"
      defaultTitle="Kontact"
      additionalMetaTags={[
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1 maximum-scale=1",
        },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "msapplication-TileColor",
          content: "#ffffff",
        },
        {
          name: "msapplication-TileImage",
          content: "/android-icon-192x192.png",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
      ]}
      additionalLinkTags={[
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "apple-icon-180x180.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          href: "/favicon.ico",
        },
        {
          rel: "manifest",
          href: "manifest.json",
        },
      ]}
    />
  );
};
