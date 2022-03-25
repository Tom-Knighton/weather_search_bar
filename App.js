// import preact
import { Component } from "react";
import FixingData from "./fixingData";
import SearchBar from "./searchBar";

// import required Components from 'components/'
export default class App extends Component {
  //var App = React.createClass({

  constructor(props) {
    super(props);

    this.state = {
      filterText: ""
    };
  }

  // once the components are loaded, checks if the url bar has a path with "ipad" in it, if so sets state of tablet to be true
  componentDidMount() {
    const urlBar = window.location.href;
    if (urlBar.includes("ipad")) {
      this.setState({
        isTablet: true,
      });
    } else {
      this.setState({
        isTablet: false,
      });
    }

    
  }

  onTextChanged(text) {
    this.setState({
      filterText: text
    });
  }

  /*
		A render method to display the required Component on screen (iPhone or iPad) : selected by checking component's isTablet state
	*/
  render() {
    return (
      <div>
        <SearchBar onTextChange={(text) => { this.onTextChanged(text) }}/>
        <FixingData filter={this.state.filterText}/>
      </div>
    );
  }
}
