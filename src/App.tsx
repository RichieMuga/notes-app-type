import "bootstrap/dist/css/bootstrap.css";
import { Routes,Route,Navigate } from "react-router-dom";
import NewNote from "./newNote";
import { Container } from "react-bootstrap";

function App() {
  return (
  <Container className="my-4">
    <Routes>
      <Route path="/" element={<h2>home</h2>} />
      <Route path='/:id'>
        <Route index element={<h1>show</h1>}></Route>
        <Route path="edit" element={<h1>edit</h1>}></Route>
      </Route>
      <Route path="/new" element={<NewNote />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Container>
  );
}

export default App;
