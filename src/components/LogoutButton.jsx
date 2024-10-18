import { Button } from 'react-bootstrap';
export default function LogoutButton({onLogout}) 
{
    return (
        <Button variant="danger" onClick={()=>{ onLogout() }}>Logout</Button>
    );
}