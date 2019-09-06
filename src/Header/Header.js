import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    state = {
        adoptionList: [
            {
                human_name: 'Steve',
                pet_name: 'Fluffy'
            },
            {
                human_name: 'Steve',
                pet_name: 'Fluffy'
            },
            {
                human_name: 'Steve',
                pet_name: 'Fluffy'
            },
            {
                human_name: 'Steve',
                pet_name: 'Fluffy'
            },
            {
                human_name: 'Steve',
                pet_name: 'Fluffy'
            }
        ],
        selected: []
    }

    componentDidMount(){

    }
    render(){
        return (
            <header className='Header'>
                FIFO
            </header>
        )
    }
}