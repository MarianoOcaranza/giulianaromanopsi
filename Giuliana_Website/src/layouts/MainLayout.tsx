import React from 'react';
import Header from '../components/common/Header'
import Footer from '../components/common/Footer';
interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({children})=> {
    return (
        <>
        <div className='bg-purple-400'>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </div>
         
        </>
    )
} 

export default MainLayout;