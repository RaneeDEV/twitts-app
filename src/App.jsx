import "./App.css";
import PostsList from "./components/PostsList/PostsList"
import Post from "./components/Post/Post"
import UserPage from "./components/UserPage/UserPage"
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to="/">PostList</Link>
              </li>
              <li>
                <Link to="/post">Post</Link>
              </li>
              <li>
                <Link to="/user">User</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/post">
              <Post />
            </Route>
            <Route path="/user">
              <UserPage />
            </Route>
            <Route path="/">
              <PostsList/>
            </Route>
          </Switch>
        </div>
    </>
  );
}

export default App;
