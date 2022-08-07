import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Caraousel from "./components/Caraousel";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ResList from "./components/ResList";

let interval = null;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      latitude: -1,
      longitude: -1,
      ok: true,
    };
  }
  componentWillUnmount() {
    clearInterval(interval);
  }
  render() {
    return (
      <div>
        <Caraousel />
        <ResList />
        <Footer />
      </div>
    );
  }
}

export default App;
