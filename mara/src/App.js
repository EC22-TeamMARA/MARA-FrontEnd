import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dome";
import SignUp from "./commons/components/sign_up";
import Menu from "./commons/components/menu";
import Main from "./commons/components/main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu></Menu>
        <Routes>
          <Route path="/" exact element={<Main/>}></Route>
          <Route path="/sign_up" exact element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
