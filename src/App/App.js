import React from 'react';
import PropTypes from 'prop-types';
import Button from './components/Button/Button';
import User from './components/User/User';
import FormUser from './components/FormUser/FormUser';
import SelectUser from './components/SelectUser/SelectUser';
import Tchat from './components/Tchat/Tchat';
import store, { initialState } from './reducers/store';
import Auth from './components/Auth/Auth';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={connectedUser:initialState.connectedUser};
  }
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({connectedUser:store.getState().connectedUser})
    });
  }
  render() {
    console.log('render APP',this.state)
    return (
      <div className="App">
        {null!==this.state.connectedUser?<Tchat/>:<Auth/>}
      </div>
    );
  }
}


App.propTypes = {

};


export default App;
