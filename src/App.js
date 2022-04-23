import React, {useState} from "react";

function App() {
  const [contador, setContador] = useState(6);
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
      <div className="card-body">
      <h1>Aplicacion Contador</h1>
      <div className="my-5">
        <h2 className="my-5">{contador}</h2>
        <button className="btn btn-success mx-3" onClick={() => setContador(contador + 1)}>Aumentar</button>
        <button className="btn btn-secondary mx-3" onClick={() => setContador(0)}>Reiniciar</button>
        <button className="btn btn-danger mx-3" onClick={() => setContador(contador - 1)}>Disminuir</button>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
