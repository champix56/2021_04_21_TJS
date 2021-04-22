import React from 'react';
import PropTypes from 'prop-types';
import style from './TchatUser.module.scss';
const TchatUser = (props) => {
  return (
    <div className={style.TchatUser}>
      <img src={props.user.img?props.user.img:'img/noimg.png'} alt={props.user.login+"user face"}/>
      {props.user.login}
    </div>
  );
}
TchatUser.propTypes = {
  user:PropTypes.object,
};
export default TchatUser;
