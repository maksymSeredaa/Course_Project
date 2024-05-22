import React, { useState, useEffect } from 'react';
import data from '../../data/data.json';
import css from './InputText.module.css';

function InputText({ onCharacterTyped, countError }) {
  const [input, setInput] = useState('');
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [segments, setSegments] = useState([]);
  const [currentSegment, setCurrentSegment] = useState('');
  const [errors, setErrors] = useState(0); // State to track the number of errors

  useEffect(() => {
    const words = data.text1.split(' ');
    const tempSegments = [];
    for (let i = 0; i < words.length; i += 7) {
      tempSegments.push(words.slice(i, i + 7).join(' '));
    }
    setSegments(tempSegments);
    setCurrentSegment(tempSegments[0] || ''); // Set the first segment initially
  }, []);

  useEffect(() => {
    setCurrentSegment(segments[currentSegmentIndex] || ''); // Update current segment when index or segments change
  }, [currentSegmentIndex, segments]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInput(value);

    if (currentSegment.length > 0 && value[value.length - 1] !== currentSegment[value.length - 1]) {
      setErrors((prevErrors) => {
        const newErrors = prevErrors + 1;
        countError(newErrors); // Call countError with the updated error count
        return newErrors;
      });
    }

    if (value === currentSegment) {
      setCurrentSegmentIndex((prevIndex) => prevIndex + 1); // Move to the next segment
      setInput(''); // Clear input for new segment
    }
  };

  const getColorizedText = () => {
    return currentSegment.split('').map((char, index) => {
      let style = {};
      if (index < input.length) {
        style = input[index] === char ? { className: css.correct } : { className: css.incorrect };
      } else if (index === input.length) {
        style = { className: css.nextCharacter };
        onCharacterTyped(char); // Send char to App.jsx
      }
      return <span key={index} {...style}>{char}</span>;
    });
  };

  return (
    <div>
      <div className={css.display}>
        {getColorizedText()}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className={css.inputField}
        placeholder="Type here..."
        autoFocus
      />
    </div>
  );
}

export default InputText;
