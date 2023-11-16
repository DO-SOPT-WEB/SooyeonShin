import GlobalStyle from "./styles/GlobalStyle"
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import {Login,Mypage,Signup} from "./pages";


function App() {


  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/Mypage" element={<Mypage/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </div>
  )
}

export default App
