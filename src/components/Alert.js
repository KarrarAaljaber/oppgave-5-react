import React, { useState } from 'react';

const Alert = ({
  setInputFromChild,
  inputFromChild,
  clicked,
  showP
}) => {

  return (
    <div>
      <div><button onClick={showP}> {clicked ? 'Hide it':  'Show what you typed'} </button></div>
      <form>
        <label>
          Type something:
          <input
            type="text"
            onChange={(event) => setInputFromChild(event.target.value)}
            name="inpu"
          />
        </label>
      </form>
    </div>
  );
};

export default Alert;
