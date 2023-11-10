import { FC, ReactNode } from 'react';
import "@/styles/styles.css"

interface AuthLayoutProps {
  children: ReactNode;
}

{/*<div className='bg-stone-700 p-10 rounded-md'>*/}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <div className='form'>{children}</div>;
};

export default AuthLayout;
