import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import PortFolio from "../components/main";
import InfoPanel from "../components/sidebar/infopanel ";
import NavigationPanel from "../components/sidebar/navigationpanel";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex flex-grow pt-16 ">
        <NavigationPanel />
        <PortFolio />
        <InfoPanel />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
