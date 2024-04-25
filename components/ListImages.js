import Link from 'next/link';

const ListImages = (props) => {
  let { image, index } = props;
  console.log(props);
  return (
    <div className="contImage col">
      <img
        alt={image.alt}
        className={`${
          index === 0 ||index === 1 ? 'imgEstilo2' :  index === 2 ||index === 3 ? 'imgEstilo3' : 'imgEstilo1'
        }`}
        src={image.src}
      />
    </div>
  );
};

export default ListImages;
