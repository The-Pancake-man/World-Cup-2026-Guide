import AppRouter from "./router/AppRouter"
import { FavoritesProvider } from "./context/FavoritesContext"
import { ThemeProvider } from "./context/ThemeContext"
import { LanguageProvider } from "./context/LanguageContext"

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <FavoritesProvider>
          <AppRouter />
        </FavoritesProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App