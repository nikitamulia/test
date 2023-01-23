import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { InfoPage } from "./pages/infoPage/InfoPage";
// import { getLastArticles } from "../redux/articlesOperations";
// import { useAppDispatch } from "./redux/store";



const App:FC = () => {
  // const dispatch = useAppDispatch();
  //   useEffect(() => {
  //       dispatch(getLastArticles());
  //   }, [dispatch]);
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
