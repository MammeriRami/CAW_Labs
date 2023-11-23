import React, { useState } from 'react';

const DynamicDivForm = () => {
  const [divList, setDivList] = useState([]);
  const [formData, setFormData] = useState({
    height: '',
    width: '',
    backgroundColor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { height, width, backgroundColor } = formData;

    if (height && width && backgroundColor) {
      const newDiv = {
        height,
        width,
        backgroundColor,
      };

      setDivList((prevDivs) => [...prevDivs, newDiv]);
      setFormData({
        height: '',
        width: '',
        backgroundColor: '',
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Height:
          <input
            type="text"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Width:
          <input
            type="text"
            name="width"
            value={formData.width}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Background Color:
          <input
            type="text"
            name="backgroundColor"
            value={formData.backgroundColor}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Div</button>
      </form>

      <div>
        {divList.map((div, index) => (
          <div
            key={index}
            style={{
              height: div.height + "px",
              width: div.width + "px",
              backgroundColor: div.backgroundColor,
              margin: '10px',
            }}
          >
            Div #{index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicDivForm;
