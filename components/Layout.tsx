import Footer from "./Footer";
import SponsorSection from "./SponsorSection";
import Topbar from "./Topbar";

const Layout = ({ children }: { children: React.ReactElement }): JSX.Element => {
  return (
    <>
      <Topbar />
      <main>{children}</main>
      <SponsorSection />
      <Footer />
    </>
  )
}

export default Layout;
