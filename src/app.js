/* eslint-disable no-unused-vars */
import React from 'react';
import './app.scss';
import ToDo from './component/todo/todo.js';
import Header from './component/header/header.js';
import Footer from './component/footer/footer.js';

function App (){

  return (
    <React.Fragment>
      <Header />
      <ToDo />
      <Footer />
    </React.Fragment>
  );
}
export default App;