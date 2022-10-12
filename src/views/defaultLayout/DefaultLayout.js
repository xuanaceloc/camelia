import { useMediaQuery } from 'react-responsive';

import Header from '../components/header';
import HeaderMobile from '../components/headerMobile';
import Footer from '../components/footer';

const DefaultLayout = ({ children }) => {
    const isMobile = useMediaQuery({ query: '(max-width : 468px)' });
    return (
        <div>
            {isMobile ? <HeaderMobile /> : <Header />}
            {children}
            <Footer />
        </div>
    );
};

export default DefaultLayout;
