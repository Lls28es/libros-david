import React, { useState } from 'react';

const Detail = ({ description }) => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => setExpand((prev) => !prev);

  return (
    <div className="p-0 px-1 mb-2">
      <div className={`contentDescription ${expand ? 'expanded' : ''}`}>
        {description.map((paragraph, index) => (
          <p key={index} className="detNormBook fs-18  descriptionExpand">
            {paragraph}
          </p>
        ))}
      </div>
      {description.join(' ').length > 950 && (
        <p className="togglerDescription fs-18 fw-600" onClick={toggleExpand}>
          {expand ? 'Leer menos...' : 'Leer más...'}
        </p>
      )}
    </div>
  );
};

export default Detail;
