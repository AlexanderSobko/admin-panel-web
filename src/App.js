import './App.css';
import React, {useState} from "react";
import NavBar from './components/navbar/NavBar';

function App() {

    const [isActive, setActive] = useState(false);

    return (
        <div>
            <div>
                <NavBar set={setActive} isOpen={isActive}/>
                <div className={isActive ? "main" : 'main open'}>
                </div>
            </div>
        </div>
    );
}

export default App;