import MenuComponent from "./menu_layout/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SiteSection from "./Box";
import SiteSectionSecond from "./Box2";
import SiteSectionThird from "./Box3";
import Container from "@mui/material/Container";
import SiteSectionFourth from "./Box4";
import vector from "../../assets/Vector 1578.png";
import SiteSectionMid from "./Boxer";
import SiteSectionFifth from "./Box5";
import SiteSectionLast from "./BoxLast";
import Footer from "./Footer";

const theme = createTheme();

const Index = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MenuComponent />
        <Container>
          <SiteSection />
          <SiteSectionSecond />
          <SiteSectionMid />
          <SiteSectionFifth />
          <div style={{ background: vector }}>
            <SiteSectionThird />
            <SiteSectionFourth />
          </div>
            <SiteSectionLast />
            <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
};
export default Index;
