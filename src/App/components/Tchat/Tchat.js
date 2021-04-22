import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './Tchat.module.scss';
import TchatUsers from './TchatUsers/TchatUsers';
import TchatView from './TchatView/TchatView';
import TchatWriter from './TchatWriter/TchatWriter';
// let interval=undefined;
const Tchat = (props) => {
  const [users, setusers] = useState([{id:123,login:'alex',img:'img/alex.png'},{id:2, login:'pierre'}]);
  const [messages, setmessages] = useState([]);
  const [lastId, setlastId] = useState(-1);
  const [checked, setchecked] = useState(0);
  const updateTchat=()=>{
    fetch('http://desorbaix.alexandre.free.fr/phpRest/messages/?id_gt='+lastId)
      .then(f=>f.json())
      .then(a=>{
        if(a.length<=0)return;
        console.log(a);
        let last=lastId;
        a.forEach(e=>{if(e.id>lastId)last=e.id});
        setlastId(last);
        setmessages([...messages,...a]);
      })
       setTimeout(()=>setchecked(checked+1),2000)
  }
  useEffect(() => {
     updateTchat();
  }, [checked]);
  useEffect(() => {
    fetch('http://desorbaix.alexandre.free.fr/phpRest/tchatUsers/')
    .then(f=>f.json())
    .then(a=>{
      setusers(a);
      return a;
    })
  }, []);
  return (
  <div className={style.Tchat} data-testid="Tchat">
    <div className={style.tchatTop}>
      <TchatView messages={messages} users={users}/>
      <TchatUsers users={users} />
    </div>
    <TchatWriter users={users} />
  </div>
)};

Tchat.propTypes = {};

Tchat.defaultProps = {};

export default Tchat;
