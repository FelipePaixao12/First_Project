import { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { auth, firebase } from './services/firebase';

import { authContextProvider } from './contexts/AuthContext';

function App() {

  return (
    <BrowserRouter>
      <AuthContext.Provider >
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContext.Provider>
    </BrowserRouter >

  );
}

export default App;