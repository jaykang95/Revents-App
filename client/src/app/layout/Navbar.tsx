import React from 'react'
import logo from '../../assets/images/logo.png'
import { Button, Container, Menu } from 'semantic-ui-react'

const Navbar = () => {
  return (
    <Menu inverted fixed='top'>
        <Container>
            <Menu.Item header>
                <img src={logo} alt='logo' style={{marginRight: '10px'}}/>
                Reactivities
            </Menu.Item>
            <Menu.Item name='Activities' />
            <Menu.Item>
                <Button positive content='Create Activity'/>
            </Menu.Item>
        </Container>
    </Menu>
  )
}

export default Navbar