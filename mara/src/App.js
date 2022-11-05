import './App.css'
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import SignUp from "./commons/components/sign_up/sign_up"
import Menu from "./commons/components/menu"
import Main from "./commons/components/main"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">main</Link>
        <Link to="/sign_up">회원가입</Link>
        <Link to="/login">로그인</Link>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/sign_up" element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
