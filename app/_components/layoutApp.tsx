"use client"
import dynamic from 'next/dynamic';
import useCheckIsLoggedIn from '../_hooks/useCheckIsLoggedIn';
import NavBarSkeleton from '../_skeletons/navBarSkeleton';
import Footer from './footer';
import Header from './header';
import NavBar from './navBar';

const DynamicNavBar = dynamic(() => import('./navBar'), { loading: () => <NavBarSkeleton />, ssr: false })

interface Props {
  children: React.ReactNode
}

const LayoutApp: React.FC<Props> = ({ children }) => {
  useCheckIsLoggedIn()

  return (
    <>
      <Header>
        <DynamicNavBar />
      </Header>

      <main className="container container--main">{children}</main>

      <Footer />
    </>
  );
}

export default LayoutApp