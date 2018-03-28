import React, {Component} from 'react'
import './QuizSection.css'
import Button from '../../UI/Button/Button'
import axios from 'axios'
import {connect} from 'react-redux'
import * as actions from '../../store/actionsCreator'
import Spinner from '../../UI/Spinner/Spinner'

class QuizSection extends Component {

    state = {
        title : "",
        desc : "",
        loading : false
    }
    
    startQuizHandler = () => {
        axios.get('https://britannicaquiz-aman.firebaseio.com/questions.json')
            .then(res => {
                let fetchedQues = [];
                for(let key in res.data) {
                    fetchedQues.push({
                        ...res.data[key],
                        id: key
                    });
                }
 
                this.props.setQuestions(fetchedQues);   
            }).then(res => {
                this.props.history.push('/q1');
            })
            .catch(err => {
                console.log("Error Occured : " + err);    
            });  
    }

    componentDidMount () {
        this.setState({loading : true});
        axios.get('https://britannicaquiz-aman.firebaseio.com/Introduction.json')
            .then(res => {
                setTimeout(() => {
                    const title = res.data.title;
                    const desc = res.data.description;
                    this.setState({
                        title : title,
                        desc : desc,
                        loading : false
                    })
                },1200);
            })
            .catch(err => {
                console.log("Error Occured : " + err);    
            });
    }

    render () {
        let content = 
        <div>
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
        </div>
   

        if(this.state.loading) {
            content = <Spinner/>
        }
    
        return (
            <article className="quizsection">
                {content}
            </article>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setQuestions : (ques) => dispatch(actions.setQuestions(ques))
    }
}

export default connect(null,mapDispatchToProps)(QuizSection);