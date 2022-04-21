import React, {useState} from 'react';
import './App.css';
import InitialScreen from './components/initialScreen/InitialScreen';
import Controllers from './components/controllers/Controllers';
import {defColor} from './CONSTS';

function App() {
    const [name, setName] = useState('');
    const [color, setColor] = useState(defColor);
    const [showControls, setShowControls] = useState(false);

    return (
        <div className="App">
            {showControls ?
                <Controllers name={name} color={color}/> :
                <InitialScreen
                    showControls={setShowControls}
                    setName={setName}
                    name={name}
                    setColor={setColor}
                    color={color}
                />}
        </div>
    );
}

export default App;
