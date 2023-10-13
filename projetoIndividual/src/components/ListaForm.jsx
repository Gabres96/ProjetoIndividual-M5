import {useState} from "react";

const ListaForm = () => {
    const[value, setValue]= useState("");
    const [category, setCategory] = useState("");

    const acaoEnviar = (e) => {
      e.preventDefault();
      console.log("Enviou Formulario");
    }

  return (
    <div className="form">
      <h2>Nova Tarefa</h2>
      <form onSubmit={acaoEnviar}>
        <input type="text" placeholder="Nome da Tarefa" />
        <select>
          <option value="Categoria">Tipo de Tarefa</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudo">Estudo</option>
        </select>
        <button type="submit">Nova Tarefa</button>
      </form>
    </div>
  );
};

export default ListaForm;
