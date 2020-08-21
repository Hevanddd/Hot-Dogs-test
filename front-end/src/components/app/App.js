import React from 'react';
import Header from '../header';
import HotDogList from '../hot-dog-list';
import AddForm from '../add-form';
import './app.css';

const App = () => {
  const isVisiblePopup = true;
  
  return (
    <div>
      <Header />
      <HotDogList />
      { isVisiblePopup && <AddForm /> }
    </div>
  );
}

export default App;
