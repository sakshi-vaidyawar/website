import React from 'react';
import { Image } from 'react-bootstrap';
 import { BiSearch} from "react-icons/bi"
 import {BsFacebook} from 'react-icons/bs'
 import {AiOutlineInstagram} from 'react-icons/ai'
import header from './header.css'
import {FaTencentWeibo} from 'react-icons/fa'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
  return (
    <div className='header'>
      <div className='upheader'>
        <h3 className='heading'><span style={{
            color:"white",fontSize:"22px"
        }}>Envanto</span><span style={{color:'green',fontSize:'22px'}}>Market</span></h3>
        <button className='button' >Buy now</button>
        <hr></hr>
      </div>
      <div style={{backgroundColor:'#263a4f', color:"white",padding:'10px', border:"none" }}>
      <Nav justify variant="tabs" >
      <Nav.Item>
        <Nav href="/home" style={{}}>Call us Today :123456789</Nav>
      </Nav.Item>
      <Nav.Item>
        <Nav >Email:Email@Example.com</Nav>
      </Nav.Item>
      <Nav.Item>
        <Nav ></Nav>
      </Nav.Item>
      <Nav.Item style={{padding:"5px", fontSize:"18px", margin:'5px'}}>
        <Nav>
        <BsFacebook style={{margin:"5px", fontSize:"18px"}}/>
        <AiOutlineInstagram style={{margin:"5px", fontSize:"18px"}}/>
        <FaTencentWeibo style={{margin:"5px", fontSize:"18px"}}/>
        </Nav>
      </Nav.Item>
    </Nav>

      </div>
      <div className='navbar2'>
      <Nav justify variant="tabs"  className='navbar3' style={{padding:"15px" , fontSize:"20px"}}>
      <Nav.Item>
        <Nav>
            <img src='https://themes.dynamiclayers.net/arkid/wp-content/themes/arkid/assets/img/logo-dark.png' alt='' style={{width:'80px' ,height:'70', marginLeft:'140px', alignItems:'center', textAlign:'center'}}/>
        </Nav>
      </Nav.Item>
      <Nav.Item>
        <Nav href="/home">Home</Nav>
      </Nav.Item>
      <Nav.Item>
        <Nav>About</Nav>
      </Nav.Item>
      <Nav.Item>
        <Nav>Project</Nav>
      </Nav.Item>
      <Nav.Item>
        <Nav>
       Pages
        </Nav>
      </Nav.Item>
      <Nav.Item>
        <Nav>
       Blog
        </Nav>
      </Nav.Item>
      <Nav.Item>
        <Nav>
       Contact
        </Nav>
      </Nav.Item>
      <Nav.Item>
        <Nav>
       <BiSearch/>
        </Nav>
      </Nav.Item>
      <Nav.Item>
        <Nav>
       <button style={{color:'white',backgroundColor:"greenyellow",border:"none"}}>Make payment</button>
        </Nav>
      </Nav.Item>
    </Nav>
      </div>
    </div>
  );
}

export default Header;
