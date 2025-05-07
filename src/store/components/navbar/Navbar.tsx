import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGE_MAIN_ROUTE, } from '../../routes/routes';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import {Menu as MenuIcon, CloseRounded} from '@mui/icons-material';


const Navbar = () => {
  const navigate = useNavigate();

  const StyledToolbar = styled(Box)(() => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexShrink: 0,
      borderRadius: `8px`,
      backdropFilter: 'blur(24px)',
      border: '1px solid #d5d5d5',
      backgroundColor: '#ffdcc2',
      boxShadow: '0 0 5px #d5d5d5;',
      padding: '10px 10px',
      margin: '5px 5px',
  }));

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {setOpen(newOpen);};

  return (
      <StyledToolbar>
        <Box sx={{flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Button sx={{m:'0 5px'}} variant="outlined" color="info" size="small" onClick={() => navigate(`${PAGE_MAIN_ROUTE}`)}>
              Main
            </Button>
            <Button sx={{m:'0 5px'}} variant="outlined" color="info" size="small" onClick={() => navigate(`${PAGE_MAIN_ROUTE}`)}>
              Tests
            </Button>
          </Box>
        </Box>

        <Box sx={{display: { xs: 'flex', sm: 'none' }, width:'100%', justifyContent:'space-between', gap: 1 }}>
          <IconButton aria-label="Menu button" onClick={toggleDrawer(true)} sx={{padding:'5px'}}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
            <Box sx={{p:2,backgroundColor:'background.default'}}>
              <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                <IconButton onClick={toggleDrawer(false)}>
                  <CloseRounded />
                </IconButton>
              </Box>
              <MenuItem onClick={() => {navigate(`${PAGE_MAIN_ROUTE}`);setOpen(false)}}>Main</MenuItem>
              <MenuItem onClick={() => {navigate(`${PAGE_MAIN_ROUTE}`);setOpen(false)}}>Tests</MenuItem>
            </Box>
          </Drawer>
        </Box>
      </StyledToolbar>
  )
}

export default Navbar;