import React, { useEffect, useState } from 'react'
import { Message } from './Message';

import './effects.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect( () => {
        //console.log('El name ha cambiado')
    }, [name]);

    useEffect( () => {
       //console.log('El email ha cambiado')
    }, [email]);

    const handleInputChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <p>useEffect</p>
            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@email.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {name === '123' && <Message />}

        </>
    )
}
