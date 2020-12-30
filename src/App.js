import { Route, Switch } from 'react-router-dom';
import Navigation from './component/Navigation';
import Home from './views/Home';
import Movies from './views/Movies';
import MovieDetail from './views/MovieDetail';

import NotFound from './views/NotFound';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies/:movieId" component={MovieDetail} />
        <Route path="/movies" component={Movies} />

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
