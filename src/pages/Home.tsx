import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

function Home() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <a href="/ant-form">Check To Ant Design Form!</a>
      <br />
      <a href="/react-form">Check To React Hook Form!</a>
      <br />
      <a href="/zustand">Check To Zustand test!</a>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default Home;
