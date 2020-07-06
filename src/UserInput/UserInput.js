import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
  return (
    <div>
      <label>
        UserInput
        <input
          type='text'
          className='UserInput'
          onChange={
            props.changed /*allows us to pass back to changes to App.js */
          }
          value={
            props.username /*We still want to output the value in the input*/
          }
        />
      </label>
    </div>
  );
};

export default UserInput;
