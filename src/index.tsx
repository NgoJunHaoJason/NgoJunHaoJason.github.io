import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import Resume from 'Resume';
import LoadingScreen from 'utils/LoadingScreen';

import 'config/i18n';
import 'fomantic-ui-css/semantic.min.css'

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <Resume />
    </Suspense>
  </React.StrictMode>
);
