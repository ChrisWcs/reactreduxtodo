import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../reducers/reducer';

const App = () => (
    <Provider store={createStore(reducer)}>
        <div>
            test
        </div>
    </Provider>
);

export default App;