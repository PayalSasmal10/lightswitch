import logo from "./logo.svg";
import "./App.css";
import { DarkProvider } from "./ThemeContextAPI";
import { ChangeButton } from "./ChangeButton";

function App() {
  
  return (
    <div className="App">
      <DarkProvider>
        <ChangeButton/>
      </DarkProvider>
    </div>
  );
}

export default App;
