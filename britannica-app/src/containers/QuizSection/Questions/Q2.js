import React, {Component} from 'react'
import Question from '../../../Quiz/Question'
import Button from '../../../UI/Button/Button'
import {connect} from 'react-redux'
import * as actions from '../../../store/actionsCreator'

class Q2 extends Component {
    state = {
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
        const q = this.props.ques[0];
        const quest = Object.keys(q).map(key => {
            return (
                [key, q[key]]
            ) 
        });
        let mapping = [];
        mapping.push((quest[1])[1]);

        let ans = mapping[0].correct;
        if(ans === 1) {
            ans = "Fact"
        } else {
            ans = "Fiction"
        }

        let exp = mapping[0].explanation;
        
        this.setState({
            answer : ans,
            explanation : exp
        });
    }
    render () {
        const explanation = this.state.correct ? (this.state.hidden ? null : <p className="Success">Correct ! {this.state.explanation}</p>) : this.state.hidden ? null : <p className="Danger">Oops! {this.state.explanation}</p> ;
        const q = this.props.ques[0];
        const quest = Object.keys(q).map(key => {
            return (
                [key, q[key]]
            ) 
        });
        let mapping = [];
        mapping.push((quest[1])[1]);
        return (
            <div className="question">
                {mapping.map((question,i) => (
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

const mapStateToProps = state => {
    return {
        ques : state.questions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateScore : () => dispatch(actions.updateScore())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Q2);