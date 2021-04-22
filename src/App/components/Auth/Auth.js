import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Auth.module.scss';
import SelectUser from '../SelectUser/SelectUser';
import Button from '../Button/Button';
import store, { initialState, TCHAT_ACTIONS } from '../../reducers/store';

const Auth = () => {
  const [state, setstate] = useState(initialState.connectedUser);
  return (
  <div className={styles.Auth} data-testid="Auth">
    <div className={styles.content}>
      <h2>Authentification</h2>
      <form>
      <img src={state&&state.img} style={{height:'60px', display:'iniline'}}/>
        <SelectUser selectedId={null!==state?state.id:-1} onuserselectionchange={id=>{
        const user=store.getState().tchatUsers.find(e=>e.id==id);
        console.log(id,user)
         setstate(user);
        }}></SelectUser>
        <Button title="Entrer" onclickbutton={()=>{
          store.dispatch({type:TCHAT_ACTIONS.CONNECT_USER,value:state})}}/>
      </form>

    </div>
  </div>
);}

Auth.propTypes = {};

Auth.defaultProps = {};

export default Auth;
