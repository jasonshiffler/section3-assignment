import React from 'react';

const UserOutput = (props) => {
  const style = {
    color: 'red',
  };

  //props is passed in from App.js
  return (
    <div style={style}>
      <p>{props.username}</p>
      <p>{props.username}</p>
    </div>
  );
};

export default UserOutput;
