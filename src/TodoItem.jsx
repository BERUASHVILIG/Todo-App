// import React from "react";

// const TodoItem = ({ completed, id, title, deleteTodo, toggleTodo }) => {
//   return (
//     <li key={id}>
//       <label>
//         <input
//           type="checkbox"
//           checked={completed}
//           onChange={(event) => toggleTodo(id, event.target.checked)}
//         />
//         {title}
//       </label>
//       <button onClick={() => deleteTodo(id)} className="btn btn-danger">
//         Delete
//       </button>
//     </li>
//   );
// };

// export default TodoItem;

import React from "react";

const TodoItem = ({ completed, id, title, deleteTodo, toggleTodo }) => {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(event) => toggleTodo(id, event.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
