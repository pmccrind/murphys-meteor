import React from 'react';
import { Menu, Container, Dropdown, Image, Icon } from 'semantic-ui-react';

export default class Top extends React.Component {
  render() {
    const top = {
      boxShadow: 'none',
      border: 'none',

    };
    return (
        <Menu style={top} borderless className='topmenu'>
          <Container>
            <Menu.Item> <Image src='http://murphyshawaii.com/media/2014/04/murphyshawaii.png'/> </Menu.Item>
            <Menu.Item position={'right'}> <a>Home</a></Menu.Item>
            <Dropdown item text="About Us">
              <Dropdown.Menu>
                <Dropdown.Item>New</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item> <a>Saint Patricks Day</a></Menu.Item>
            <Dropdown item text="Menus">
              <Dropdown.Menu>
                <Dropdown.Item>New</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item> <a>Bar</a></Menu.Item>
            <Menu.Item> <Icon name='search'/> </Menu.Item>
          </Container>
        </Menu>
    );
  }
}
