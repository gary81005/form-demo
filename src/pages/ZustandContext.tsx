import { Button } from 'antd';
import Title from 'antd/es/typography/Title';
import { BearState } from '../types/Bear';
import { useBear } from '../hooks';
import { useBearContext } from '../context/test';

const ZustandContext = () => {
  // useContext
  const { bears, increase, reset } = useBearContext();

  //get everythings
  // const state = useStore();
  //getBears
  const bearsCounts = useBear((state: BearState) => state.bears);
  //get increase function
  const increaseBears = useBear((state: BearState) => state.increase);
  const resetBears = useBear((state) => state.reset);

  if (!increaseBears || !resetBears || !increase || !reset) {
    return null;
  }
  return (
    <>
      <Title>Zustand</Title>
      <Title>{bearsCounts}</Title>
      <Button onClick={() => increaseBears(1)}>Add Bear</Button>
      <Button onClick={() => resetBears()}>Reset Bear</Button>
      <br />
      <br />
      <Title>Context</Title>
      <Title>{bears}</Title>
      <Button onClick={() => increase(1)}>Add Bear</Button>
      <Button onClick={() => reset()}>Reset Bear</Button>
    </>
  );
};

export default ZustandContext;
