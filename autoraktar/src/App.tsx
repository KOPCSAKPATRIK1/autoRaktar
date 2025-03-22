import Router, { Route } from 'preact-router';
import Cars from './pages/Cars';

export function App() {
  return (
    <div>
      <Router>
        {/* Alapértelmezett redirect a cars oldalra */}
        <Route path="/" component={Cars} url="/cars" />
        <Route path="/cars" component={Cars} />
      </Router>
    </div>
  );
}