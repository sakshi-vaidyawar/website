import React from 'react';

import{BsFacebook} from 'react-icons/bs'
import{BsInstagram,BsFillSendExclamationFill} from 'react-icons/bs'
import{BiSolidLocationPlus,BiSolidPhoneCall} from 'react-icons/bi'
import{AiFillYoutube,AiFillMail} from 'react-icons/ai'



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <div>
         <Container>
    
      <Row>
        <Col>
        <img style={{height:"70px", width:"90px"}} src='https://themes.dynamiclayers.net/arkid/wp-content/themes/arkid/assets/img/logo-dark.png' alt='' />
        <p>We provide outstanding business consulting services through teamwork.
        </p>
        <div style={{fontSize:"25px",margin:"10px",}}>
            <BsFacebook style={{margin:"5px",backgroundColor:"blue", color:"white"}}/>
            <BsInstagram style={{margin:"5px",backgroundColor:"orange", color:"white"}}/>
            <BiSolidLocationPlus style={{margin:"5px",backgroundColor:"green", color:"white"}}/>
            <AiFillYoutube style={{margin:"5px",backgroundColor:"red", color:"white"}}/>
        </div>
        </Col>
        <Col>
        <h4>Company</h4>
        <p>
            About us
        </p>
        <p>
            Our services
        </p>
        <p>
            Help & FAQ
        </p>
        <p>
            Contact us
        </p>
        </Col>
        <Col>
        <h4>
            HEADQUARTERS</h4>
            <p><BiSolidLocationPlus/>  962 Fifth Avenue, 3rd Floor New York, NY10022</p>
            <p>
<AiFillMail/> Hello@dynamiclayers.net
            </p>
            <p>
<BiSolidPhoneCall/>  (+123) 456 789 101
            </p>
            </Col>
        <Col>
        <h4>
        NEWSLETTER
            </h4>
            <p>Stay always in touch! Subscribe to our newsletter.</p>
            <input type='text' value="Email"/> <button style={{position:"relative", right:"20px", backgroundColor:"greenyellow",padding:"4px", border:"none"}}><BsFillSendExclamationFill style={{fontSize:"18px"}}/></button>
            </Col>

      </Row>
    </Container>
      
    </div>
  );
}

export default Footer;
