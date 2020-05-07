import React, { FC, useState } from "react";
import CheckBox from "../Checkbox";
import Footer from "./Footer";
import DropdownSelector from "../DropdownSelector";
import { useVehicles } from "../../hooks/useVehicles";
import { Version, Model, Make } from "../../types";
import { states, raio } from "../../constants";

const Box: FC = () => {
  const [range, setRange] = useState<{ value: number, Name: string }>();
  const [state, setState] = useState<{ value: string, Name: string }>();
  const [makeSelected, setMakeSelected] = useState<Make>();
  const [modelSelected, setModelSelected] = useState<Model>();
  const [versionSelected, setVersionSelected] = useState<Version>();
  const [models, setModels] = useState<Model[]>([]);
  const [versions, setVersions] = useState<Version[]>([]);
  
  const { makes, getVehiclesModel, getVehiclesVersion } = useVehicles();

  const onHandleModel = async (make: Make) => {
    const models = await getVehiclesModel(make.ID);
    setMakeSelected(make);
    setModels(models);
  }

  const onHandleVersion = async (model: Model) => {
    const versions = await getVehiclesVersion(model.MakeID);
    setModelSelected(model);
    setVersions(versions);
  }

  const onChangeRange = (range: { value: number, Name: string }) => {
    setRange(range);
  }

  const onChangeState = (area: { value: string, Name: string }) => {
    setState(area);
  }

  const onReset = () => {
    setMakeSelected(undefined);
    setModelSelected(undefined);
    setVersionSelected(undefined);
    setModels([]);
    setVersions([]);
    setRange(undefined);
    setState(undefined);
  }

  const onFinish = () => {
    console.log('Range', range);
    console.log('State', state);
    console.log('makeSelected', makeSelected);
    console.log('modelSelected', modelSelected);
    console.log('versionSelected', versionSelected);
  }

  return (
  <div className='Box__content'>
    <div className='Box__Checkbox'>
      <CheckBox text='Novos' />
      <CheckBox text='Usados' />
    </div>
    
    <div className='Dropdown__content'>
      <div className='Dropdown__content--state'>
        <DropdownSelector
          placeholder='Onde:'
          value={state}
          onChange={onChangeState}
          options={states}
        />
        <DropdownSelector
          selectClass='mini'
          placeholder='Raio:'
          value={range}
          onChange={onChangeRange}
          options={raio}
        />
      </div>
      <DropdownSelector
        selectClass='normal'
        placeholder='Marca: Todas'
        value={makeSelected}
        onChange={onHandleModel}
        options={makes}
      />
      <DropdownSelector
        selectClass='normal'
        placeholder='Modelo: Todos'
        value={modelSelected}
        onChange={onHandleVersion}
        options={models}
      />
    </div>
    <div className='Dropdown__content'>
      <DropdownSelector
        selectClass='normal'
        placeholder='Ano Desejado'
        value={modelSelected}
        onChange={onHandleModel}
        options={[]}
      />
      <DropdownSelector
        selectClass='normal'
        placeholder='Faixa de preço'
        value={modelSelected}
        onChange={onHandleModel}
        options={[]}
      />
      <DropdownSelector
        selectClass='large'
        placeholder='Versão: Todas'
        value={versionSelected}
        onChange={onHandleVersion}
        options={versions}
      />
    </div>
    
    <Footer onFinish={onFinish} onReset={onReset} />
  </div>
)};

export default Box;
