import { Link } from "react-router-dom";
export default function Erro() {
    return (
      <div>
        <h1>Hum, parece que esta pagina não existe!</h1>  

        <span>Voçê pode estar procurando:</span><br/>
        <Link to="/">Home</Link> <br/>
        <Link to="/contato">Contato</Link> <br/>
        <Link to="/sobre">Sobre</Link> <br/>
      </div>
    );
  }
  
  