import { ReactNode, createContext, useContext, useState } from 'react';
import { BearState } from '../types/Bear';

const TestContext = createContext<BearState>({
  bears: 0,
});
const useBearContext = () => useContext(TestContext);
const { Provider } = TestContext;

function TestProvider({ children }: { children: ReactNode }) {
  const [bears, setbears] = useState(0);
  const increase = () => {
    setbears(bears + 1);
  };
  const reset = () => {
    setbears(0);
  };

  return (
    <Provider
      value={{
        bears,
        increase,
        reset,
      }}
    >
      {children}
    </Provider>
  );
}

// function TestProvider({
//   isLoading,
//   updateIsLoading,
//   children,
// }: {
//   isLoading: boolean;
//   updateIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
//   children: ReactNode;
// }) {
//   return <Provider value={{ isLoading, updateIsLoading }}>{children}</Provider>;
// }

export { TestProvider, useBearContext };
