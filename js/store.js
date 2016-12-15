import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers/index';

export default createStore(reducers.repositoryReducer, applyMiddleware(thunk));

// export default createStore(reducers.repositoryReducer, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


