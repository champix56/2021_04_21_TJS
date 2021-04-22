import React from 'react';
import PropTypes from 'prop-types';
import style from './TchatView.module.scss';

const TchatView = (props) => {
  // console.log('view',props);
  return (
  <div className={style.TchatView} data-testid="TchatView">
    {props.messages.map((e,i)=>{
      return <div className={style.message} key={'message'+i}>{e.dateTime.replace('T',' ')} :<span style={{color:e.color}}>{e.text}</span></div>
    })}
  </div>
);}

TchatView.propTypes = {messages:PropTypes.array};

TchatView.defaultProps = {};

export default TchatView;
