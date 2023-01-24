import { FC, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { InfoPage } from "./pages/infoPage/InfoPage";
import { fetchArticles } from "./redux/operations"; 
import { useAppDispatch } from "./redux/store";



const App:FC = () => {
  const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
              path="article/:articleId/"
              element={<InfoPage />}
          />
      </Routes>
    </Suspense>
  );
}

export default App;
