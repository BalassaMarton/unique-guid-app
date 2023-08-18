import React, { useState } from 'react';
import { v4 as uuidv4, validate as uuidValidate } from 'uuid';

const GuidChecker = () => {
  const [isUnique, setIsUnique] = useState(false);
  const [isValidGuid, setIsValidGuid] = useState(true);
  const [guidInput, setGuidInput] = useState('');

  const checkGuidUniqueness = () => {
    const isValid = uuidValidate(guidInput);
    
    if (isValid) {
      setIsValidGuid(true);
      setIsUnique(true);
    } else {
      setIsValidGuid(false);
      setIsUnique(false);
    }
  };

  return (
    <div className="guid-checker">
      <label>Is my GUID unique?</label>
      <input
        type="text"
        placeholder="Enter GUID here"
        value={guidInput}
        onChange={(e) => setGuidInput(e.target.value)}
      />
      <button onClick={checkGuidUniqueness}>Check</button>
      {!isValidGuid && (
        <div className="result invalid">
          <span className="cross-mark">✕</span>
          <p>This is not a valid GUID</p>
        </div>
      )}
      {isUnique && isValidGuid && (
        <div className="result">
          <span className="check-mark">✓</span>
          <p>Yes, your GUID is unique</p>
        </div>
      )}
    </div>
  );
};

export default GuidChecker;
