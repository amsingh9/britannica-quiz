import React, {Component} from 'react'
import Question from '../../../Quiz/Question'
import Button from '../../../UI/Button/Button'
import axios from 'axios'
import {connect} from 'react-redux'
import * as actions from '../../../store/actionsCreator'

class Q2 extends Component {
    state = {
        questions : [],
        answer : "",
        explanation : "",
        hidden : true,
        correct : null,
        disabled : null,
        nextdisabled : true
    }

    handleOptionChange = (changeEvent) => {
        console.log(changeEvent.target.name);
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }

    checkAnsHandler = () => {

        if(this.state.selectedOption === this.state.answer) {
            this.props.updateScore();
            this.setState({
                hidden : false,
                correct : true,
                disabled : true,
                nextdisabled : false
            })
        } else {
            this.setState({
               hidden : false,
               correct : false,
               disabled : true,
               nextdisabled : false
            })
        }  
    }

    resulthandler = (props) => {
        this.props.history.push('/q3');
    }

    componentDidMount() {
        axios.get('https://britannicaquiz-aman.firebaseio.com/1.json')
            .then(res => {
                console.log(res.data);
                const fetchedData = [];
                const exp  = res.data.explanation;
                let ans = res.data.correct;
                if(ans === 1) {
                    ans = "Fact"
                } else {
                    ans = "Fiction"
                }
                fetchedData.push(res.data);
                this.setState({
                    questions : fetchedData,
                    answer : ans,
                    explanation : exp
                });
            })
            .catch(err => {
                console.log("Error Occured : " + err);    
            });
    }
    render () {
        const explanation = this.state.correct ? (this.state.hidden ? null : <p className="Success">Correct ! {this.state.explanation}</p>) : this.state.hidden ? null : <p className="Danger">Oops! {this.state.explanation}</p> ;
        return (
            <div className="question">
                {this.state.questions.map((question,i) => (
                        <Question key={i} changeEvent={this.handleOptionChange} name={"ans"+i} question={question.question}
                        answers={question.answers}/>
                    ))}
                 <div>
                    <Button disabled={this.state.disabled} click={this.checkAnsHandler} title="Check Answer"/>
                    <Button disabled={this.state.nextdisabled} click={this.resulthandler} title="Next Question"/>
                </div>
                {explanation}
            </div>  
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateScore : () => dispatch(actions.updateScore())
    }
}

export default connect(null,mapDispatchToProps)(Q2);