import React, { useContext, useState } from 'react';
import { Container, Button } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    const [routes, setRoutes] = useState([
        {
            title: "Home",
            path: '/Home',
            active: true
        },
    ]);

    const changeTab = (path: any) => {
        setRoutes(prevRoutes => {
            return prevRoutes.map(route => {
                if (route.title === path) {
                    return { ...route, active: !route.active };
                }
                return { ...route, active: false };
            });
        });
    };

    return (
        <Container>
            <div>
                {routes.map((item) => (
                    <Button active={item.active} onClick={() => changeTab(item.title)}>
                        {item.title}
                    </Button>
                ))}
            </div>

            <Switch
                onChange={() => { toggleTheme() }}
                checked={title === "dark"}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secondary}
            />
        </Container>
    )
}

export default Header;