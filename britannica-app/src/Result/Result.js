import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Result.css'
import ResultsContainer from './ResultsContainer'

class ResultPage extends Component {

    componentWillMount() {
        localStorage.clear();
    }

    render () {
        let result = "";
        if(this.props.updatedscore === 0 || this.props.updatedscore === 1 || this.props.updatedscore === 2 || this.props.updatedscore === 3) {
            result = <p> You got {this.props.updatedscore} answers correct. You need to know your Superheros Better</p>    
        } else if(this.props.updatedscore === 4 || this.props.updatedscore === 5) {
            result = <div><h3>Almost There!!</h3><p> You got {this.props.updatedscore} answers correct ! </p></div>
        } else if (this.props.updatedscore === 6) {
            result = <div><h3>Grand Master !!</h3><p> Good Job !! You got {this.props.updatedscore} answers correct ! </p></div>
        }
        return (
            <div className="result">
                {result}
                <ResultsContainer/>
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