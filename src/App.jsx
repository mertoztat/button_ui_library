import "./App.css";
import Button from "./components/Button/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";

function App() {
  return (
    <div className="container">
      <Button variant="primary" size="sm">
        Primary
        <AiOutlinePlusCircle size={13} />
      </Button>
      <Button size="md" variant="secondary">
        Secondary
        <AiOutlinePlusCircle size={15} />
      </Button>
      <Button size="lg" variant="warning">
        Warning
        <AiOutlinePlusCircle size={18} />
      </Button>
      <Button size="sm" variant="danger">
        danger <AiOutlinePlusCircle size={13} />
      </Button>
      <Button size="sm" variant="success" outline>
        success
        <AiOutlinePlusCircle size={13} />
      </Button>
      <Button size="sm" variant="info">
        Info <AiOutlinePlusCircle size={13} />
      </Button>
      <Button size="sm" disabled>
        disabled
      </Button>
    </div>
  );
}
export default App;
