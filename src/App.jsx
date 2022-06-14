// import { Main } from "./pages/Main";
import React, { Suspense } from "react";
import { Preloader } from "./components/Preloader/Preloader";
const Main = React.lazy(() => import("./pages/Main")); // Ленивая загрузка
function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <Main />
    </Suspense>
  );
}

export default App;
