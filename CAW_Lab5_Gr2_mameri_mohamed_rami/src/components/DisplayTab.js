import React, { useState } from 'react';

const DisplayTab = ({ tab }) => {
  const [list, setList] = useState(tab);

  const handleItemClick = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <ul>
      {list.map((value, index) => (
        <li key={index} onClick={() => handleItemClick(index)}>
          Element {index + 1} is: {value}
        </li>
      ))}
    </ul>
  );
};

export default DisplayTab;