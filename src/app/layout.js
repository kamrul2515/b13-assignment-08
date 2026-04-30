import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";



const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata = {
  title: "B-Tiles Best Tiles Portal",
  description: "Best Tiles Portal",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        
        {children}
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
      </body>
    </html>
  );
}
