import React from 'react';
import './add-form.css';

const AddForm = () => {
    return (
        <div className='add-form__wrapper'>
            <div className='add-form'>
                <h3 className='add-form__title'>Add new hot-dog</h3>
                <form className='add-form__form'>
                    <input type='text' placeholder='Name'/>
                    <input type='number' placeholder='Price'/>
                    <input type='text' placeholder='Description'/>
                    <input type='text' placeholder='Image url'/>
                    <div className='form__wrapper-btn'>
                        <button>No Thanks</button>
                        <button>Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddForm;