import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello World</h1>
    </ThemeProvider>
  )
}
