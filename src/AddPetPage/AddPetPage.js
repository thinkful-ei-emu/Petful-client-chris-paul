import React from 'react';
import { Link } from 'react-router-dom';
import ValidationError from './ValidationError';
export default class AddPetPage extends React.Component  {
  state={
    species:'dog',
    name:'',
    age:'',
    sex:'Male',
    breed:'',
    story:'',
    imageURL:'',
    imageDescription:'',
  }

  handleChange=(change,changeType)=>{
    if(changeType==='age'){
      change=Number(change);
      if(change!==0 && !change)
        change='';
    }
    this.setState({
      [changeType]:change
    })
  }
  validateAge=()=>{
    if(this.state.age===0)
      return;
    if(!this.state.age)
      return 'Not a Number';
    if(this.state.age<0)
      return 'no fetuses please';
  }
  validateNotEmpty=(type)=>{
    if(this.state[type].length===0)
      return 'Can\'t be blank';
  }
  validateFinal(){
    let checker=true;
    Object.keys(this.state).forEach(key=>{
      if(key==='age' && this.validateAge())
        checker=false;
      else if(key!=='imageDescription' && this.validateNotEmpty(key))
        checker=false;
    })
    return checker;
  }

  handleSubmit(){
    return fetch(`https://petful-chris-paul.herokuapp.com/api/${this.state.species.toLowerCase()}`, {
      method: 'POST',
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        ...this.state
      }),
    })
    .then(()=>{
      this.props.history.goBack();
    })
  }
  render(){
    return(
      <div>
        <form className="add-pet-form" onSubmit={(e)=>{
          e.preventDefault();
          if(this.validateFinal())
            this.handleSubmit();
        }}>
          <h2>Add a Pet!</h2>

          <label>
          Species:
          
          <select id='add-pet-species-select' value={this.state.species} onChange={(e)=>this.handleChange(e.target.value,'species')}>
            <option value='dog'>Dog</option>
            <option value='cat'>Cat</option>
          </select>
          </label>
          <br/>

          <label htmlFor="add-pet-name-input">Name of pet:</label>
          <input id='add-pet-name-input' value={this.state.name} onChange={(e)=>this.handleChange(e.target.value,'name')}/>
          <ValidationError message={this.validateNotEmpty('name')}/>
          <br/>

          <label htmlFor="add-pet-breed-input">Breed of pet:</label>
          <input id='add-pet-breed-input' value={this.state.breed} onChange={(e)=>this.handleChange(e.target.value,'breed')}/>
          <ValidationError message={this.validateNotEmpty('breed')}/>
          <br/>

          <label>
          Sex:
          <select id='add-pet-sex-select' value={this.state.sex} onChange={(e)=>this.handleChange(e.target.value,'sex')}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
          </label>
          <br/>

          <label htmlFor="add-pet-age-input">Age of pet:</label>
          <input id='add-pet-age-input' value={this.state.age} onChange={(e)=>this.handleChange(e.target.value,'age')}/>
          <ValidationError message={this.validateAge()}/>
          <br/>

          <label htmlFor="add-pet-story-input">Story of pet:</label>
          <br/>
          <textarea id='add-pet-story-input' value={this.state.story} onChange={(e)=>this.handleChange(e.target.value,'story')}/>
          <ValidationError message={this.validateNotEmpty('story')}/>
          <br/>

          <label htmlFor="add-pet-imageURL-input">Image URL of pet:</label>
          <input id='add-pet-imageURL-input' value={this.state.imageURL} onChange={(e)=>this.handleChange(e.target.value,'imageURL')}/>
          <ValidationError message={this.validateNotEmpty('imageURL')}/>
          <br/>

          <label htmlFor="add-pet-imageDescription-input">Image Description of pet:</label>
          <input id='add-pet-imageDescription-input' value={this.state.imageDescription} onChange={(e)=>this.handleChange(e.target.value,'imageDescription')}/>
          <br/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}