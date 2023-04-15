import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/checkout/:itemId" element={<h1>Checkout</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/menu" element={<h1>Menu</h1>} />
        <Route path="/contact-us" element={<h1>Contact</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
