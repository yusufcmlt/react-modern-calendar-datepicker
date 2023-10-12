import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../../src/DatePicker.css';

import * as serviceWorker from './serviceWorker';
import { Calendar } from '../..';

const App = () => {
  // const [selectedDay, setValue] = useState(null);
  const calendarRightRef = useRef();
  const calendarLeftRef = useRef();

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Calendar ref={calendarLeftRef} customActiveDate={{ day: 1, month: 1, year: 2023 }} />
        <Calendar ref={calendarRightRef} customActiveDate={{ day: 1, month: 2, year: 2023 }} />
      </div>
      <button
        type="button"
        onClick={() => {
          if (
            calendarLeftRef &&
            calendarRightRef &&
            calendarRightRef.current &&
            calendarLeftRef.current
          ) {
            calendarLeftRef.current.handlePrevButtonClick();
            calendarRightRef.current.handlePrevButtonClick();
          }
        }}
      >
        Outer Prev
      </button>
      <button
        type="button"
        onClick={() => {
          if (
            calendarLeftRef &&
            calendarRightRef &&
            calendarRightRef.current &&
            calendarLeftRef.current
          ) {
            calendarLeftRef.current.handleNextButtonClick();
            calendarRightRef.current.handleNextButtonClick();
          }
        }}
      >
        Outer Next
      </button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
