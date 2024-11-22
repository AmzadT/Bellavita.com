import './App.css'
import Navbar from './Components/Navbar'
import NavSlider from './Components/NavSlider'
import { Routes, Route } from 'react-router-dom'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Footer from './Components/Footer'
import { Box } from '@chakra-ui/react'
import MovingBox from './Components/MovingBox'
import ShowImages from './Components/ShowImages'
import Customers from './Components/Customers'
import WhatsAppIcon from './Components/WhatsAppIcon'
import Offers from './Components/Offers'
import Info from './Components/Info'
import ShopByNotes from './Components/ShopByNotes'
import CrazyDeals from './Components/CrazyDeals'
import Categories from './Components/Categories'
import Products from './Components/Products'
import TitleImage from './Components/TitleImage'

function App() {

  return (
    <Box width='100%'>
    <TitleImage/>
      <NavSlider />
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Products />
      <Categories />
      <CrazyDeals />
      <ShopByNotes />
      <Info />
      <Offers />
      <Customers />
      <ShowImages />
      <MovingBox />
      <Footer />
      <WhatsAppIcon />
    </Box>
  )
}

export default App
