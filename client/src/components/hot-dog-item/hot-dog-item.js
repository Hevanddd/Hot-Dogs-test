import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { showEditForm, hideEditForm } from '../../redux/actions'
import { editFormSelector, allHotDogsSelector } from '../../redux/selectors';
import { deleteHotDogStart, updateHotDogStart } from '../../redux/actions';

import './hot-dog-item.css';

const HotDogItem = ({data, isVisibleEditForm, showEditForm, deleteHotDogStart, updateHotDogStart, hideEditForm, hotDogs}) => {

    const { register, handleSubmit, errors } = useForm(); 
    const names = hotDogs? hotDogs.map((el) => el.title): [];

    const { hotdog_id: id, title, price, description, img } = data;

    const updateHotDog = (data) => {
        updateHotDogStart(data);
        hideEditForm();
    }

    return (
        <li className='hot-dog-item'>
            <img src={img} alt=""/>
            {isVisibleEditForm !== id &&
                <>
                    <h3 className='hot-dog-item__title'>{title}</h3>
                    <p className='hot-dog-item__price'>{price} $</p>
                    <p className='hot-dog-item__description'>{description}</p>
                    <button onClick={() => showEditForm(id)} className='hot-dog-item__btn'>Edit</button>
                </>
            }

            {isVisibleEditForm === id && 
                <form className='edit-form' onSubmit={handleSubmit((data) => updateHotDog({data, id}))}>
                    {errors.title && errors.title.type === 'occupied' && (
                        <p className='error'>You already have this point.</p>
                    )}
                    <input name='img' type='text' defaultValue={img} ref={register({ required: true})} />

                    <input name='title' type='text' defaultValue={title} ref={register({ required: true, validate: {
                        occupied: (value) => {
                            let isOccupied;
                            names.forEach(el => {
                                if(value === el && value !==title){
                                    isOccupied = false
                                }
                            });
                            return isOccupied;
                        } 
                    } })}/>
                    <input name='price' type='number' defaultValue={price} ref={register({ required: true })}/>
                    <textarea 
                        name='description' 
                        className='edit-form__description'
                        defaultValue={description} 
                        ref={register({ required: true })}>
                    </textarea>
                    <button  type='button' className='hot-dog-item__btn' onClick={() => deleteHotDogStart(id)} >Delete</button>
                    <button type='submit' className='hot-dog-item__btn'>Upgrade</button>
                </form>
            }
        </li>
    );
}

const mapStateToProps = (state) => {
    return {
        isVisibleEditForm: editFormSelector(state),
        hotDogs: allHotDogsSelector(state)
    }
}

const mapDispatchToProps = {
    showEditForm,
    hideEditForm,
    deleteHotDogStart,
    updateHotDogStart
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HotDogItem);
