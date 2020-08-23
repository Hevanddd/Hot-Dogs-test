import React from 'react';
import { connect } from 'react-redux';
import { showAddForm } from '../../redux/actions';
import './header.css';

const Header = ({ showAddForm }) => {
    return(
        <header>
            <div className='wrapper'>
                <div>
                    <img src='https://pngimg.com/uploads/hot_dog/hot_dog_PNG10232.png' alt='logo-hot-dog' />
                    <button>CRUD</button>
                </div>
                <button onClick={ showAddForm }>Add hot-dog</button>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = {
    showAddForm
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);