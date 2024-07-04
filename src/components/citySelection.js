import React, { useState, useEffect } from 'react';
import { getCities, selectCity } from '../api';
import newYorkImage from '../images/City/new_york.jpeg';
import losAngelesImage from '../images/City/los_angeles.jpeg';
import chicagoImage from '../images/City/chicago.jpeg';
import singaporeImage from '../images/City/singapore.jpeg';
import londonImage from '../images/City/london.jpeg';

const cityImages = {
    "New York": newYorkImage,
    "Los Angeles": losAngelesImage,
    "Chicago": chicagoImage,
    "Singapore": singaporeImage,
    "London": londonImage
};

const CitySelection = ({ cop, onNext, setCitySelection }) => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        getCities().then(response => setCities(response.data));
        console.log(selectCity);
    }, []);

    const handleSelectCity = () => {
        selectCity(cop, selectedCity).then(() => {
            setCitySelection(cop, selectedCity);
            onNext();
        });
    };

    return (
        <div className="card">
            <h2>Select City for Cop {cop + 1}</h2>
            <select className="form-select" onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity}>
                <option value="">Select a city</option>
                {cities.map(city => (
                    <option key={city.name} value={city.name}>{city.name} ({city.distance} KM)</option>
                ))}
            </select>
            <button className="btn btn-primary" onClick={handleSelectCity}>Next</button>
            {selectedCity && (
                <div>
                    <h3>{selectedCity}</h3>
                    <img src={cityImages[selectedCity]} alt={selectedCity} />
                </div>
            )}
        </div>
    );
};

export default CitySelection;