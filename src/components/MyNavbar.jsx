import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AntdAuthModal from './antd/AntdAuthModal';
import { Button } from 'antd';
import SwitchTheme from './antd/SwitchTheme';

const MyNavbar = ({onLogin, onLogout, isAuth, onChangeTheme}) => 
{
    return (
        <Navbar>
            <Container>
            <Navbar.Brand href="/">MyNavbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/features">Features</Nav.Link>
                <Nav.Link href="/pricing">Pricing</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
            <Nav>
                <SwitchTheme onChangeTheme={onChangeTheme}/>
                {isAuth ? (
                    // Кнопка antd
                    <Button type="primary" danger onClick={onLogout} size="large">Logout</Button>
                ) : (
                    <AntdAuthModal onLogin={onLogin} />
                )}
            </Nav>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;