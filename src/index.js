import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import Resume from './resume/Resume';
import LoadingScreen from './LoadingScreen';

import './i18n';

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<LoadingScreen />}>
            <Resume />
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);