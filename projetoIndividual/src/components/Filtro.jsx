const Filtro = ({ filter, setFilter, setsort }) => {
  return (
    <div className="filtrar">
      <h2>Filtrar</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incompleta">Incompleta</option>
          </select>
        </div>
        <div>
          <p>Ordem Altabética:</p>
          <button onClick={() => setsort("Asc")}>Asc</button>
          <button onClick={()=>setsort("Desc") }>Desc</button>
        </div>
      </div>
    </div>
  );
};

export default Filtro;
