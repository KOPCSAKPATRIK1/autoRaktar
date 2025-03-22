import Router, { Route } from "preact-router";
import Cars from "./pages/Cars";
import CarDetail from "./components/CarDetail";

export function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Cars} url="/cars" />
        <Route path="/cars" component={Cars} />
        <Route path="/cars/:id" component={CarDetail} />
      </Router>
    </div>
  );
}
