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
import { MemoHook } from './06.memos/MemoHook';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MemoHook />
  // {/* </React.StrictMode> */}
)
