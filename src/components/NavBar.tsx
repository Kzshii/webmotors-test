import React, { FC } from 'react';
import car from '../assets/images/car.png';
import motocycle from '../assets/images/motorcycle.png';
import NavBarTab from './NavBarTab';
import Button from './Button';
import { Tabs } from '../types/Tabs';

interface Props {
  tab: Tabs;
  onTabChange: (tab: Tabs) => void;
}

const NavTabs = [Tabs.car, Tabs.motocycle];

const Tab = ({
  type,
  activated,
  onTabChange
}: {
  type: Tabs;
  activated: boolean;
  onTabChange: () => void;
}) => {
  switch (type) {
    case Tabs.car:
      return (
        <NavBarTab
          onTabChange={onTabChange}
          activated={activated}
          text="CARROS"
          icon={car}
        />
      );
    case Tabs.motocycle:
      return (
        <NavBarTab
          onTabChange={onTabChange}
          activated={activated}
          text="MOTOS"
          icon={motocycle}
        />
      );
  }
};

const NavBar: FC<Props> = ({ tab, onTabChange }) => (
  <div className="NavBar__container">
    <div className="NavBar__content">
      {NavTabs.map((n: Tabs, idx) => (
        <Tab
          key={idx}
          onTabChange={() => onTabChange(n)}
          type={n}
          activated={tab === n}
        />
      ))}
    </div>
    <Button
      onClick={() => console.log('test')}
      text="Vender meu carro"
      btnClass="tertiary"
    />
  </div>
);

export default NavBar;
