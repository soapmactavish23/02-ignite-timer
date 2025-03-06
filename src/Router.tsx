import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/pomodoro-timer" element={<DefaultLayout />}>
        <Route path="/pomodoro-timer" element={<Home />} />
        <Route path="/pomodoro-timer/history" element={<History />} />
      </Route>
    </Routes>
  );
}
