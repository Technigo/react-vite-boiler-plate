import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import technigo from "../assets/technigo-logo.svg";
export const Logos = () => {
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={technigo} className="logo react" alt="Technigo logo" />
      </a>
    </div>
  );
};
