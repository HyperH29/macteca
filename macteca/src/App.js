import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Title from "./Title";
import Card from "./Cards";
import Textbody from "./Textbody";
import Carousel from "./Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import Message from "./Message";

function App() {
  return (
    <div>
      <div className=" justify-center bg-white align-middle">
        <Navbar />

        <Title />
        <Textbody />
      </div>
      <Card />
      <Carousel />
      <Message />
      <Footer></Footer>
    </div>
  );
}
// Information center
// Menu task bar Right hand side.
export default App;
