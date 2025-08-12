import "./globals.css";
import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FollowPopup from "@/components/FollowPopup";

export const metadata = {
  title: "My Portfolio",
  description: "Showcasing my work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <AppNavbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* <FollowPopup/> */}
      </body>
    </html>
  );
}
