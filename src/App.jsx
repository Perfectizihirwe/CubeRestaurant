import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage, Menu, Cart } from './pages'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/checkout/:itemId" element={<h1>Checkout</h1>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact-us" element={<h1>Contact</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
