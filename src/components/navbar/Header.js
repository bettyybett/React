import React, {useState} from 'react';
import { Menu } from 'antd';
import { 
    HomeOutlined , 
    UserOutlined,
    UserAddOutlined, 
    SettingOutlined ,
    SkinOutlined 
} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const { SubMenu, Item } = Menu;


const Header = () => {
    const [current,setCurrent] = useState("home");
    const handleClick = (e) => {
        setCurrent(e.key);
    };
    return(
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" >
        <Item key="home" icon={<HomeOutlined />} className = "">
          <Link to = "/">Acasa</Link>
        </Item>
        <Item key="antrenori" icon={<SkinOutlined /> } className = "">
        <Link to = "/antrenori">Antrenori</Link>
        </Item>
        <Item key="register" icon={<UserAddOutlined />} className = "float-right ">
        <Link to = "/register">Inregistrare</Link>
        </Item>

        <Item key="login" icon={<UserOutlined />} className = "float-right ">
        <Link to = "/login">Login</Link>
        </Item>        
        
    
      </Menu>
    )
}
export default Header
