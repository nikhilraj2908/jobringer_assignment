import logo from './logo.svg';
import './App.css';
import { Routing } from './routing';
import Header from './components/header/header';
import { useReducer } from 'react';
import { Footer } from './components/footer/footer';
// var initialvalue={
//   count:0,
//   cart:[]
// };

// function reducer(state,action){
// if(action.type==='apply'){
//   return {
//     ...state,
//     count:state.count+1,
//     cart: [...state.cart, action.payload]

//   };
// }if(action.type="clearcart"){
//   return{
//     ...state,
//     cart: [],
//     count:0
//   }
// }
// }
function App() {
  // const[state,dispatch]=useReducer(reducer,initialvalue)
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer/>
    </div>
  );
}

export default App;
