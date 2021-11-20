import React, { useState, useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

import icon from '../images/cryptoview-logo.png'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  const [screenSize, setScreenSize] = useState(undefined)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo"><Link to="/">Crypto View</Link></Typography.Title>
        <Button className="menu-control-container" style={{ "paddingTop": '6px' }} onClick={() => setActiveMenu(!activeMenu)} >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />} onClick={() => screenSize <= 800 && setActiveMenu(!activeMenu)} >
            <Link to="/" >Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />} onClick={() => screenSize <= 800 && setActiveMenu(!activeMenu)} >
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />} onClick={() => screenSize <= 800 && setActiveMenu(!activeMenu)} >
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />} onClick={() => screenSize <= 800 && setActiveMenu(!activeMenu)} >
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  )
}

export default Navbar