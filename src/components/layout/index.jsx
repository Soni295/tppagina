import Navbar from "../Navbar";
import Footer from "../footer";

function Layout({ children, ...res }) {
  return (
    <>
      <Navbar {...res} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
