import React , {Component} from 'react'
import './Question.css'
//import Button from '../UI/Button/Button'

class Question extends Component {
    
    render() {
        return (
            <div>
                <p dangerouslySetInnerHTML={{ __html: this.props.question }}></p>
                <div className="choice">
                    <label htmlFor={this.props.answers[1]}><input onChange={this.props.changeEvent} name={this.props.name} type="radio" value={this.props.answers[0]}/> {this.props.answers[0]}</label>
                    <label htmlFor={this.props.answers[1]}><input onChange={this.props.changeEvent} name={this.props.name} type="radio" value={this.props.answers[1]}/> {this.props.answers[1]}</label>
                </div>
            </div>
        );
    }    
}

export default Question;