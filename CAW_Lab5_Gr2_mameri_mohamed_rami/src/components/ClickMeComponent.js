import React, { useState } from 'react';

const ClickMeComponent = () => {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Toggle Me</button>
      <p>{clicked ? 'Clicked' : 'Not Clicked'}</p>
    </div>
  );
};

export default ClickMeComponent;