import "./style.scss"
import AppRoutes from "./AppRoutes"
import { AuthProvider } from "./features/post/Auth.Context"
function App() {

  return (
   <>
   <AuthProvider>
    <AppRoutes/>
   </AuthProvider>
   </>
  )
}

export default App
