import React from 'react';
import PropTypes from 'prop-types';
import Button from './components/Button/Button';
import User from './components/User/User';
import FormUser from './components/FormUser/FormUser';
import SelectUser from './components/SelectUser/SelectUser';
import Tchat from './components/Tchat/Tchat';
import store, { initialState, TCHAT_ACTIONS } from './reducers/store';
import Auth from './components/Auth/Auth';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { connectedUser: initialState.connectedUser }
  }
  componentDidMount() {
    this.setState({ connectedUser: store.getState().connectedUser });
    store.subscribe(()=>{
      this.setState({connectedUser:store.getState().connectedUser})
    });
    // fetch('http://desorbaix.alexandre.free.fr/phpRest/tchatUsers/')
    //   .then(e=>e.json(),e=>[])
    //   .then(o=>{
    //     console.log(o);
    //     this.setState({count:o.length, users:o,selectedUser:null, selectedId:-1})
    //     return o;
    //   })
  }
  // remove(){
  //   this.setState({count:this.state.count-1});
  //   console.log('remove');
  // }
  render() {
    console.log('render APP', this.state)
    return (
      <div><h2>Bienvenu sur le Tchat: {this.state.connectedUser&&<Button title="disconnect" onclickbutton={()=>{
        store.dispatch({type:TCHAT_ACTIONS.DISCONNECT_USER})
      }}/>}</h2>
        {this.state.connectedUser?<Tchat></Tchat>:<Auth/>}
      </div>
    );
  }
}


App.propTypes = {

};


export default App;
