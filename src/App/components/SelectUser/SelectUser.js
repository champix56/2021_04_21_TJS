import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './SelectUser.module.scss';
import store, { initialState, TCHAT_ACTIONS } from '../../reducers/store';

const SelectUser = (props) => {
  const [users, setusers] = useState(initialState.tchatUsers);
  const [selectedUserId, setselectedUserId] = useState(-1);
  useEffect(() => {
    setusers(store.getState().tchatUsers);
       store.subscribe(() => {
        setusers(store.getState().tchatUsers);
    })
  }, []);
  console.log(props, selectedUserId);
  return (
    <select className={style.SelectUser} data-testid="SelectUser"
      value={props.selectedId}
      onChange={(evt) => {
        console.log(evt.target.value)
        props.onuserselectionchange(parseInt(evt.target.value))
      }}>
      {props.children}
      {users.map((e, i) => <option key={'userselect-' + i} value={e.id}>{`${e.id}:${e.login}`}</option>)}
    </select>
  );
}

SelectUser.propTypes = {
  selectedId: PropTypes.number,
  onuserselectionchange: PropTypes.func.isRequired,
};

SelectUser.defaultProps = {

};

export default SelectUser;
