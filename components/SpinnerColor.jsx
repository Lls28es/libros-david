import { Loading } from '@nextui-org/react';

function SpinnerColor(props) {
  return (
    <div
      className={`row align-items-center justify-content-center nextui-spinnerOverflow ${
        props.padding ? props.padding : 'py-5'
      }`}
    >
      <Loading type="spinner" color="success" size="xl" />
    </div>
  );
}

export default SpinnerColor;
