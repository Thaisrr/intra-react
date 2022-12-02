import React, {lazy, Suspense, useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Presentation from './pages/Presentation/Presentation';
import Navigation from './components/Navigation';
import Listes from './pages/Listes';
import Dynamique from './pages/Dynamique';
import Memo from "./pages/Memo";
import Effet from "./pages/Effet";
import Classe from "./pages/Classe";
import Parent from "./pages/Parent";
import Dashboard from "./pages/Dashboard";
import Dashboard2 from "./pages/Dashboard2";
import ProductDetails from "./pages/ProductDetails";
import Formulaires from "./pages/Formulaires";
import Login from "./pages/Login";
import {isLogged as isLoggedService} from "./helpers/services/AuthService";


const Conditionnel = lazy(() => import('./pages/Conditionnel'));
const Users = lazy(() => import('./pages/Users'));
const AddUser = lazy(() => import('./pages/AddUser'));

const ProtectedRoute = ({children} : {children: JSX.Element}) => {
    if(isLoggedService()) return children; // Le composant visé
    return <Navigate to='/login' replace/> // Redirection vers login
}

function App() {
    const [isLogged, setIsLogged] = useState<boolean>(isLoggedService());


    return (
    <div className="App">
      <BrowserRouter> {/* Cette balise doit toujours être en top level */}
      <Navigation isLogged={isLogged} setIsLogged={setIsLogged}/>
      <main>
        <Suspense fallback={<div>Chargement...</div>}> {/* Obligatoire en lazy loading +  Créer un composant loader */}
          <Routes>
              <Route path="/" element={<Presentation/>} />
              <Route path="/affichage-conditionnel" element={<Conditionnel/>} />
              <Route path="/affichage-liste" element={<Listes/>} />
              <Route path='/affichage-dynamique' element={<Dynamique/>} />
              <Route path='/memo' element={<Memo/>} />
              <Route path='/classe' element={<Classe/>} />
              <Route path='/effet' element={<Effet/>} />
              <Route path='/parent' element={<Parent/>} />
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/dashboard2' element={<Dashboard2/>} />
              <Route path='/details/:id' element={<ProductDetails/>} />
              <Route path='/forms' element={<Formulaires/>} />
              <Route path='/login' element={<Login setIsLogged={setIsLogged}/>} />
              <Route path='/users' element={<ProtectedRoute><Users/></ProtectedRoute>} >
                      <Route path='add' element={<AddUser/>} />
                      <Route path='dashboard' element={<h2>Dashboard</h2>} />
              </Route>
              <Route path="*" element={<h1>😭 404 Not Found 😭</h1>} />
          </Routes>
        </Suspense>
      </main>
      <footer>
        <hr/>
        <p style={{textAlign: 'center'}}>Formation React | Dawan -- 2022</p>
      </footer>
      </BrowserRouter>   
    </div>
  );
}

export default App;
