import React, { FC } from 'react';
import classNames from 'classnames';

interface Props {
  text: string;
  icon: string;
  activated: boolean;
  onTabChange: () => void;
}

const NavBarTab: FC<Props> = ({ text, icon, activated, onTabChange }) => (
  <div
    className={classNames({
      NavBar__tab: true,
      'NavBar__tab--actived': activated
    })}
    onClick={onTabChange}
  >
    <img className="NavBar__tab--image" src={icon} alt="icon" />
    <div className="NavBar__tab--text-container">
      <span>COMPRAR</span>
      <span
        className={classNames({
          'NavBar__tab--text': true,
          'NavBar__tab--text-actived': activated
        })}
      >
        {text.toUpperCase()}
      </span>
    </div>
  </div>
);

export default NavBarTab;
