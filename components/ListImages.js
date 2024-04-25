import Link from 'next/link';

const ListImages = (props) => {
  let { image, index } = props;
  console.log(props);
  return (
    <div className="contImage ">
      <img alt={image.alt} src={image.src} />
    </div>
  );
};

export default ListImages;
