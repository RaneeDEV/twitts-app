import "./App.css";
import PostsList from "./components/PostsList/PostsList"
import PostPage from "./components/PostPage/PostPage"
import UserPage from "./components/UserPage/UserPage"
import ErrorPage from "./components/ErrorPage/ErrorPage"
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
                <Link to="/post/2">Post</Link>
              </li>
              <li>
                <Link to="/user/5">User</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <PostsList/>
            </Route>
            <Route exact path="/post/:postId">
              <PostPage />
            </Route>
            <Route exact path="/user/:userId">
              <UserPage />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </div>
    </>
  );
}

export default App;
