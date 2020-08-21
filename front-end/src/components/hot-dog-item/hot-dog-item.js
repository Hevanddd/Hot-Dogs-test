import React from 'react';
import './hot-dog-item.css';

const HotDogList = ({data}) => {

    const edit = true;

    return (
        <li className='hot-dog-item'>
            <img src={data.img} alt=""/>
            {!edit &&
                <>
                    <h3 className='hot-dog-item__title'>{data.title}</h3>
                    <p className='hot-dog-item__price'>{data.price}</p>
                    <p className='hot-dog-item__description'>{data.description}</p>
                    <button className='hot-dog-item__btn'>Edit</button>
                </>
            }
            {edit && 
                <form className='edit-form'>
                    <input type='text' value={data.img}/>
                    <input type='text' value={data.title}/>
                    <input type='text' value={data.price}/>
                    <textarea value={data.description} className='edit-form__description'></textarea>
                    <button className='hot-dog-item__btn'>Delete</button>
                    <button className='hot-dog-item__btn'>Upgrade</button>
                </form>
            }
        </li>
    );
}

export default HotDogList;
