import React from 'react';
import {Provider} from 'react-redux';

import store from './components/redux/store';
import {NavBar} from './components/navBar';
import {SideMenu} from './components/sideMenu';
import BooksContainer from './components/booksContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">   
        <NavBar />
        <div className="container">
          <SideMenu />
          <BooksContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
