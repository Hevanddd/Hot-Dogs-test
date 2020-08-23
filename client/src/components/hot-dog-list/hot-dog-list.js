import React, { useEffect } from 'react';
import HotDogItem from '../hot-dog-item';
import { connect } from 'react-redux';
import { getAllHotDogsStart } from '../../redux/actions';
import { allHotDogsSelector, loadingStatusSelector } from '../../redux/selectors';

import './hot-dog-list.css';

const HotDogList = ({getAllHotDogsStart, allHotDogs, isLoading}) => {

    useEffect(() => {
        !isLoading && getAllHotDogsStart();
    }, [isLoading, getAllHotDogsStart]);

    return (
        <ul className='hot-dog-list'>
            {allHotDogs &&
            allHotDogs.map((el) => {
                return <HotDogItem key={el.hotdog_id} data={el} />
            })}
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        allHotDogs: allHotDogsSelector(state),
        isLoading: loadingStatusSelector(state), 
    }
}

const mapDispatchToProps = {
    getAllHotDogsStart
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HotDogList);
