import React from "react";

const ListaForm = () => {
  return (
    <div className="form">
      <h2>Nova Tarefa</h2>
      <form>
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
