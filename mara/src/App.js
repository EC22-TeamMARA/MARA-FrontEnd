import './App.css'
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import SignUp from "./commons/components/sign_up/sign_up"
import Menu from "./commons/components/menu"
import Main from "./commons/components/main"
import Start from "./commons/components/start"
import SelectMe from "./commons/components/sign_up/select_me"
import SelectTag from "./commons/components/sign_up/select_tag"
import Result from "./commons/components/sign_up/result"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/main">main</Link>
        <Link to="/sign_up">회원가입</Link>
        <Link to="/login">로그인</Link>
        <Routes>
          <Route path="/" element={<Start/>}></Route>
          <Route path="/main" element={<Main/>}></Route>
          <Route path="/sign_up" element={<SignUp/>}></Route>
          <Route path="/sign_up/page2" element={<SelectMe/>}></Route>
          <Route path="/sign_up/page3" element={<SelectTag/>}></Route>
          <Route path="/sign_up/page4" element={<Result/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
