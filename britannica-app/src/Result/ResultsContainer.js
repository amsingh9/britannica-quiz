import React , {Component} from 'react'
import {connect} from 'react-redux'
import './ResultsContainer.css'

class ResultContainer extends Component {
    render () {
        console.log(typeof this.props.correctans);
        const correctMapping = this.props.correctans;
        const wrongMapping = this.props.wrongans;
        return (
            <article>
                <div className="resultContainer">
                    <p>Your answers :</p>
                    {correctMapping.map((ques,i) => (
                        <p className="correctAns" dangerouslySetInnerHTML={{ __html: ques }} key={i}></p>
                    ))}
                    {wrongMapping.map((ques,i) => (
                        <p className="wrongAns" dangerouslySetInnerHTML={{ __html: ques }} key={i}></p>
                    ))}
                </div>
            </article>
        );
    }
}

const mapStateToProps = state => {
    return {
        correctans : state.correctans,
        ques : state.questions,
        wrongans : state.wrongans
    }
}

export default connect(mapStateToProps)(ResultContainer);