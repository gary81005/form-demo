import {
  TextField,
  Button,
  FormControlLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from '@mui/material';
import { Checkbox, Form, Input } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

type Inputs = {
  username: string;
  password: string;
  remember: boolean;
};

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(true);
  const handleMouseDownPassword = () => setShowPassword(false);
  return (
    <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Username"
        variant="outlined"
        size="small"
        margin="dense"
        {...register('username')}
      />
      <OutlinedInput
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Username"
        size="small"
        margin="dense"
        {...register('password')}
      />
      <Controller
        name="remember"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e: CheckboxChangeEvent) => onChange(e.target.checked)}
                checked={value}
              />
            }
            label="Remember Me"
            labelPlacement="top"
          />
        )}
      />

      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ReactHookForm;
