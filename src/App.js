import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Pages/Home/Home'
import Rent from './components/Pages/Rent'
import BuySell from './components/Pages/BuySell'
import Architecture from './components/Pages/Architecture'
import NotFound from './components/Pages/NotFound/NotFound';
import MainLayout from './layouts/MainLayout'
import FullPost from './components/FullPost/FullPost'



function App() {
  return <BrowserRouter>
  <div className="App">
   
    <Routes>
    
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="rent" element={<Rent />} />
        <Route path="buysell" element={<BuySell />} />
        <Route path="architecture" element={<Architecture />} />
        <Route path="/posts/:postId" element={<FullPost />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
   
  </div>
</BrowserRouter>
}

export default App
