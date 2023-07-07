import { Button, Typography } from '@mui/material';
import ReactHookForm from '../components/ReactHookForm';
import { useNavigate } from 'react-router-dom';
const ReactForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <Typography variant="h4">This is react hook form</Typography>
      <ReactHookForm />
      <Button onClick={() => navigate(-1)}>Go Back!</Button>
    </>
  );
};

export default ReactForm;
