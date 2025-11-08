import type { ReactNode } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "./components/nav/MainNav"

function App({ children }: { children?: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainNav />
      {children}
    </ThemeProvider>
  )
}

export default App