import React from 'react';
import './App.css';
import DataFetching from './components/DataFetching';
//import InternalClassCounter from './components/InternalClassCounter';
//import IntervalHookCounter from './components/IntervalHookCounter';
//import ClassMove from './components/ClassMove';
//import HookMouse from './components/HookMouse';
//import MouseContainer from './components/MouseContainer';
//import ClassCounter from './components/ClassCounter';
//import ClassCounterOne from './components/ClassCounterOne';
//import HookCounter from './components/HookCounter';
//import HookCounter2 from './components/HookCounter2';
//import HookCounterFour from './components/HookCounterFour';
//import HookCounterOne from './components/HookCounterOne';
//import HookCounterthree from './components/HookCounterthree';

function App() {
  return (
    <div className="App">
     {/* <ClassCounter></ClassCounter>
      <HookCounter></HookCounter>
      <HookCounter2></HookCounter2>
      <HookCounterthree></HookCounterthree>
      <HookCounterFour></HookCounterFour> 

      <ClassCounterOne></ClassCounterOne>
      <HookCounterOne></HookCounterOne>
      <ClassMove></ClassMove>
      <HookMouse></HookMouse>
      <MouseContainer></MouseContainer>
      <InternalClassCounter></InternalClassCounter>
      <IntervalHookCounter></IntervalHookCounter>*/}
      <DataFetching></DataFetching>
    </div>
  );
}

export default App;
