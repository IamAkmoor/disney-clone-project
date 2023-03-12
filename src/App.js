import './App.css';
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home';
import Detail from './components/Detail';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='detail/:id' element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  )
}

// import './App.css';
// import {BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom";
// import Login from './components/Login'
// import Header from './components/Header'
// import Home from './components/Home';
// import Detail from './components/Detail';
// import { useEffect } from 'react';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Router>
//           <Header/>
//           <Switch>
//             <Route exact path='/'>
//               <Login/>
//             </Route>
//             <Route exact path='/home'>
//               <Home />
//             </Route>
//             <Route path='/detail/:id'>
//               <Detail/>
//             </Route>
//           </Switch>
//         </Router>
//       </div>
//     </BrowserRouter>
//   );
// }

export default App;
