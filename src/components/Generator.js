import React, { Component } from 'react';
import Paragraph from './Paragraph';
// import dictionary from '../data/words';
import dictionary from '../data/words';

class Generator extends Component {
  state = {
    dictionary: [],
    numParagraphs: null,
    paragraphs: []
  }

  /**
   * Get a random number between min and max
   * Used to get random sentence length and random number of
   * sentences within a paragraph
   */
  getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  /**
   * Creates text.
   * This will get a random number of words for a random number
   * of sentences that will make up a paragraph.
   * This will be repeated for each paragraph that the user requests.
   * E.G. if the user selects 3 paragraphs then it will be repeted 3 times
   */
  createText = () => {
    // Clear existing paragraphs
    this.resetParagraphs();

    // Get dictionary & user selected number of paragraphs from state
    const { numParagraphs } = this.state;

    //
    for (let paraNum = 1; paraNum <= numParagraphs; paraNum++) {
      const sentences = this.createSentences();

      this.setState(prevState => {
        paragraphs: prevState.paragraphs.push(sentences)
      });
    }
  }

  createSentences = () => {
    // Grab the dictionary
    const { dictionary } = this.state;

    // Get the length of the dictionary to find out
    // how many words we're got to play with
    const length = dictionary.length;

    // Get a random number for the sentence length.
    // For this app, we define a paragraph as being between
    // 4 and 7 sentences
    const numSentences = this.getRandomNumber(4, 7);

    // Set empty array for us to put our sentences in
    // Each array will be its own array of words
    const sentences = [];

    for (let sentenceCounter = 1; sentenceCounter <= numSentences; sentenceCounter++) {
      const sentence = [];

      // Get a random number that defines the number of words per sentence
      // For this app we define a sentence as being between 8 and 15 words.
      const numWords = this.getRandomNumber(8, 15);


      for (let i = 1; i <= numWords; i++) {
        let rand = this.getRandomNumber(0, length + 1);
        sentence.push(dictionary[this.getRandomNumber(0, rand)]);
      }

      // Push sentence into sentences array
      sentences.push(sentence);
    }

    return sentences;
  }

  /**
   * Resets the paragraph arrays on change
   * This ensures that when going from a higher to a
   * lower number of paragraphs the redundant arrays
   * are emptied
   */
  resetParagraphs = () => {
    this.setState({
      paragraphs: []
    });
  }

  /**
   * Gets the selected number of paragraphs from the front end
   * and saves that value into state.
   */
  setNumberOfParagraphs = (event) => {
    // Convert selected value into a num
    const numParas = parseInt(event.target.value, 10);

    // Set the value into state and then trigger the createText()
    // function as a callback
    this.setState({
      numParagraphs: numParas
    }, this.createText);
  }

  /**
   * Loads the dictionary from imported data
   * on component mount
   */
  componentDidMount() {
    this.setState({
      dictionary
    });
  }

  render() {
    return (
      <div style={{ width: '600px'}}>
        <form action="">
          <select onChange={this.setNumberOfParagraphs} name="paragraphs">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </form>
        { this.state.paragraphs.map((item, index) =>
          <Paragraph
            key={`paragraph-${index}`}
            paragraph={index}
            words={item} />) }
      </div>
    );
  }
}

export default Generator;
