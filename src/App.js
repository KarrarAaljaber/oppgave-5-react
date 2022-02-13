import React, { useState } from 'react';

import MyComponent from './components/MyComponent';
import Food from './components/Food';
import Wrapper from './components/Wrapper';
import Alert from './components/Alert';

const food = ['Pizza', 'Hamburger', 'Coke'];

const App = () => {
  const [inputFromChild, setInputFromChild] = useState('');
  const [clicked, setIsClicked] = useState(false);

  const showP = () => {
    setIsClicked(!clicked)
  
  };
  return (
    <Wrapper>
      <MyComponent title="it works" />
      <Food food={food} />
      <Alert
        setInputFromChild={setInputFromChild}
        setIsClicked={setIsClicked}
        clicked={clicked}
        showP={showP}
      />
      {clicked && <p> You typed: {inputFromChild}</p>}
    </Wrapper>
  );
};

export default App;
