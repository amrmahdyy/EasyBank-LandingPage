import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Main from "./Main";
import Features from "./Features";
import Articles from "./Articles";
import Footer from "./Footer";
import NavbarMenu from "./NavbarMenu";

function App() {
  return (
    <div>
      <Navbar />
      <NavbarMenu />
      <Main />
      <Features />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
