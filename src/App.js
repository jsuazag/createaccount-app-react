import React from 'react';
import { Category } from './components/Category';
import { InputField } from './components/InputField';
import { Logo } from './components/Logo';
import {Title} from './components/Title';

export const App = () => {
    return (
        <React.Fragment>
            <Title title="Add New Account" />
            <Logo />
            <InputField 
                label="Situs website" 
                type="text" 
                iconName="world"
                placeholder="Enter website"
            />
            <InputField 
                label="Email / Phone number" 
                type="email" 
                iconName="email"
                placeholder="Enter email"
            />
            <InputField 
                label="Password / Pin" 
                type="password" 
                iconName="lock"
                placeholder="Enter password"
            />
            <Category />
        </React.Fragment>
    )
}