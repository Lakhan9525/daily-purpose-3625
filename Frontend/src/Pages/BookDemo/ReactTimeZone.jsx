import React from 'react';
import TimezonePicker from 'react-timezone';

const ReactTimeZone = () => {
    return (
    <TimezonePicker
    value="Asia/Yerevan"
    onChange={timezone => console.log('New Timezone Selected:', timezone)}
    inputProps={{
      placeholder: 'Select Timezone...',
      name: 'timezone',
    }}
  />
    )
}

export default ReactTimeZone;