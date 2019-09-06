import React from 'react';
import { Link } from 'react-router-dom';

export default class AdoptionPage extends React.Component {
    state = {
        dog: {},
        cat: {}
    }
    componentDidMount(){
        this.getCat();
        this.getDog();
    }

    getCat() {
        return fetch('https://petful-chris-paul.herokuapp.com/api/cat')
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
            .then(res => {
                console.log(res)
                this.setState({ cat: res })
            })
            .catch(e => console.error(e))
    }

    getDog() {
        return fetch('https://petful-chris-paul.herokuapp.com/api/dog')
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
            .then(res => this.setState({ dog: res }))
            .catch(e => console.error(e))
    }

    handleAdopt(){

    }
    
    render(){
        const { dog, cat } = this.state
        return(
            <>
                <section>
                    <div>
                        <h2>Adopt a Dog!</h2>
                        <img src={dog.imageURL} alt={dog.imageDescription} />
                        <h4>Name: {dog.name}</h4>
                        <p>Breed: {dog.breed}</p>
                        <p>Age: {dog.age}</p>
                        <p>Gender: {dog.sex}</p>
                        <p>History: {dog.story}</p>
                        <button>I Want a Dog!</button>
                    </div>
                    <div>
                        <h2>Adopt a Cat!</h2>
                        <img src={cat.imageURL} alt={cat.imageDescription} />
                        <h4>Name: {cat.name}</h4>
                        <p>Breed: {cat.breed}</p>
                        <p>Age: {cat.age}</p>
                        <p>Gender: {cat.sex}</p>
                        <p>History: {cat.story}</p>
                        <button>I Want a Cat!</button>
                    </div>
                </section>
                <div>
                    <button>I Want Both</button>
                    <Link to='/'><button>Back of the Line, Please...(Something Else)</button></Link>
                </div>
            </>
        )
    }
}