import Link from 'next/link';
import React from 'react';
const ListImages = ({ image }) => {
  // const [expand, setExpand] = useState(false);

  return (
    <div className="contImage">
      <div className="photoBox">
        <div className="pictureFrame">
          <img alt={image.alt} src={image.src} />
        </div>
        <p className="photoDesc fs-12"> {image.description}</p>
      </div>
    </div>
  );
};

export default ListImages;
