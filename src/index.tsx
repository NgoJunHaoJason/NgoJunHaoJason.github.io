import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import Resume from 'Resume';
import LoadingScreen from 'utils/LoadingScreen';

import 'config/i18n';
import 'fomantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <Resume />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
