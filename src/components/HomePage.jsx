import React, { useState } from 'react';
import { navigate } from '@reach/router';

export default function HomePage() {
  const [fileName, setFileName] = useState('');
  const [fileType, setFileType] = useState('');

  const handleFileChange = ({ target: { value } }) => {
    setFileName(value);
  };
  const handleTypeChange = ({ target: { value } }) => {
    setFileType(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/c-ar-d-viewer/${fileName}/${fileType}`);
  };
  return (
    <section>
      <h1>c-AR-d</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="fileName"
          value={fileName}
          placeholder="filename"
          onChange={handleFileChange}
        />
        <input
          id="fileType"
          value={fileType}
          placeholder="file type (mp4, mov etc)"
          onChange={handleTypeChange}
        />
        <button>Submit</button>
      </form>
    </section>
  );
}
