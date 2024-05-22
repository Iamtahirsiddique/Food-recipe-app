import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import CreateRecipe from './pages/CreateRecipe';
import SavedRecipes from './pages/SavedRecipes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/create-recipe' element={<CreateRecipe/>}/>
          <Route path='/saved-recipes' element={<SavedRecipes/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
