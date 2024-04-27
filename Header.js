import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useNavigate , NavLink } from "react-router-dom"
const Header = () => {
  const [value, setValue] = useState();
  const history = useNavigate(); // Initialize useHistory hook

  // Function to handle sign-in button click
  const handleSignIn = () => {
    // Here you can add any authentication logic if needed
    // Redirect to the Counsellor page
    history.push('/Counsellor');
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: '#1976D2' }} position='sticky'>
        <Toolbar>
          <AccountBalanceIcon />
          <Typography>Online time table Management System</Typography>
          <Tabs textColor='inherit' indicatorColor='primary' sx={{ ml: 'auto' }} value={value} onChange={(e, val) => setValue(val)}>
          <Tab LinkComponent={NavLink} to='/SignIn' label='SignIn' onClick={handleSignIn} />
            <Tab LinkComponent={NavLink} to='/SignUp' label='SignUp' />
            <Tab LinkComponent={NavLink} to='/Counsellor' label='Counsellor' />
            <Tab LinkComponent={NavLink} to='/Student' label='Student' />
            <Tab LinkComponent={NavLink} to='/Courses' label='Courses' />
            <Tab LinkComponent={NavLink} to='/Fetchregistrations' label='Fetchregistrations' />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
