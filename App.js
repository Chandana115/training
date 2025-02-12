import React , {useState} from 'react';
import ChildA from './components/ChildA';
import ChildB from './components/ChildB';
const Parent = ()=>{
  const [count, setCount] = useState(0);
  const increment = ()=>{
    setCount(c=>c+1);
  };
  return(
    <div class="b">
      <ChildA/>
      <ChildB count={count} increment={increment}/>
    </div>
  )
}
export default Parent;