import React, {Component} from 'react';
import NavigationRoute from './src/NavigationRoute';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/CreateStore';

class App extends Component {
  constructor() {
    super();

    this.state = {
      store: store,
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <PersistGate persistor={persistor}>
          <NavigationRoute />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
