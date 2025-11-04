import { capitalizeFirstLetter } from '../helpers/helper';

export default function InputLabel(props) {
  return (
    <>
      <label htmlFor={props.name}>{props.name} : </label>
      <input
        id={props.name}
        value={props.value}
        onChange={(event) => props.onChangeInput(event.target.value)}
      />
    </>
  );
}
