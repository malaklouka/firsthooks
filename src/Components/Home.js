import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className="home">
                <Link style={{ textAlign: 'center', fontSize: 50, margin: 10, color: 'white' }} to="/">
                    Home
                </Link>
            </div>
        </div>
    );
}

export default Home;