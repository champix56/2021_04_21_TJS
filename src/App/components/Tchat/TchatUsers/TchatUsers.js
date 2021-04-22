import React from 'react';
import PropTypes from 'prop-types';
import style from './TchatUsers.module.scss';
import TchatUser from './TchatUser/TchatUser';

const TchatUsers = (props) => (
  <div className={style.TchatUsers} data-testid="TchatUsers">
  <h2>Users :</h2>
    {props.users.map((e,i)=><TchatUser user={e} key={'te-'+ i}/>)}
  </div>
);

TchatUsers.propTypes = {};

TchatUsers.defaultProps = {};

export default TchatUsers;
