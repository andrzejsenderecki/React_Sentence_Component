import React from 'react';
import './Sentence.css';
import PropTypes from 'prop-types';
import Button from './Button/Button.js';
import Paragraph from './Paragraph/Paragraph.js';

class Sentence extends React.Component {
    state = {
        sentences: this.props.sentences,
        sentenceA: [],
        sentenceB: [],
        option: 1
    }
    
    componentDidMount() {
        this.startInterval();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }    

    startInterval = () => {
        let sentence = 0;
        let letter = 0;

        this.interval = setInterval(() => {
            if(letter === 0) {
                this.setState({
                    sentenceB: []
                })
            }

            if(sentence === 0) {
                if(this.state.sentenceA === []) {
                    this.setState({
                        sentenceA: this.state.sentences[sentence][letter]
                    });
                } else {
                    this.setState(prevState => ({
                        sentenceA: [...prevState.sentenceA, this.state.sentences[sentence][letter]]
                    }));
                }
            } else {
                if(this.state.sentenceB === []) {
                    this.setState({
                        sentenceB: this.state.sentences[sentence][letter]
                    });
                } else {
                    this.setState(prevState => ({
                        sentenceB: [...prevState.sentenceB, this.state.sentences[sentence][letter]]
                    }));
                }
            }

            letter += 1;
            
            if(letter === this.state.sentences[sentence].length) {
                sentence += 1;
                letter = 0;
            }

            if(sentence === this.state.sentences.length) {
                if(this.state.option === 1) {
                    clearInterval(this.interval);
                } else {
                    sentence = 1;
                }
            }
        }, this.props.time);
    }

    changeOption = (option) => {
        clearInterval(this.interval);
        this.setState({
            sentenceA: [],
            sentenceB: [],
            option: option
        }, this.startInterval());
    };

    render() {
        return(
            <div className='wrapper'>
                <Paragraph text={this.state.sentenceA} />
                <Paragraph text={this.state.sentenceB} />
                <Paragraph variant={`Aktualny wariant: ${this.state.option}`} />
                <div className='btn_wrapper'>
                    <Button changeOption={() => this.changeOption(1)} text='Wariant 1' />
                    <Button changeOption={() => this.changeOption(2)} text='Wariant 2' />
                </div>
            </div>
        )
    }
}

Sentence.propTypes = {
    sentences: PropTypes.arrayOf(PropTypes.string).isRequired,
    time: PropTypes.number
}

export default Sentence;