import Header from "../app/components/header";
import Footer from "../app/components/footer";

export const metadata = {
  title: "Twitchlolja.com",
  description: "E-commerce",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
