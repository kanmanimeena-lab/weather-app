import './App.css';
import Header from "./component/header"
import Student from "./component/studentlist"
import Favourite from "./page/favourite"
import List from "./page/list"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import StudentData from "./component/studentcontext";


function App() {


return (

<div>

<StudentData>
<BrowserRouter>

<Header />

<Routes>

  

<Route path = "/" element = {<Student />} />

{/*----------*/} ========second page

<Route path = "/favourite" element = {<Favourite />} />
<Route path = "/list" element = {<List />} />
</Routes>
</BrowserRouter>
</StudentData>
</div>
  );
}

export default App;

