import React, {Component} from 'react'
import {connect} from 'react-redux'

class ResultPage extends Component {
    render () {
        const result = this.props.updatedscore >2 ? <p> Good Job !! You got {this.props.updatedscore} answers correct ! </p> : <p> You got {this.props.updatedscore} answers correct. Better Luck next time. </p>;
        return (
            <div>
                {result}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        updatedscore : state.score
    }
}

export default connect(mapStateToProps)(ResultPage);