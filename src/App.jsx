import { Outlet } from 'react-router-dom'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import HeaderInfoComponent from './components/HeaderInfoComponent'
import HeaderNavbarMenu from './components/HeaderNavbarMenu'

function App() {


  return (
    <>
      <div>
        <HeaderInfoComponent />
        <HeaderComponent />
        <HeaderNavbarMenu />
        <Outlet />
      </div>
    </>
  )
}

export default App