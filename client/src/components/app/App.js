import React from 'react';
import { connect } from 'react-redux';
import Header from '../header';
import HotDogList from '../hot-dog-list';
import AddForm from '../add-form';
import { addFormSelector } from '../../redux/selectors';

import './app.css';

const App = ({isVisiblePopup}) => {
  
  return (
    <div>
      <Header />
      <HotDogList />
      { isVisiblePopup && <AddForm /> }
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        isVisiblePopup: addFormSelector(state)
    }
}

export default connect(
    mapStateToProps,
)(App);