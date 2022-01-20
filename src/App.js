import React from 'react'
import Navigation from './components/Navigation';
import AppRouter from './routes/AppRouter';

function App() {
    return (
        <div className='wrapper'>
            <div className='app'>
                <Navigation/>
                <AppRouter/>
            </div>
        </div>
    )
}

export default App
