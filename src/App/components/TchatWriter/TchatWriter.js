import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TchatWriter.module.scss';
import SelectUser from '../SelectUser/SelectUser';
import Button from '../Button/Button';
import store, { TCHAT_ACTIONS, initialState as iS } from '../../reducers/store';
const initialState = { text: '', color: '#000000', dest: -1 }
const TchatWriter = (props) => {
  const [message, setmessage] = useState(initialState);
  const [selectedId, setselectedId] = useState(iS.selectedUserId);
  useEffect(() => {
    setselectedId(store.getState().selectedUserId);
    store.subscribe(()=>{
      setselectedId(store.getState().selectedUserId);
    })
  }, []);
  console.log(selectedId)
  return (
    <div className={styles.TchatWriter} data-testid="TchatWriter">
      <input value={message.text} type="text" style={{ flexGrow: 1 }}
        onChange={e => { setmessage({ ...message, text: e.target.value }) }} style={{ fontSize: '32px', flexGrow: 3 }} />
      <input type="color" value={message.color} style={{ height: '46px' }}
        onChange={e => { setmessage({ ...message, color: e.target.value }) }} />

      <SelectUser onuserselectionchange={(id) => {
        console.log()
        setmessage({...message,dest:id});
        store.dispatch({ type: TCHAT_ACTIONS.SELECT_USER, value: id })
      }} selectedId={selectedId}><option value={-1}>Tout le monde</option></SelectUser>
      <Button title="Envoyer" onclickbutton={() => {
        const toSendMessage = { ...message, dateTime: new Date().toISOString() }
        console.log(toSendMessage);

        store.dispatch({ type: TCHAT_ACTIONS.SEND_MESSAGE, value: toSendMessage });
        setmessage(initialState)
      }} />
    </div>
  );
}

TchatWriter.propTypes = {};

TchatWriter.defaultProps = {};

export default TchatWriter;
