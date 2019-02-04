import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import seriesReducer from './SeriesReducer';

const middleware = [thunk];
const initialState = {
    loading: false,
    error: false,
    imageURL: '',
    seriesTitle: '',
    episodeList: null,
};

const store = createStore(
    seriesReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware),
    ),
);

export default store;
