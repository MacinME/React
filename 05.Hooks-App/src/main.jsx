import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import { HooksApp } from './HooksApp';
// import { CounterApp } from './CounterApp';
// import { CounterWithCustomHook } from './CounterWithCustomHook';
// import { SimpleForm } from './02.useEffect/SimpleForm';
// import { FormWithCustomHook } from './02.useEffect/FormWithCustomHook';
// import { MultipleCustomHook } from './03.Examples/MultipleCustomHook';
// import { FocusOnScreen } from './04.useRef/FocusOnScreen';
// import { Layout } from './05.useLayoutEffect/Layout';
// import { Memorize } from './06.memos/Memorize';
// import { MemoHook } from './06.memos/MemoHook';
// import { CallbackHook } from './06.memos/CallbackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-usereducer'
import { TasksReducer } from './08-useReducer/tasksReducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TasksReducer />
  </React.StrictMode>
)
