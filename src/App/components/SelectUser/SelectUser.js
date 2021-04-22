import React from 'react';
import PropTypes from 'prop-types';
import './SelectUser.scss';

const SelectUser = (props) => (
  <select className="SelectUser" style={props.style} data-testid="SelectUser" value={props.selectedId} onChange={(evt)=>props.onuserselectionchange(parseInt(evt.target.value))}>
    <option value={-1}>tout le monde</option>
    {props.users.map((e,i)=><option key={'us-'+i} value={e.id}>{`${e.id}:${e.login}`}</option>)}
  </select>
);

SelectUser.propTypes = {
  users:PropTypes.array.isRequired,
  selectedId:PropTypes.number,
  onuserselectionchange:PropTypes.func.isRequired,
};

SelectUser.defaultProps = {};

export default SelectUser;
