import React from 'react';
import ReactDOM from 'react-dom/client';
import CalculatorPage from './pages/CounterPage';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CalculatorPage />
      </PersistGate>
    </Provider>
);

