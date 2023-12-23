import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import App from './App';

function Order(){
    
    return(
    <Provider store={store}>
        <App/>
    </Provider>

    );
}

export default Order;