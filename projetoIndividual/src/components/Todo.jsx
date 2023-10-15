import React from "react";

const Todo = ({ todo, removerLista, completarLista }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="finalizar" onClick={() => completarLista(todo.id)}>
          Finalizar
        </button>
        <button className="remover" onClick={() => removerLista(todo.id)}>
          Remover
        </button>
      </div>
    </div>
  );
};

export default Todo;
