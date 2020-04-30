import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from './components/Header/Header';
import LibraryList from './components/LibraryList/LibraryList';
import reducers from './reducers';

const store = createStore(reducers);

const App = () => {
    return (
        <>
            <StatusBar />
            <Provider store={store}>
                <SafeAreaView>
                    <Header headerTitle="Redux Starter" />
                    <LibraryList />
                </SafeAreaView>
            </Provider>
        </>
    );
}

export default App;