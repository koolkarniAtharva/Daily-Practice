import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PostContext from './Context/PostContext.jsx'

createRoot(document.getElementById('root')).render(
  <PostContext>
    <App />
  </PostContext>


)
