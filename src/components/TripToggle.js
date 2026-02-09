import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './TripToggle.css';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('Round-Trip');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton className="custom-toggle" value="One-Way">One Way</ToggleButton>
      <ToggleButton className="custom-toggle" value="Round-Trip">Round Trip</ToggleButton>
    </ToggleButtonGroup>
  );
}