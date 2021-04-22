import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
/**
 * Composant button dynamique
 * @param {Object} props contenu de style, bgColor, title
 * @returns {node} struct of component 
 */
function Button(props){
   // console.log(props);
    return <div onClick={()=>{
        console.log(props)
       props.onclickbutton()
        }} className="Button" style={{backgroundColor:props.bgColor,...props.style}}>{props.title}</div>
}
Button.propTypes={
    title:PropTypes.string.isRequired,
    bgColor:PropTypes.string,
    onclickbutton:PropTypes.func.isRequired
}
Button.defaultProps={
    bgColor:'green',
    onclickbutton:()=>{console.log('Tu as oublier l\'action du button')}
}
export default Button;

