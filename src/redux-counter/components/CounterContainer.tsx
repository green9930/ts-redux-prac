import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, increaseBy } from "../context/modules/counter";
import { RootState } from "../context/redux";
import Counter from "./Counter";

const CounterContainer = () => {
  const count = useSelector((state: RootState) => state.counter.count); // 상태 조회 : 상태 조회 시 state 타입은 RootState로 지정해야 함
  const dispatch = useDispatch(); // 디스패치 함수

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onIncreaseBy = (diff: number) => dispatch(increaseBy(diff));

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
};

export default CounterContainer;
