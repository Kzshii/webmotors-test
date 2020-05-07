import React, { FC } from "react";
import Button from "../Button";

interface Props {
  onReset: () => void;
  onFinish: () => void;
}

const Footer: FC<Props> = ({ onReset, onFinish }) => (
  <div className='Box Footer__content'>
    <Button onClick={() => {}} btnClass='advanced' text='> Busca avançada' />
    <div>
      <Button onClick={onReset} btnClass='transparent' text='Limpar filtros'/>
      <Button onClick={onFinish} btnClass='primary' text='VER OFERTAS'/>
    </div>
  </div>
);

export default Footer;