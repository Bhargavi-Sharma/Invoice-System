import { AppBar, Toolbar } from '@mui/material';

const Header = () => {
    const logo = "https://drive.google.com/uc?export=view&id=1yX9Tc4ljme3K-LKXrNjQlkgboIQK1mTS";
    
    return (
        <AppBar position="static" style={{backgroundColor:"brown"}}>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 120 }} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;