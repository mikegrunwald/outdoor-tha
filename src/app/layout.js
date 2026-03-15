import { Space_Grotesk } from "next/font/google";
import "./steez.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Roam & Board — Find Your Next Adventure",
  description:
    "Explore curated outdoor experiences tailored to your favorite activities, from the highest peaks to the deepest waters.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}
