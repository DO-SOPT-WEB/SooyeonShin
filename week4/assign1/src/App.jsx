import GlobalStyle from "./styles/GlobalStyle"
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import {Login,Signup} from "./pages";


function App() {


  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App
