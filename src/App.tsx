import { TestComp } from './components/testComp/TestComp'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <TestComp />
        </Route>
      </Switch>
    </Router>
  )
}

export default App