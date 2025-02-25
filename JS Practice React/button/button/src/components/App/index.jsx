import { useState } from 'react';
import { Button, Page } from './styled.js';

const App = () => {
  const [count, setCount] = useState(0);
  const isColorChange = count > 10;

  const addCount = () => {
    setCount(prevCount => prevCount+1);
  }

  return (
    <Page>
      <Button onClick={addCount} $isColorChange={isColorChange} >{count}</Button>
    </Page>
  )
}

export default App;
