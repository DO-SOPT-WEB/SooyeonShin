import GlobalStyle from "./styles/GlobalStyle"
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Router from "./components/Router";


function App() {


  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle/>
        <Router/>
      </BrowserRouter>
    </ThemeProvider>
    </div>
  )
}

export default App
