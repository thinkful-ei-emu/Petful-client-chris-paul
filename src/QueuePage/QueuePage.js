import React from 'react';
import { adoptName, display } from '../Queue/Queue';
import PetsApiService from '../services/api-service';

export default class QueuePage extends React.Component {
    state = {
        line: adoptName(),
        choice: '',
        dog: {},
        cat: {}
    }

    componentDidMount() {
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
        const { line } = this.state;
        this.interval = setInterval(() => {
            this.state.line.dequeue();
            this.ranChoice();
            this.setState({ line })
        }, 2000)
    }
    componentDidUpdate(){
        if(!this.state.line.first){
            clearInterval(this.interval)
            setTimeout(this.props.history.push('/adoption'), 2000)
            
        }
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    renderChoice(){
        const {choice} = this.state;
        if(choice === 'yes'){
            return <>
            <p>They chose to adopt!</p>
            </>
        } else if(choice === 'no'){
            return <>
            <p>They chose not to adopt</p>
            </>
        } else {
           return <></>
        }
    }

    ranChoice(){
        if(Math.floor(Math.random()*98+1) > 60){
            let num = Math.floor(Math.random()*98+1)
            if(num > 90){
                console.log('both')
                PetsApiService.deleteCat()
                    .then(res => PetsApiService.deleteDog)
                    .then(res => {
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
                    })
            } else if(num > 40){
                console.log('dog')
                PetsApiService.deleteDog()
                    .then(res => {
                        PetsApiService.getDog()
                            .then(res => {
                                console.log(res)
                                this.setState({ dog: res })
                            })
                            .catch(e => console.error(e));
                    })
            } else {
                console.log('cat')
                PetsApiService.deleteCat()
                    .then(res => {
                        PetsApiService.getCat()
                            .then(res => {
                                console.log(res)
                                this.setState({ cat: res })
                            })
                            .catch(e => console.error(e));
                    })
            }
            this.setState({ choice: 'yes' })
        } else{
            console.log('none')
            this.setState({ choice: 'no' })
        }
    }

    renderNames(){
        return(
            <>
                <p>{display(this.state.line).length} people are ahead of you</p>
                {this.renderChoice()}
                {this.state.line.first && <p>{this.state.line.first.data} is deciding.</p>}
                <p>Dog, Cat or Both!</p>
            </>
        )
    }

    render() {
        const { dog, cat } = this.state
        return (
            <>
                <div>
                    {this.renderNames()}
                    <div>
                        <h2>Adopt a Dog!</h2>
                        <img src={dog.imageURL} alt={dog.imageDescription} />
                        <h4>Name: {dog.name}</h4>
                        <p>Breed: {dog.breed}</p>
                    </div>
                    <div>
                        <h2>Adopt a Cat!</h2>
                        <img src={cat.imageURL} alt={cat.imageDescription} />
                        <h4>Name: {cat.name}</h4>
                        <p>Breed: {cat.breed}</p>
                    </div>
                </div>
            </>
        )
    }
}