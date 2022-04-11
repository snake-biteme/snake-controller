import React from 'react'
import client from './services/apiClientAppSync';
import './App.css';
import {updatePosition} from "./graphql/updatePosition";

const screenId = '246516c0-aad9-4bbf-818b-a39738bc6017';

const motionHandler = (angle = 25) => {
    (async () => {
        const result: any = await client.mutate({
            mutation: updatePosition,
            variables: {
                screenId: screenId,
                playerId: '1111',
                angle: Math.round(angle),
                color: '#FF69B4',
            }
        });

        console.log(result.data.updatePosition);
    })();
};

function handleClickRight () {
    motionHandler();
}

function handleClickLeft () {
    motionHandler(-25);
}



function App() {
  return (
    <div className="App">
        <button onClick={handleClickLeft}>Left</button>
        <button onClick={handleClickRight}>Right</button>
    </div>
  );
}

export default App;
