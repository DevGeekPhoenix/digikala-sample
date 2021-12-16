import "./App.css";
import { Component } from "react";
import Products from "../Components/Products";
import NavBar from "../Components/NavBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Mobiles: [],
      SearchInputValue: "",
    };
  }
  onsearchchange = (event) => {
    this.setState({ SearchInputValue: event.target.value });
    console.log(event);
  };
  render() {
    const filteredproducts = this.state.Mobiles.filter((product) => {
      return product.CategoryName.toLowerCase().includes(
        this.state.SearchInputValue.toLowerCase()
      );
    });
    console.log(filteredproducts);
    return (
      <div>
        <NavBar searchchange={this.onsearchchange} />
        <Products Mobiles={filteredproducts} />
      </div>
    );
  }
}

export default App;
