import { Route,Routes } from 'react-router-dom'
import Pregnancy from './components/pages/Pregnancy/Pregnancy';
import Main from './components/pages/gynea/Main';
import IndexPage from './components/pages/IndexPage'
import Layout from './Layout'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from "./components/pages/RegisterPage"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/pregnancy' element={<Pregnancy />} />
        <Route path='/gyneacologist' element={<Main />} />
      </Route>
    </Routes>
   
  )

}

export default App

