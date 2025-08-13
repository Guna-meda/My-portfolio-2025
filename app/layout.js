import "./globals.css";
import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppWithPreloader from "@/components/AppWithPreloader";
import FollowPopup from "@/components/FollowPopup";


import ThemeClientProvider from "@/components/ThemeClientProvider";

export const metadata = {
  title: "My Portfolio",
  description: "Showcasing my work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-white">
        <ThemeClientProvider>
          <AppWithPreloader>
            <AppNavbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            {/* <FollowPopup/> */}
          </AppWithPreloader>
        </ThemeClientProvider>
      </body>
    </html>
  );
}
