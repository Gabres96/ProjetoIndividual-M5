
const EditTodo = ({ todo, onSaveEdit }) => {
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    onSaveEdit(todo.id, editedText);
  };

  return (
    <div className="edit-todo">
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <button onClick={handleEdit}>Salvar</button>
    </div>
  );
};

export default EditTodo;