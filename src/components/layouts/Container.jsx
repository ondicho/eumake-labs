import Navbar from "./Navbar";
import '../../assets/css/styles.css';
import Footer from "./Footer";

const Container = ({ Page }) => {
  return (

    <div className="page-container">
      <Navbar />
      <div className="page-content-holder">
        <Page />
      </div>
      <Footer />
    </div>
  );
};

export default Container;