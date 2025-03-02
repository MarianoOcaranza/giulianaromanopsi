import Header from '../components/common/Header'
import Footer from '../components/common/Footer';


const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   
    return (
      <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-r from-purple-500 to-purple-300">
        <Header />
        <main className="container mx-auto px-4 relative z-10">{children}</main>
        <Footer />
      </div>
    );
};

export default MainLayout;