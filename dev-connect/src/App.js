import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SignUp from "./pages/Signup";
import redBorder from "./hocs/redBorder";
import RequireAuth from "./components/auth/RequireAuth";
import SecondPage from "./pages/SecondPage";
// import Home from './pages/Home'
const Login = React.lazy(() => import('./pages/Login'));
const Home = React.lazy(() => import('./pages/Home'));

const App = () => {
  const EnhancedComponent = redBorder(Home);
  const EnhancedComponent2 = redBorder(Login);
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Suspense fallback={<h1>loading...</h1>}>
          <EnhancedComponent2 naa={SignUp} />
          </Suspense>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/second" element={<SecondPage/>} />
        
        <Route element={<Layout />}>
          <Route path="/home" element={
            <RequireAuth>
              <EnhancedComponent naa={SignUp} />
            </RequireAuth>
            } />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
