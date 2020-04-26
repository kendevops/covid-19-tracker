import React from "react";

import Cards from "./components/Cards";
import Chart from "./components/Chart";
import CountryPicker from "./components/CountryPicker";

class App extends React.Component {
  render() {
    return (
      <div>
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
