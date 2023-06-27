import React from "react";
import './app.scss';
import {Provider} from 'react-redux'
import store from "../utils/store";
import Page from "../comps/page/page";
import {BrowserRouter} from "react-router-dom";

const App: React.FC<any> = () => {
    return <React.StrictMode>
        {/*<ErrorBoundary>*/}
            <Provider store={store}>
                <BrowserRouter>
                    <Page/>
                </BrowserRouter>
            </Provider>
        {/*</ErrorBoundary>*/}
    </React.StrictMode>
};

export default App;