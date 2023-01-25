import React, { useState } from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import { Checkbox } from './Checkbox';

import { Heading } from '../Typography/Typography';
import { LabelSomething } from '../LabelSomething/LabelSomething';

export const CheckboxGroupAndLabelSomethingExample = () => {
  const [savedData, updateSavedData] = useState([false, false, false]);

  const options = [
    { label: 'a', value: 'A' },
    { label: 'b', value: 'B' },
    { label: 'c', value: 'C' },
  ];

  const onChange = (index, newValue) => {
    const newValues = [...savedData];
    newValues[index] = newValue;
    updateSavedData(newValues);
  };

  return (
    <div className='flex flex-col mb-10'>
      <Heading variation='h6'>Checkbox Group + LabelSomething</Heading>

      <LabelSomething
        label='label'
        labelPosition='top'
        gap='2'
        align='start'
        something={
          <CheckboxGroup
            configure={{
              direction: 'row',
              spacing: '15px',
            }}
          >
            {options.map((each, index) => {
              return (
                <LabelSomething
                  key={'CheckboxGroup_Checkbox_ABC' + index}
                  label={each.label}
                  labelPosition='bottom'
                  gap='2'
                  align='center'
                  something={
                    <Checkbox
                      savedData={savedData[index]}
                      configure={{
                        name: 'Checkbox_ABC',
                        iconSize: '30px',
                        color: 'darkgrey',
                        onChange: () => onChange(index, !savedData[index]),
                      }}
                    />
                  }
                />
              );
            })}
          </CheckboxGroup>
        }
      />
    </div>
  );
};
