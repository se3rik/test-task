import { Routes, Route, Navigate } from "react-router-dom";

import SignInPage from "./pages/SignInPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" replace />} />
      <Route path="/auth" element={<SignInPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default App;
