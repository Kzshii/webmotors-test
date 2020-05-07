import React, { FC } from 'react';

interface Props {
  text: string;
}

const CheckBox: FC<Props> = ({ text }) => (
  <label className="Checkbox__container">
    <input className="Checkbox__input" type="checkbox" />
    {text}
    <span className="Checkbox__checkmark" />
  </label>
);

export default CheckBox;
