import AppRoutes from './routes';
import {
    ThemeProvider
} from 'styled-components';
import light from './assets/themes/light';
import dark from './assets/themes/dark';

import Header from './components/Header';
import GlobalStyle from './assets/styles/global';
import usePersistentState from './hooks/userPersistState';
import { ContainerHeader } from './styles';

const App = () => {
    const [theme, setTheme] = usePersistentState('theme', light);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light)
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle></GlobalStyle>
            <ContainerHeader className='App'>
                <Header toggleTheme={toggleTheme} />
                <AppRoutes />
            </ContainerHeader>
        </ThemeProvider>
    )
}

export default App;
