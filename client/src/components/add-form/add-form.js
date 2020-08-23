import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { hideAddForm, addHotDogStart, getAllHotDogsStart } from '../../redux/actions';
import { allHotDogsSelector } from '../../redux/selectors';
import './add-form.css';

const AddForm = ({ hideAddForm, hotDogs, addHotDogStart }) => {

    const names = hotDogs? hotDogs.map((el) => el.title): [];
    const { register, handleSubmit, errors } = useForm();

    const saveHotDog = (data) => {
        addHotDogStart(data);
        hideAddForm();
    }

    return (
        <div className='add-form__wrapper'>
            <div className='add-form'>
                <h3 className='add-form__title'>Add new hot-dog</h3>
                <form className='add-form__form' onSubmit={handleSubmit((data) => saveHotDog(data))}>
                    <input type='text' placeholder='Name' name = 'title' ref={register({ required: true, validate: {
                        occupied: (value) => {
                            let isOccupied;
                            names.forEach(el => {
                                if(value === el){
                                    isOccupied = false
                                }
                            });
                            return isOccupied;
                        }
                    } })}/>

                    {errors.title && errors.title.type === 'occupied' && (
                        <p className='error'>You already have this point.</p>
                    )}

                    <input type='number' placeholder='Price' name='price' ref={register({ required: true })}/>
                    <input type='text' placeholder='Description' name='description' ref={register({ required: true })}/>
                    <input type='text' placeholder='Image url'  name='img' ref={register({ required: true })}/>
                    <div className='form__wrapper-btn'>
                        <button type='button' onClick={hideAddForm}>No Thanks</button>
                        <button type='submit'>Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        hotDogs: allHotDogsSelector(state)
    }
}

const mapDispatchToProps = {
    hideAddForm,
    addHotDogStart,
    getAllHotDogsStart
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddForm);

