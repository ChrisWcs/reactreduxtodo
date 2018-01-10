import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../reducers/reducer';

import ConInput from '../containers/ConInput';
import ConTodos from '../containers/ConTodos';

const App = () => (
    <Provider store={createStore(reducer)}>
        <div>
            <ConInput />
            <ConTodos />
        </div>
    </Provider>
);

export default App;