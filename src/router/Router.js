import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFoundPage";
import TopPage from "../pages/TopPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
