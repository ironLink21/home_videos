

import React, {Component}               from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider }                     from 'react-redux';
import thunk                            from 'redux-thunk';
import * as reducers                    from './js/reducers';
import HomeVideo                        from './js/components/home_video';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeVideo />
      </Provider>
      
    );
  }
}