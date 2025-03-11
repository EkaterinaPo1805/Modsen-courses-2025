import React from 'react';
import ReactDOM from 'react-dom/client';
import CalculatorPage from './pages/CalculatorPage';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
    <CalculatorPage />
    </Provider>
);

