import type { Metadata, Viewport } from "next";

import { baseUrl } from "~/lib/base-url";

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Docs – Create Ryuu App",
    template: "%s – Create Ryuu App",
  },

  description: "A modern starter for your next big thing.",

  applicationName: "Create Ryuu App",
  referrer: "origin-when-cross-origin",

  creator: "Ryuu",
  publisher: "Ryuu",
  authors: [{ name: "Ryuu", url: "https://ryuu.gg" }],

  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },

  metadataBase: baseUrl,
  alternates: {
    canonical: "/quick-start",
    languages: { en: "/quick-start" },
  },

  openGraph: {
    type: "website",

    url: String(baseUrl),
    locale: "en",

    title: "Docs – Create Ryuu App",
    siteName: "Create Ryuu App",
    description: "A modern starter for your next big thing.",

    determiner: "",
    emails: "me@ryuu.gg",

    images: {
      url: new URL("/og.png", baseUrl),
      width: 1200,
      height: 630,
    },
  },

  twitter: {
    card: "summary_large_image",

    title: "Docs – Create Ryuu App",
    description: "A modern starter for your next big thing.",

    site: "@ryuudotgg",
    siteId: "1692033347218796544",

    creator: "@ryuudotgg",
    creatorId: "1692033347218796544",

    images: new URL("/og.png", baseUrl),
  },

  robots: { index: true, follow: true },
  manifest: new URL("/manifest.json", baseUrl),

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: {
      url: "/shortcut-icon.png",
      type: "image/png",
      sizes: "96x96",
    },
    apple: {
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },

  appleWebApp: {
    title: "Docs – Create Ryuu App",
    statusBarStyle: "black-translucent",
    startupImage: [
      "/launch-768x1004.png",
      {
        url: "/launch-dark-768x1004.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/launch-1536x2008.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
      {
        url: "/launch-dark-1536x2008.png",
        media:
          "(prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },

  category: "technology",
  keywords: [
    "ryuu",
    "create",
    "app",
    "nextjs",
    "react",
    "typescript",
    "expo",
    "mobile",
    "web",
    "documentation",
    "boilerplate",
    "starter",
    "template",
    "scaffold",
    "development",
    "framework",
  ],
};
