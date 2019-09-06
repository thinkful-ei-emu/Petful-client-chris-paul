import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default class LandingPage extends React.Component{

    render(){
        return (
            <section className='LandingPage'>
                <div class="hero-image">
                    <div class="hero-text">
                        <h1>FIFO Adoption Agency</h1>
                        <p>Make A Difference – Adopt</p>
                        <p>Add yourself to the list of people making the great choice to
                            adopt dogs and cats in need…</p>
                        
                        <p>When you click the animal that you want adopt, you will be added
                            to our queue. Once we finish processing the paperwork, you'll receive
                            your new pet!
                        </p>

                        <p>Help animals who have been lost or turned into local shelters, 
                            or animals that have been surrendered by their owners due to 
                            health, lifestyle and/or living arrangement changes.</p>
                        <Link to='/adoption'>
                            <button>Adopt!</button>
                        </Link>
                    </div>
                </div>
            </section>
        )
    }
}