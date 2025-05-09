import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/Home"
import Product from "./pages/Product"
import Pos from "./pages/Pos"


export default function App(){
  return(
    <Router>
      <Layout>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/" element={<Product />} />
          <Route path="/d" element={<Pos />} />
        </Routes>
      </Layout>
    </Router>
  )
}