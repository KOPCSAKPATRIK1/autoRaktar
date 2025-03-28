import Router, { Route } from "preact-router";
import Cars from "./pages/Cars";
import CarDetail from "./pages/CarDetail";
import New from "./pages/New";

export function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Cars} url="/cars" />
        <Route path="/cars" component={Cars} />
        <Route path="/cars/:id" component={CarDetail} />
        <Route path="/cars/new" component={New}/>
      </Router>
    </div>
  );
}
