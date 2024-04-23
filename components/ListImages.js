import Link from 'next/link';

const ListImages = ({ image }) => (
  <div className="contImage col">
    <img alt={image.alt} className="" src={image.src} />
  </div>
);

export default ListImages;
