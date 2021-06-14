import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadSingleData } from '../redux/Actions/Action';

const SingleData = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(loadSingleData(id))
    }, [id])

    const data = useSelector(state => state.singleData)
    return (
        <div>
            <p>{data.title}</p>
        </div>
    );
};

export default SingleData;