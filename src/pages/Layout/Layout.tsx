import { Outlet } from 'react-router-dom' // Used to render child components/pages
import { NavigationBar } from '../../components/NavigationBar'

export const Layout = () => {
  return (
    <div>
      <NavigationBar />
      <main>
        <Outlet /> {/* This renders the content of the active route */}
      </main>
    </div>
  )
}
