const initialTodo = {
  list: [],
};

const todoReducer = (state = initialTodo, action) => {
  switch (action.type) {
    case "ADD":
      const { id, data, checked } = action.payload;
      state.list.push({ id, data, checked });
      return state;

    case "DELETE":
      const newList = state.list.filter((elem) => elem.id != action.payload);
      return {
        ...state,
        list: newList,
      };

    case "UPDATE":
      const li = state.list.map((elem) => {
        if (elem.id === action.payload.id) {
          return { ...elem, data: action.payload.text };
        } else return elem;
      });
      return { ...state, list: li };

    default:
      return state;
  }
};

export default todoReducer;
