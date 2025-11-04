import React, { useState } from 'react';
import InputLabel from './components/InputLabel';

function FormComponent() {
  const [name, setName] = useState(window.localStorage.getItem('name') || '');
  const [age, setAge] = useState(window.localStorage.getItem('age') || '');

  //   window.localStorage.setItem('name', name);
  //   window.localStorage.setItem('age', age);
  console.log(
    'THis get triggered when you are re-rendering due to state change',
  );
  const onChangeInput = (val) => setName(val);
  const onChangeInputAge = (val) => setAge(val);
  return (
    <div>
      <form>
        <InputLabel name={'name'} value={name} onChangeInput={onChangeInput} />
        <br />
        <InputLabel name={'age'} value={age} onChangeInput={onChangeInputAge} />
      </form>
      {name ? `hello ${name}` : 'Please type your name'}
    </div>
  );
}

export default FormComponent;
