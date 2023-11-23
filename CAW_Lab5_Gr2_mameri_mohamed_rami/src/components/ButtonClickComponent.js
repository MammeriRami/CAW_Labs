import React, { useState } from 'react';

const ButtonClickComponent = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (buttonNumber) => {
    setClickedButton(buttonNumber);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick(1)}>Button1</button>
      <button onClick={() => handleButtonClick(2)}>Button2</button>
      <button onClick={() => handleButtonClick(3)}>Button3</button>
      
      <p>{clickedButton !== null ? `Button #${clickedButton} was clicked` : ''}</p>
    </div>
  );
};

export default ButtonClickComponent;