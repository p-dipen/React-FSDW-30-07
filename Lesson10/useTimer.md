How to build a custom timer hook in React.js? | useTimer | JavaScript Interview Question

Create a custom hook called useTimer that provides the following API

const TOTAL_TIME = 5;
const { isRunning, start, stop, seconds } = useTimer(TOTAL_TIME);
Show two buttons ...


```javascript
import {useState, useRef} from 'react';

const TOTAL_TIME = 5;

export const useTimer = (totalTime  = TOTAL_TIME) => {
  const [seconds, setSeconds] = useState(totalTime)
  const [isRunning, setIsRunning] = useState(false);
  const ref = useRef(null);
  
  
  const start = () => {
    setIsRunning(true);
    ref.current = setInterval(() => {
      setSeconds(prev => {
        if(prev ===1){
          // reset timer
          setIsRunning(false);
          return totalTime
        }
        return prev-1;
      })
    },1000)
  }
  
  const stop = () => {
    if(!isRunning){
      return;
    }
    clearInterval(ref.current);
    setIsRunning(false);
    setSeconds(totalTime)
  }
  
  return {
    seconds,
    isRunning,
    start,
    stop
  }
};
```