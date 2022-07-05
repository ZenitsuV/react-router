import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  console.log(Route);
  return (
    <div className="App">
      <MainHeader></MainHeader>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />}></Route>
          <Route path="/welcome/*" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

/* 
 for react-router-dom v5 :

    We need to use <Switch></Switch> instead of <Routes>
    and we can use "exact" keyword for <Route> tag. So it will match the exact url and dont get confused with the same name url path like "/products/:porductId" 

   <Switch>
     <Route path="/welcome" element={<Welcome />} />
     <Route path="/products/:productId" element={<ProductDetail />} exact/>
     <Route path="/products" element={<Products />} />
   </Switch>
 
   if not multiple <Route> will render in same page


 We can use Redirect for redirection 
 <Route path='/' exact>
  <Redirect path='/welcome'>
 </Route>


*/
