import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll"
import '../containers/App.css'
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      
    };
  }

  componentDidMount(){
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then(users =>{
      this.setState({robots: users})
    })
    
  }

  // onSearchChange = (event) => {
  //   this.setState({searchfield: event.target.value})
    
  // }

  render() {
    const {robots} = this.state;
    const {searchField, onSearchChange} = this.props;
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    if(this.state.robots.length === 0){
      return <h1 className="tc">Loading...</h1>
    } else {
  return (
    <div className="tc container">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>  
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);