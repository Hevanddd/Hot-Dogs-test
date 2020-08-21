import React from 'react';
import HotDogItem from '../hot-dog-item';
import './hot-dog-list.css';

const HotDogList = () => {

    const data = [
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/1280px-Hotdog_-_Evan_Swigart.jpg',
            title: 'New York City',
            price: '1',
            description: `New Yorkers eat more hot-dogs than any other group in the country. From downtown Manhattan to Coney Island, when you buy your hot dog in the Big Apple, deli-style yellow mustard`,
            id: 2
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/1280px-Hotdog_-_Evan_Swigart.jpg',
            title: 'New York City',
            price: '1',
            description: `New Yorkers eat more hot-dogs than any other group in the country. From downtown Manhattan to Coney Island, when you buy your hot dog in the Big Apple, deli-style yellow mustard`,
            id: 3
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/1280px-Hotdog_-_Evan_Swigart.jpg',
            title: 'New York City',
            price: '1',
            description: `New Yorkers eat more hot-dogs than any other group in the country. From downtown Manhattan to Coney Island, when you buy your hot dog in the Big Apple, deli-style yellow mustard`,
            id: 4
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/1280px-Hotdog_-_Evan_Swigart.jpg',
            title: 'New York City',
            price: '1',
            description: `New Yorkers eat more hot-dogs than any other group in the country. From downtown Manhattan to Coney Island, when you buy your hot dog in the Big Apple, deli-style yellow mustard`,
            id: 5
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/1280px-Hotdog_-_Evan_Swigart.jpg',
            title: 'New York City',
            price: '1',
            description: `New Yorkers eat more hot-dogs than any other group in the country. From downtown Manhattan to Coney Island, when you buy your hot dog in the Big Apple, deli-style yellow mustard`,
            id: 6
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/1280px-Hotdog_-_Evan_Swigart.jpg',
            title: 'New York City',
            price: '1',
            description: `New Yorkers eat more hot-dogs than any other group in the country. From downtown Manhattan to Coney Island, when you buy your hot dog in the Big Apple, deli-style yellow mustard`,
            id: 7
        }
    ]

    const list = data.map((el) => {
        return <HotDogItem key={el.id} data={el} />
    }) 

    return (
        <ul className='hot-dog-list'>
            {list}
        </ul>
    );
}

export default HotDogList;
