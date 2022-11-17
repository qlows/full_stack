import './App.css';
import PersonList from './PersonList';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <div class="p-3 mb-2 bg-dark text-white">
          <h1>Week-11 Axios REST API Client</h1>
          <h2>User List</h2>
          <br />
          <PersonList />
        </div>
      </Container>
    </>
  );
}

export default App;
