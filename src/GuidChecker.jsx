import React, { useState } from 'react';
import { v4 as uuidv4, validate as uuidValidate } from 'uuid';
import githubLogo from './github-logo.png'; // Import your GitHub logo image
import './GuidChecker.css'; // Import your CSS file

const GuidChecker = () => {
  const [isUnique, setIsUnique] = useState(false);
  const [isValidGuid, setIsValidGuid] = useState(true);
  const [guidInput, setGuidInput] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State for spinner

  const checkGuidUniqueness = () => {
    setIsLoading(true); // Display spinner

    // Simulate a long-running operation using setTimeout
    setTimeout(() => {
      const isValid = uuidValidate(guidInput);

      setIsLoading(false); // Hide spinner

      if (isValid) {
        setIsValidGuid(true);
        setIsUnique(true);
      } else {
        setIsValidGuid(false);
        setIsUnique(false);
      }
    }, 3000); // Simulate 3 seconds delay
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkGuidUniqueness();
    }
  };

  return (
    <div className="guid-checker">
      <div className="github-banner">
        <a href="https://github.com/BalassaMarton/unique-guid-app" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub Logo" />
        </a>
      </div>
      <label>Is my GUID unique?</label>
      <input
        type="text"
        placeholder="Enter GUID here"
        value={guidInput}
        onChange={(e) => setGuidInput(e.target.value)}
        onKeyDown={handleKeyPress} // Listen for Enter key press
      />
      <button onClick={checkGuidUniqueness} disabled={isLoading}>
        Check
      </button>
      <div className="spinner-section">
        {isLoading && <div className="spinner"></div>}
      </div>
      {!isValidGuid && (
        <div className={`result ${isValidGuid ? '' : 'invalid'}`}>
          <span className="icon">{isValidGuid ? '✓' : '✕'}</span>
          <p>{isValidGuid ? 'Yes, your GUID is unique' : 'This is not a valid GUID'}</p>
        </div>
      )}
      {isUnique && isValidGuid && (
        <div className="result">
          <span className="icon">✓</span>
          <p>Yes, your GUID is unique</p>
        </div>
      )}
    </div>
  );
};

export default GuidChecker;
