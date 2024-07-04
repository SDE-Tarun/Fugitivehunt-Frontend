import React, { useState } from 'react';
import CitySelection from './components/citySelection';
import VehicleSelection from './components/vehicleSelection';
import Result from './components/Result';
import './styles.css';
import './App.css';

const App = () => {
    const [step, setStep] = useState(0);
    const [cop, setCop] = useState(0);
    const [citySelection, setCitySelection] = useState({});
    const [vehicleSelection, setVehicleSelection] = useState({});

    const handleNextStep = () => {
        if (step === 0) {
            setStep(1);
        } else if (step === 1) {
            if (cop < 2) {
                setCop(cop + 1);
                setStep(0);
            } else {
                setStep(2);
            }
        }
    };

    const handleCitySelection = (cop, city) => {
        setCitySelection(prev => ({ ...prev, [cop]: city }));
    };

    const handleVehicleSelection = (cop, vehicle) => {
        setVehicleSelection(prev => ({ ...prev, [cop]: vehicle }));
    };

    return (
        <div className="App">
            {step === 0 && <CitySelection cop={cop} onNext={handleNextStep} setCitySelection={handleCitySelection} />}
            {step === 1 && <VehicleSelection cop={cop} onNext={handleNextStep} setVehicleSelection={handleVehicleSelection} />}
            {step === 2 && <Result citySelection={citySelection} vehicleSelection={vehicleSelection} />}
        </div>
    );
};

export default App;

