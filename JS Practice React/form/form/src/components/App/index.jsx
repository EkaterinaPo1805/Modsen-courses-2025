import { useState } from 'react';
import { Button, Form, Input, Page } from './styled.js';

const App = () => {
  const [value, setValue] = useState('');

  const handleClick = () => {
    console.log(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const updateValue = (event) => {
    setValue(event.target.value)
  }

  return (
    <Page>
      <Form onSubmit={handleSubmit}>
        <Input type='text' placeholder='Enter something' onChange={updateValue} value={value} />
        <Button onClick={handleClick} >Output</Button>
      </Form>
    </Page>
  )
}

export default App;
