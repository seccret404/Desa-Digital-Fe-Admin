import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface Option {
  title: string;
  year: number;
}

interface ComboBoxProps {
  options: Option[];
  label: string;
}

const ComboBox: React.FC<ComboBoxProps> = ({ options, label }) => {
  return (
    <Autocomplete
      disablePortal
      options={options}
      getOptionLabel={(option: Option) => option.title}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label}/>}
    />
  );
}

export default ComboBox;
