import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import CurriculumVitae from "components/CurriculumVitae";
import LoadingScreen from "components/LoadingScreen";

import "config/i18n";
import "fomantic-ui-css/semantic.min.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <CurriculumVitae />
    </Suspense>
  </React.StrictMode>
);
