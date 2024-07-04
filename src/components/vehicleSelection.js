import React, { useState, useEffect } from 'react';
import { getVehicles, selectVehicle } from '../api';
import carImage from '../images/Vehicle/car.jpeg'; // Example image, replace with actual images
import bikeImage from '../images/Vehicle/bike.jpeg'; // Example image, replace with actual images
import suvImage from '../images/Vehicle/suv.jpeg'; // Example image, replace with actual images

const vehicleImages = {
    "evCar": carImage,
    "evBike": bikeImage,
    "evSuv": suvImage
};

const VehicleSelection = ({ cop, onNext, setVehicleSelection }) => {
    const [vehicles, setVehicles] = useState({});
    const [selectedVehicle, setSelectedVehicle] = useState('');

    useEffect(() => {
        getVehicles().then(response => setVehicles(response.data));
    }, []);

    const handleSelectVehicle = () => {
        selectVehicle(cop, selectedVehicle).then(() => {
            setVehicleSelection(cop, selectedVehicle);
            onNext();
        });
    };

    return (
        <div className="card">
            <h2>Select Vehicle for Cop {cop + 1}</h2>
            <select className="form-select" onChange={(e) => setSelectedVehicle(e.target.value)} value={selectedVehicle}>
                <option value="">Select a vehicle</option>
                {Object.keys(vehicles).map(vehicle => (
                    <option key={vehicle} value={vehicle}>{vehicle} (Range: {vehicles[vehicle].range} KM, Available: {vehicles[vehicle].count})</option>
                ))}
            </select>
            <button className="btn btn-primary" onClick={handleSelectVehicle}>Next</button>
            {selectedVehicle && (
                <div>
                    <h3>{selectedVehicle}</h3>
                    <img src={vehicleImages[selectedVehicle]} alt={selectedVehicle} />
                </div>
            )}
        </div>
    );
};

export default VehicleSelection;
