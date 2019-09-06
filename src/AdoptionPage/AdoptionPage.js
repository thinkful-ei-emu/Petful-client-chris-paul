import React from 'react';
import { Link } from 'react-router-dom';
import PetsApiService from '../services/api-service';

export default class AdoptionPage extends React.Component {
    state = {
        dog: {},
        cat: {}
    }
    componentDidMount(){
        PetsApiService.getCat()
            .then(res => {
                console.log(res)
                this.setState({ cat: res })
            })
            .catch(e => console.error(e));
        PetsApiService.getDog()
            .then(res => {
                console.log(res)
                this.setState({ dog: res })
            })
            .catch(e => console.error(e));
    }

    handleAdoptCat(e){}
    
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
                        <button onClick={e => this.handleAdoptCat(e)}>I Want a Cat!</button>
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