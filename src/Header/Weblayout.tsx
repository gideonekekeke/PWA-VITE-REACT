
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Weblayout = () => {
  return (
    <div>
        <Header  />
        <Outlet  />
    </div>
  )
}

export default Weblayout