import React, {Component} from 'react'
import './QuizSection.css'
import Button from '../../UI/Button/Button'
import axios from 'axios'

class QuizSection extends Component {

    state = {
        title : "",
        desc : ""
    }
    
    startQuizHandler = () => {
        this.props.history.push('/q1');    
    }

    componentDidMount () {
        axios.get('https://britannicaquiz-aman.firebaseio.com/Introduction.json')
            .then(res => {
                const title = res.data.title;
                const desc = res.data.description;
                this.setState({
                    title : title,
                    desc : desc
                })
            })
            .catch(err => {
                console.log("Error Occured : " + err);    
            });
    }

    render () {
        return (
            <article className="quizsection">
                <h3>{this.state.title}</h3>
                <div>
                    <p>
                        {this.state.desc}
                    </p>
                    <p>
                        A note before you start - Hit "Check Answer" before you move on to the next one. We 'll display the result at the end !
                    </p>
                </div>
                <Button click={this.startQuizHandler} title="START QUIZ"/>
            </article>
        );
    }
}

export default QuizSection