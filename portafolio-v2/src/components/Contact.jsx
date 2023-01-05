import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ContactContainer } from "./theme/Changes";
import Themes from './theme/Themes'
import '../styles/Contact.css';

const Contact = ( props ) => {

    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = name => event => {
        setData(prevState => ({ ...prevState, [name]: event.target.value }));
      };

    const { theme } = props;
  
    return (
        <ThemeProvider theme={Themes[theme]}>
            <ContactContainer>
                <div className='contact-container'>
                    <p className='text-contact'> Contactate conmigo</p>
                    <div className='box-form'>
                        <form className='formModal'>
                            <label>Nombre:</label> 
                            <input className="form-input" type='text' name="name" value={data.name} onChange={handleChange("name")} placeholder="Nombre" required  ></input>
                            <label>Email:</label>
                            <input className="form-input" type='text' name="email" value={data.email} onChange={handleChange("email")}placeholder="Email" required></input> 
                            <label>Mensaje:</label>
                            <input className="form-input" id='message' type='text' name="message" value={data.message} onChange={handleChange("message")}placeholder="Mensaje" required></input> 
                            <button type="submit" className="btn btn-info">Enviar</button>
                        </form>
                    </div>
                </div>
            </ContactContainer>
        </ThemeProvider>
    );
  }
  
  export default Contact;