import React , {Component} from 'react'
import './Homepage.css'
import Button from '../../UI/Button/Button'

class Homepage extends Component {

    takeQuizHandler = () => {
        this.props.history.push("/take-quiz");
    }

    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <img src="https://media1.britannica.com/eb-media/08/178408-118-A0ACA0C5.jpg" className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to the Britannica</h1>
                </header>
                <p className="App-intro">
                    Are you smart enough to give the quiz!<br/>
                    If you are then click the button below and lets see if you win !!
                </p>
                <Button click={this.takeQuizHandler} title="LETS GO!!"/>
            </div>
        );
    }
}

export default Homepage;