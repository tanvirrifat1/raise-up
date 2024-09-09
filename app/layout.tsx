import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "../shared/navbar.jsx";
import Footer from "../shared/footer.jsx";
import AuthProvider from "../config/AuthProvider";
import { Toaster } from "react-hot-toast";
import Context from "../components/context/context";
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "RiseUp",
  description: "The Ultimate Book Lovers Destination",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AuthProvider>
          <Context>
            <Navbar></Navbar>
            <Toaster position="top-right" />
            {children}
            <Footer></Footer>
          </Context>
        </AuthProvider>
      </body>
    </html>
  );
};
export default RootLayout;
