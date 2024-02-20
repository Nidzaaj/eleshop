import { Outlet } from 'react-router-dom'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import HeaderInfoComponent from './components/HeaderInfoComponent'
import HeaderNavbarMenu from './components/HeaderNavbarMenu'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductService from './services/productService'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/productsSlice'



axios.defaults.baseURL = 'https://dummyjson.com';





function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()


  useEffect(() => {
    ProductService.getAllProducts()
      .then((res) => {
        setData(res.data.products)
        setLoading(true)
      })
      .catch((err) => toast.error('nisu stigli podaci'))
  }, [])

  useEffect(() => {
    dispatch(getAllProducts(data))
  }, [data])


  return (

    <>
      {loading ? (<div>
        <HeaderInfoComponent />
        <HeaderComponent />
        <HeaderNavbarMenu />
        <Outlet />
      </div>) :
        (<h1>Loading...</h1>)}

    </>
  )
}

export default App