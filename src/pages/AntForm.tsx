import Title from 'antd/es/typography/Title';
import AntDesignForm from '../components/AntDesignForm';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
const AntForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <Title level={4}>This is ant form</Title>
      <AntDesignForm />
      <Button onClick={() => navigate(-1)}>Go Back!</Button>
    </>
  );
};

export default AntForm;
