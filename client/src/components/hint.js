import React from 'react';
export default function HintContent(field, value) {
//   const {birth, country, death} = value;
  return <div>
    <div style={{
      borderBottom: '1px solid #717171',
      fontWeight: 'bold',
      marginBottom: 5,
      paddingBottom: 5,
      textTransform: 'uppercase'
    }}>{field}</div>
    {console.log(value)}
    {_hintRow({label: value, value: value})},
  </div>;
}
 
function _hintRow({label, value}) {
  return <div style={{position: 'absolute', height: '15px', width: '100%'}}>
    <div style={{position: 'absolute'}}>{label}</div>
    <div style={{position: 'absolute', right: 0}}>{value}</div>
  </div>;
}