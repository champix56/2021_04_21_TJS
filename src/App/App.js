import React from 'react';
import PropTypes from 'prop-types';
import Tchat from './components/Tchat/Tchat';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, users: [] };
  }
  componentDidMount() {
    fetch('http://desorbaix.alexandre.free.fr/phpRest/users/')
      .then(e => e.json(), e => [])
      .then(o => {
        console.log(o);
        this.setState({ count: o.length, users: o, selectedUser: null, selectedId: null })
        return o;
      })
  }
  remove() {
    this.setState({ count: this.state.count - 1 });
    console.log('remove');
  }
  render() {
    console.log('render APP', this.state)
    return (
      <div>
        <Tchat></Tchat>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}


App.propTypes = {

};


export default App;
