import type { Metadata } from "next";
import { Lora, DM_Sans, DM_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Debopriya Deb Roy",
  description: "Backend engineer and technical educator based in Dhaka.",
  icons: {
    icon: "/seo/favicon-polaroid.png",
    apple: "/seo/favicon-polaroid.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${dmSans.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Runs synchronously in <head> from the server-rendered HTML, before
            paint and before React hydrates. It (1) applies the saved/preferred
            theme with no flash, and (2) attaches a delegated click listener so
            tapping the toggle works on the very first tap — even before
            hydration wires up React's handlers. React only reflects the
            data-theme attribute; it never owns the toggle, so there is no
            double-fire. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');d.setAttribute('data-theme',t);}catch(e){}try{document.addEventListener('click',function(e){var el=e.target&&e.target.closest?e.target.closest('[data-theme-toggle]'):null;if(!el)return;var next=d.getAttribute('data-theme')==='dark'?'light':'dark';d.setAttribute('data-theme',next);try{localStorage.setItem('theme',next);}catch(e2){}});}catch(e3){}})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
