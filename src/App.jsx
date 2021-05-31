import "./App.css";
import PostsList from "./components/PostsList/PostsList";
import PostPage from "./components/PostPage/PostPage";
import UserPage from "./components/UserPage/UserPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import { PageHeader, Button } from "antd";

function App() {
  return (
    <>
      <div className="container">
        <div className="site-page-header-ghost-wrapper">
          <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title="Title"
            extra={[
              <Button key="1" type="primary">
                <Link to="/">Post List</Link>
              </Button>,
              ,
            ]}
          ></PageHeader>
        </div>
        <Switch>
          <Route exact path="/">
            <PostsList />
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
