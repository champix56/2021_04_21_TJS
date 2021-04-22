import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './TchatWriter.module.scss';
import SelectUser from '../../SelectUser/SelectUser';
import Button from '../../Button/Button';
const initialState={text:'',destinataire:-1, color:'#000000'};
const TchatWriter = (props) => {
  const [message, setmessage] = useState(initialState);
 // console.log(message);
  return (
  <div className={style.TchatWriter} data-testid="TchatWriter">
    <input type="text" value={message.text} onChange={e=>{setmessage({...message,text:e.target.value})}}/>
    <input style={{flex:0.1}} type="color" value={message.color} onChange={(e)=>setmessage({...message,color:e.target.value})}/>
    <SelectUser value={message.destinataire} users={props.users} style={{height:'34px', fontSize:'32px'}} onuserselectionchange={id=>{setmessage({...message,destinataire:id})}} ></SelectUser>
    <Button title="Envoyer" onclickbutton={()=>{
      if(message.text.length<=0)return;
      fetch('http://desorbaix.alexandre.free.fr/phpRest/messages/',{method:'POST',body:JSON.stringify({...message,dateTime:new Date().toISOString()})})
      .then(e=>e.json()).then(o=>{
        console.log('message sent',o);
        setmessage({...message,text:''});
        });
    }}/>
  </div>
);}

TchatWriter.propTypes = {};

TchatWriter.defaultProps = {};

export default TchatWriter;
