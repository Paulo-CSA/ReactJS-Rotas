import { Link } from "react-router-dom";
export default function Sobre() {
    return (
      <div>
        <h1>Sobre o curso!</h1>  
        <Link to="/">Home</Link> <br/>
        <Link to="/contato">Contato</Link> <br/>
      </div>
    );
  }
  
  