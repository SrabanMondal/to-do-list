'use client'
import React from 'react'
import { createuser } from './libs/ins'

const Button = () => {
    const handleCreateUser = async () => {
        console.log('Creating user...');
        try {
          await createuser();
        } catch (err) {
          console.error('Error creating user:', err);
        }
      };
    
  return (
    <div>
        <button type='button' onClick={handleCreateUser}>Click</button>
    </div>
  )
}

export default Button