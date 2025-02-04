
const Filter = ({ setFilter }) => {
  return (
    <div className="flex gap-2 my-4">
      <button onClick={() => setFilter("all")} className="px-3 py-1 bg-gray-200 rounded">
        All
      </button>
      <button onClick={() => setFilter("completed")} className="px-3 py-1 bg-green-300 rounded">
        Completed
      </button>
      <button onClick={() => setFilter("pending")} className="px-3 py-1 bg-yellow-300 rounded">
        Pending
      </button>
    </div>
  );
};

export default Filter;
