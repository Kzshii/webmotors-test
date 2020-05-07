import React, { FC, CSSProperties } from 'react';
import Select from 'react-select';
import classNames from 'classnames';

interface Props {
  options: any[];
  value: any;
  onChange: (op: any) => void;
  selectClass?: string;
  placeholder: string;
}

const colourStyles = () => ({
  control: (styles: CSSProperties) => ({
    ...styles,
    boxShadow: 'unset',
    backgroundColor: '#ffffff',
    borderWidth: '1px',
    width: '100%',
    fontSize: '14px'
  }),
  placeholder: (styles: CSSProperties) => ({
    ...styles,
    color: '#808080'
  })
});

const DropdownSelector: FC<Props> = ({
  options,
  onChange,
  value,
  selectClass,
  placeholder
}) => (
  <div
    className={classNames({
      Select: true,
      [`Select__${selectClass}`]: !!selectClass && true
    })}
  >
    <Select
      components={{
        IndicatorSeparator: null
      }}
      options={options}
      value={value}
      isDisabled={options.length > 0 ? false : true}
      getOptionValue={(option: any) => option}
      styles={colourStyles()}
      placeholder={placeholder}
      getOptionLabel={(option: any) => option['Name'] || option['Version']}
      onChange={(value) => onChange(value)}
    />
  </div>
);

export default DropdownSelector;
