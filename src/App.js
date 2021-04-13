import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import domain from './Domain'

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <div className="content">
          <Switch>
            <Route exact path={domain+'/'}>
              <Home />
            </Route>
            <Route exact path={domain+'/create'}>
              <Create />
            </Route>
            <Route exact path={domain+'/blogs/:blogId'}>
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
