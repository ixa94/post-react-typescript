import React from 'react';
import PostList from './components/PostList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostCard from './components/PostCard';
import Nav from './components/Nav';
import CreatePost from './components/CreatePost';
function App() {
  return (
    <Router>
    <Nav/>
        <Switch>
          <Route exact path='/'>            
            <PostList />
          </Route>
          <Route path='/posts/new'>            
            <CreatePost />             
          </Route>
          <Route exact path='/posts/:id'>
            <PostCard/>
          </Route>
        </Switch>     
  </Router>
  );
}

export default App;
