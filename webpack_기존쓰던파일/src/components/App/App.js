import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
import based from './css/base.scss';
import pagepiling from './css/jquery.pagepiling.min.scss'
import styles from './css/App.scss';
import {createStore} from 'redux';
import reducer from '../reducer';
import TodoApp from '../TodoApp';
import {Provider} from 'react-redux';

let storeTodo = createStore(reducer);

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
                    <div>
                       <Provider store={storeTodo}>
                            <TodoApp />
                        </Provider>   
                        


                    </div>
        );
    }
}



export default App;
