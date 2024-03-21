
import './App.css'
import CityList from './Components/CityList'
import Content from './Components/Content'
import Counter from './Components/Counter'
import Footer from './Components/Footer'
import Header from './Components/Header'
import PasswordStrengthChecker from './Components/PasswordStrengthChecker'
import Product from './Components/Product'
import ProductList from './Components/ProductList'
import RandomQuote from './Components/RandomQuote'

export default function App() {

  return (
    <>
    <Header/>
    <RandomQuote/>
    <Content/>
    <PasswordStrengthChecker/>
    <Counter/>
    <ProductList/>
    <CityList/>
    <Footer/>
   
    </>
  )
}

