import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./redux/Providers";
import Layout from "./components/Layout";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${poppins.variable}`}>
          <>
            <Layout children={children} />
          </>
        </body>
      </html>
    </Providers>
  );
}
