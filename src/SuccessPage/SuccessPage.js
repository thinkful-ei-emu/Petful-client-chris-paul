import React from 'react';
import {Link} from 'react-router-dom';

export default class SuccessPage extends React.Component {
    render(){
        if(!this.props.location.state){
            return <div>Weird, let's take you back <Link to='/'>home</Link></div>
        }

        const {dog,cat,choseDog,choseCat}= this.props.location.state;
        if(choseDog){
            fetch('https://petful-chris-paul.herokuapp.com/api/dog',{
                method:'DELETE',
            })
        }
        if(choseCat){
            fetch('https://petful-chris-paul.herokuapp.com/api/cat',{
                method:'DELETE',
            })
        }
        return (
            <div>
                {choseDog &&
                    <div>
                        <h2>Congratulations you have adopted {dog.name}</h2>
                        <img src={dog.imageURL} alt={dog.imageDescription} />
                        <h4>Name: {dog.name}</h4>
                        <p>Breed: {dog.breed}</p>
                        <p>Age: {dog.age}</p>
                        <p>Gender: {dog.sex}</p>
                        <p>History: {dog.story}</p>
                    </div>
                }
                {choseCat &&
                    <div>
                        <h2>Congratulations you have adopted {cat.name}</h2>
                        <img src={cat.imageURL} alt={cat.imageDescription} />
                        <h4>Name: {cat.name}</h4>
                        <p>Breed: {cat.breed}</p>
                        <p>Age: {cat.age}</p>
                        <p>Gender: {cat.sex}</p>
                        <p>History: {cat.story}</p>
                    </div>
                }

            </div>
        );
    }
}