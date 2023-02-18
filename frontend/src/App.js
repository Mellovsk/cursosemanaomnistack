//import React, { useState } from 'react';
import Header from './Header';
import Logon from './pages/Logon';

//import './global.css';

export default function App(){
  return (
    <Logon />
  );
}

//HTML aqui dentro é um JSX -JavaScript XML

// function App() {
//   let [counter, setCounter] = useState(0); 

//   function increment(){
//     setCounter(counter + 1);
//     console.log(counter);
//   }
    
//   return (
//     <div>
//       <Header nome="Meu Contador">Contador: {counter}</Header>
//       <button onClick={increment}>Clique aqui</button>
//     </div>
//   );
// }

//sem a desestruturação pra entender como que funciona o codigo, o useState, retorna um Array de 2 posiçoes, a primeira é o valor
//e a segunda posição é função que altera o estado do valor
//na desestruturação de um array, voce pode dar o nome que quiser para as posicoes de cada elemento;
// function App() {
//   let counter = useState(0); 
//   function increment(){
//     counter[1](counter[0] + 1);
//     console.log(counter[0]);
//   }
   
//   return (
//     <div>
//       <Header>Contador: {counter[0]}</Header>
//       <button onClick={increment}>Clique aqui</button>
//     </div>
//   );
// }


// function App() {
//   let counter = 0;  
//   function increment(){
//     counter++;
//     console.log(counter);
//   }
   
//   return (
//     <div>
//       <Header>Contador: {counter}</Header>
//       <button onClick={increment}>Clique aqui</button>
//     </div>
//   );
// }
//export default App;

//podemos utilizar assim tambem
// export default function App() {
//   return (
//     <h1>Hello World Mello</h1> //alterar um codigo e ele ja recarregar se chama live-reloading
//   );
// }