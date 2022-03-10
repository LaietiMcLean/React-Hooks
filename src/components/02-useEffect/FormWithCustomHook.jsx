import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

import './effects.css'

export const FormWithCustomHook = () => {

    const [formsValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formsValues;

    useEffect( () => {
        console.log('el e-mail ha cambiado')
    }, [email]);

    return (
        <form>
            <p>FormWithCustomHook</p>
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
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
        </form>
    )
}
