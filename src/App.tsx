import React, {useState} from 'react'
import './App.css';
import InitialScreen from "./components/initialScreen/InitialScreen";
import Controllers from "./components/controllers/Controllers";

function App() {
    const [showControls, setShowControls] = useState(false);

    return (
        <div className="App">
            {showControls ? <Controllers/> : <InitialScreen showControls={setShowControls}/>}
        </div>
    );
}

export default App;
