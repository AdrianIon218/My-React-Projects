import NavComp from "../NavComp/NavComp";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";

export default function Layout(props) {
  return (
    <>
      <NavComp />
      <Content>{props.children}</Content>
      <Footer />
    </>
  );
}
