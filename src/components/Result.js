import React, { useState, useEffect } from 'react';
import { getResult } from '../api';

const Result = () => {
    const [result, setResult] = useState('');

    useEffect(() => {
        getResult().then(response => setResult(response.data.message));
    }, []);

    return (
        <div className='card'>
            <h2>Result</h2>
            <p>{result}</p>
        </div>
    );
};

export default Result;


