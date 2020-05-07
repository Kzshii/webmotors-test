import React, { FC } from 'react';
import classNames from 'classnames';

interface Props {
  text: string;
  btnClass: string;
  onClick: () => void;
}

const Button: FC<Props> = ({ text, btnClass, onClick }) => (
  <button
    onClick={onClick}
    className={classNames({ [`Button__${btnClass}`]: true })}
  >
    {text}
  </button>
);

export default Button;
