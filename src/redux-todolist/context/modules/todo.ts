/* ACTION TYPES ------------------------------------------------------------- */
const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

let nextId = 1; // todo 추가 시 사용할 ID값

/* ACTION CREATORS ---------------------------------------------------------- */
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text,
  },
});
export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});
export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});

/* ACTION DISPATCHER TYPE --------------------------------------------------- */
type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

/* INITIAL STATE TYPE ------------------------------------------------------- */
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];

/* INITIAL STATE ------------------------------------------------------------ */
const initialState: TodosState = [];

/* REDUCER ------------------------------------------------------------------ */
const todos = (
  state: TodosState = initialState,
  action: TodosAction
): TodosState => {
  const { type } = action;
  switch (type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todos;
