import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SignUp from "./pages/Signup";
import redBorder from "./hocs/redBorder";
import RequireAuth from "./components/auth/RequireAuth";
import SecondPage from "./pages/SecondPage";
import Upload from "./pages/Upload";
import Message from "./pages/Message";
import Settings from "./pages/Settings";
// import Home from './pages/Home'
const Login = React.lazy(() => import('./pages/Login'));
const Home = React.lazy(() => import('./pages/Home'));

const App = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Suspense fallback={<h1>loading...</h1>}>
          <Login/>
          </Suspense>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/second" element={<SecondPage/>} />
        
        <Route element={<Layout />}>
          <Route path="/home" element={
            <RequireAuth>
              <Home/>
            </RequireAuth>
            } />
        </Route>
        <Route element={<Layout />}>
          <Route path="/upload" element={
            <RequireAuth>
              <Upload/>
            </RequireAuth>
            } />
        </Route>
        <Route element={<Layout />}>
          <Route path="/message" element={
            <RequireAuth>
              <Message/>
            </RequireAuth>
            } />
        </Route>
        <Route element={<Layout />}>
          <Route path="/settings" element={
            <RequireAuth>
              <Settings/>
            </RequireAuth>
            } />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
