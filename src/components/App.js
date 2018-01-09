import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../reducers/reducer';

import ConInput from '../containers/ConInput';

const App = () => (
    <Provider store={createStore(reducer)}>
        <div>
            <ConInput />
        </div>
    </Provider>
);

export default App;