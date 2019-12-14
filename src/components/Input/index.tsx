import React from 'react'

type InputProps = {
  name: string
  placeholder?: string
  type?: string
}

const Input: React.FC<InputProps> = ({name, placeholder='', type = "text"}) => {
  return <input type={type} name={name} placeholder={placeholder} />
}

export default Input