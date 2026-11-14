import type { Metadata, Viewport } from "next";
import "./styles/global.css";
import { HOST_URL, PROFILE, SOCIAL } from "@/source/config";
import { THEME_INIT_SCRIPT } from "@/source/theme";
import AppProvider from "@/source/components/providers/AppProvider";
import LocalFont from "next/font/local";

// Self-hosted, latin subsets (SIL Open Font License).
const geist = LocalFont({
  src: "../public/fonts/Geist-Variable.woff2",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

const geistMono = LocalFont({
  src: "../public/fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const instrumentSerif = LocalFont({
  src: [
    { path: "../public/fonts/InstrumentSerif-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/InstrumentSerif-Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

const SITE_TITLE = `${PROFILE.name} | ${PROFILE.role}`;

export const metadata: Metadata = {
  title: {
    default: `${SITE_TITLE} for real-time web products`,
    template: `%s | ${PROFILE.name}`,
  },
  description: PROFILE.description,
  keywords: [
    "Festus Gbolade",
    "Elpis",
    "Full-Stack Engineer",
    "Senior Full Stack Developer",
    "Remote Software Engineer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Real-time systems",
    "WebSockets",
    "CRDT",
    "PostgreSQL",
    "MongoDB",
  ],
  alternates: { canonical: "/" },
  applicationName: `${PROFILE.name} Portfolio`,
  authors: [{ name: PROFILE.name, url: HOST_URL }],
  creator: PROFILE.name,
  publisher: PROFILE.name,
  metadataBase: new URL(HOST_URL),
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: HOST_URL,
    title: SITE_TITLE,
    description: PROFILE.description,
    siteName: `${PROFILE.name} Portfolio`,
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: PROFILE.description,
    creator: SOCIAL.twitterHandle,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: "#0b0d10",
  viewportFit: "cover",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  alternateName: PROFILE.alias,
  url: HOST_URL,
  image: `${HOST_URL}/og-image.png`,
  jobTitle: PROFILE.role,
  description: PROFILE.description,
  email: `mailto:${SOCIAL.email}`,
  worksFor: { "@type": "Organization", name: PROFILE.currentCompany },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Obafemi Awolowo University" },
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  knowsAbout: ["TypeScript", "React", "Next.js", "Node.js", "Real-time systems", "PostgreSQL", "MongoDB"],
  sameAs: [SOCIAL.github, SOCIAL.linkedin, SOCIAL.twitter],
};

const fonts = [geist, geistMono, instrumentSerif].map((font) => font.variable).join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={fonts} suppressHydrationWarning={true}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content={PROFILE.name} />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className="relative min-h-screen antialiased"
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
