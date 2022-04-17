import { Route } from 'react-router-dom';
import './App.css';
import { routes } from './routes';

function App() {
  return (
    <div>
        {routes.map(route => (
          <Route key={route.path} exact path={route.path} component={route.component} />
        ))}
    </div>
  );
}

export default App;
