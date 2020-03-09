import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('GET_GENRES', getGenres);
    //     yield takeEvery('UPDATE_MOVIE', updateMovie); 

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to get the movies from the database
function* getMovies() {
    const movieResponse = yield axios.get('/movies')
    console.log('in the GET getMovies', movieResponse)
    yield put({
        type: 'SET_MOVIES',
        payload: movieResponse.data
    })
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const useId = (state = 0, action) => {
    if (action.type === 'USE_ID') {
        return action.payload;
    }
    return state;
}

// Used to get the genres from the database

function* getGenres(action) {
    try{
        const genreResponse = yield axios.get(`/genres/${action.payload}`)
        console.log('in the GET getGenres', genreResponse)
        yield put({
            type: 'SET_GENRES',
            payload: genreResponse.data
        })
    } catch(error) {
        console.log('error in getting genres', error);
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        useId
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
