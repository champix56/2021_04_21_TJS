import React from 'react';
import PropTypes from 'prop-types';
import styles from './TchatUser.module.scss';

const TchatUser = (props) => (
  <div className={styles.TchatUser} data-testid="TchatUser" onClick={()=>props.onuserclicked(props.user.id)}>
    <img style={{height:'60px',maxWidth:'50px',size:'auto', display:'inline', padding:'10px'}} src={props.user.img} alt={'face de '+props.user.login}/>
    {props.user.login}
  </div>
);

TchatUser.propTypes = {user:PropTypes.object.isRequired,
  onuserclicked:PropTypes.func.isRequired};

TchatUser.defaultProps = {onuserclicked:(user)=>{console.log('userclicked',user)}};

export default TchatUser;
