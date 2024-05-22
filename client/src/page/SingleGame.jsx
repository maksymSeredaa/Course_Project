import React, { useState, useEffect } from 'react';
import Keyboard from '../components/Keyboard/Keyboard';
import InputText from '../components/InputText/InputText';
import text from '../data/data.json';
import FieldName from '../components/FieldName/FieldName';
import Timer from '../components/Timer/Timer';
import Name from '../components/Name/Name';
import Alert from '../components/Alert/Alert';
import BackButton from '../components/BackButon/BackButton';


function SingleGame({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState('');
  const [activeKey, setActiveKey] = useState('');
  const [participantName, setParticipantName] = useState('');
  const [nextChar, setNextChar] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [score, setScore] = useState(0);

  const handleSetName = (name) => {
    setParticipantName(name);
  };

  const handleTimeEnd = () => {
    setShowAlert(true); // Show the alert when time ends
  };

  const handleCharacterTyped = (character) => {
    console.log('Typed character:', character);
    setNextChar(character);
  };

  const countError = (data) => {
    setScore(data);
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setInput('');
    setActiveKey('');
    setNextChar('');
    setShowAlert(false);
    setScore(0);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      const correct = text.text1[currentIndex].toLowerCase() === key;
      if (correct) {
        setInput((prev) => prev + key);
        setCurrentIndex((prev) => prev + 1);
      }
      setActiveKey(key);
    };

    const handleKeyUp = () => setActiveKey('');

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [currentIndex, input]);

  useEffect(() => {
    console.log('Updated score:', score);
  }, [score]);

  return (
    <div>
      {showAlert && <Alert onRetry={handleRetry} />}
      {!showAlert && (
        <>
        <BackButton />
          <Timer onTimeEnd={handleTimeEnd} score={score} id={data.user_id} />
         
          <InputText onCharacterTyped={handleCharacterTyped} countError={countError} />
          <Keyboard activeKey={activeKey} nextChar={nextChar} />
        </>
      )}
    </div>
  );
}

export default SingleGame;
