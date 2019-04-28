import React,{PureComponent} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Common from './common/header';
import DrawerDemo from './common/drawer';
import Home from './pages/home';
import Detail from './pages/detail';
import Toast from './pages/toast';


class App extends PureComponent{
    render(){
      return (
        <Provider store={store}>
            <BrowserRouter>
              <Common />
              <DrawerDemo />
              <Route path='/Detail' exact component={Detail}></Route>
              <Route path='/' exact  component={Home}></Route>
              <Toast />
            </BrowserRouter>
        </Provider>
      );
    }
  
}


export default App;
