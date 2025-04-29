import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SignUp from "./pages/Signup";
import redBorder from "./hocs/redBorder";
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
          <EnhancedComponent2 naa='dada' />
          </Suspense>} />
        <Route path="/signup" element={<SignUp />} />
        
        <Route element={<Layout />}>
          <Route path="/home" element={<EnhancedComponent naa="sese" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
