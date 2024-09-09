import React, { ReactNode } from 'react'

interface ChildrenProps {
    children: ReactNode
}

const Container: React.FC<ChildrenProps> = ({children}) => {
  return (
    <div className='max-w-screen-xl mx-auto px-4'>
        {children}
    </div>
  )
}

export default Container