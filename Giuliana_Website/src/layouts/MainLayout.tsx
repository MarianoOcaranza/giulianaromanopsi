import React from 'react';
import Header from '../components/common/Header'
interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({children})=> {
    return (
        <>
         <Header/>
        <div>{children}</div>
        </>
    )
} 

export default MainLayout;