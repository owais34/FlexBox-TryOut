import { createContext, useReducer } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Header from './components/header/Header';

export const ClassContext=createContext()

const initialState=["fd0", //flex direction
  "fw0",                  //flex wrap
  "jc0",                 //justify content
  "ai0" ]               // align items

const reducer=(state,action)=>{
  let args=action.split(" ")
  let newState=[...state]
  let index=0
  switch(args[0])
  {
    case "0":
      let fdvalues=["row","row-reverse","column","column-reverse"]
      index=fdvalues.indexOf(args[1])
      newState[0]="fd"+index
      break;
    case "1":
      let fwvalues=["wrap","nowrap","wrap-reverse"]
      index=fwvalues.indexOf(args[1])
      newState[1]="fw"+index
      break;
    case "2":
      let jcvalues=["flex-start","flex-end","start","end","left","right","center","space-between","space-around","space-evenly"]
      index=jcvalues.indexOf(args[1])
      newState[2]="jc"+index
      break;
    case "3":
      let aivalues=["stretch","flex-start","flex-end","center","stretch","baseline"]
      index=aivalues.indexOf(args[1])
      newState[3]="ai"+index
      break;
    default:
      break;
  }
  return newState
}


function App() {

  const [state,dispatch]=useReducer(reducer,initialState)

  return (
    <ClassContext.Provider value={{state,dispatch}}>
        <div className="App">
        <Header/>
        <Container/>
        </div>
    </ClassContext.Provider>  
  );
}

export default App;
