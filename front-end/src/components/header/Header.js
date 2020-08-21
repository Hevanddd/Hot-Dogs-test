import React from 'react';
import './header.css';
import '../../img/hot_dog.png'
const Header = () => {
    return(
        <header>
            <div className='wrapper'>
                <div>
                    <img src='https://pngimg.com/uploads/hot_dog/hot_dog_PNG10232.png' alt='logo-hot-dog' />
                    <button>CRUD</button>
                </div>
                <button>Add hot-dog</button>

            </div>
        </header>
    )
}

export default Header;