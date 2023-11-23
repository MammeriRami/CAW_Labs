import React from 'react';
import ButtonClickComponent from './components/ButtonClickComponent';
import ClickMeComponent from './components/ClickMeComponent';
import  CounterComponent from './components/CounterComponent';
import  DisplayTab from './components/DisplayTab';
import DisplayTabProp from './components/DisplayTabProp';
import Login from './components/Login';
import DynamicDivForm from './components/DynamicDivForm';

function App() {
  const tab = ["hello", "world", "from", "react"];
  const tab1 = ["lol", "lmao", "xd", "no"];


  return (
    <div>
      <h1>exo 1</h1>
      <CounterComponent />
      <br/>
      <ClickMeComponent />
      <br/>
      <ButtonClickComponent />
      <br/>
      <h1>exo 2</h1>
      <h1>DisplayTab Component</h1>
      <DisplayTab tab={tab} />
      <h1>DisplayTab 1 Component</h1>
      <DisplayTabProp tab={tab1} />
      <h1>exo 3</h1>
      < Login />
      <h1>exo 4</h1>
      < DynamicDivForm/>

    </div>
  );
}

export default App;
