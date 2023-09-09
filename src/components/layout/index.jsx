import Navbar from "../Navbar";
import Footer from "../footer";

function Layout({ children, ...res }) {
  return (
    <>
      <Navbar {...res} />
			<main>
				{children}
			</main>
      <Footer />
    </>
  );
}

export default Layout;