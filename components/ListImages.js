import Link from 'next/link';
import { React, Fragment, useEffect, useState } from 'react';
const ListImages = (props) => {
  const [expand, setExpand] = useState(false);
  let { image, desc } = props;

  return (
    <div className="contImage">
      <div className="photoBox">
        <img alt={image.alt} src={image.src} />
        <p className="photoDesc"> {desc}</p>
      </div>
    </div>
  );
};

export default ListImages;
