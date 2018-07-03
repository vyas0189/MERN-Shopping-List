import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import ShoppingLIst from "./components/ShoppingList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <ShoppingLIst />
      </div>
    );
  }
}

export default App;
