import type { Metadata, Viewport } from "next";
import "./styles/global.css";
import { HOST_URL } from "@/source/config";
import AppProvider from "@/source/components/providers/AppProvider";
import LocalFont from "next/font/local";

// public/fonts/Inter-Variable.ttf
// public/fonts/JetBrainsMono-Variable.ttf

const inter = LocalFont({
  src: "../public/fonts/Inter-Variable.ttf",
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = LocalFont({
  src: "../public/fonts/JetBrainsMono-Variable.ttf",
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Festus Gbolade (Elpis) | MERN Stack Developer",
  description: "Building scalable and effective web applications is my passion as a MERN Stack Developer. I design responsive and dynamic user interfaces while guaranteeing smooth backend operation. I'm committed to meeting the needs of both clients and users by producing excellent code and creative solutions.",
  keywords: [
    "MERN Stack Developer",
    "Web Developer",
    "Full Stack Developer",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Responsive Design",
    "Web Applications",
  ],
  alternates: {
    canonical: HOST_URL,
  },
  applicationName: "Festus Gbolade (Elpis) Portfolio",
  authors: [
    {
      name: "Festus Gbolade (Elpis)",
      url: HOST_URL,
    },
  ],
  creator: "Festus Gbolade (Elpis)",
  publisher: "Festus Gbolade (Elpis)",
  metadataBase: new URL(HOST_URL),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    emails: ["festus.gbolade@gmail.com"],
    phoneNumbers: ["+234 916 370 4134"],
    url: HOST_URL,
    images: [
      {
        url: "/og-image.png",
        secureUrl: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Festus Gbolade (Elpis) | MERN Stack Developer",
      },
    ],
    siteName: "Festus Gbolade (Elpis) Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@elpis_alpha",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "dark",
  themeColor: "#02040a",
  userScalable: false,
  viewportFit: "cover",
};

const fonts = [inter, jetBrainsMono].map((font) => font.variable).join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Festus Gbolade (Elpis) | MERN Stack Developer" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${fonts} antialiased relative min-h-screen selection:bg-brand-primary/30`}
      >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
