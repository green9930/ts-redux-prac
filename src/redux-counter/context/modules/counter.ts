/* ACTION TYPES ------------------------------------------------------------- */
/**
 * as const : 나중에 액션 객체를 만들게 action.type의 값을 추론하는 과정에서
 * action.type이 string으로 추론되지 않고 'counter/INCREASE'와 같이 실제 문자열 값으로 추론되도록 함
 */
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

/* ACTION CREATORS ---------------------------------------------------------- */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

/* ACTION DISPATCHER TYPE --------------------------------------------------- */
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

/* INITIAL STATE TYPE ------------------------------------------------------- */
type CounterState = {
  count: number;
};

/* INITIAL STATE ------------------------------------------------------------ */
const initialState: CounterState = {
  count: 0,
};

/* REDUCER ------------------------------------------------------------------ */
/* 리듀서는 state와 함수의 return값이 일치하도록 작성 ---------------------------------------- */
/* 액션은 CounterAction을 타입으로 설정 ----------------------------------------------- */
const counter = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

export default counter;
