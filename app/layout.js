import { Protest_Strike, League_Spartan } from "next/font/google";
import "./globals.css";

const protest = Protest_Strike({ weight: "400", subsets: ["latin"] });
const league = League_Spartan({ subsets: ["latin"] });
export const metadata = {
  title: "Leo's Pen",
  description: "Sell me this fucking pen right here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={league.className}>
        <div className="flex flex-col items-center justify-start w-svw h-svh py-4 px-6">
          <div className={protest.className}>
            <h1 className="text-6xl">Leo&lsquo;s Pen</h1>
            <h2>Sell me this fucking pen right here</h2>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
