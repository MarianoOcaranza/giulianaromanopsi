import React from 'react';
import Header from '../components/common/Header'
import Footer from '../components/common/Footer';
interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({children})=> {
    return (
        <>
         <Header/>
        <div>{children}</div>
        <Footer/>
        </>
    )
} 

export default MainLayout;