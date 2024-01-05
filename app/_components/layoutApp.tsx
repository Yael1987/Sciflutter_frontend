"use client"
import useCheckIsLoggedIn from '../_hooks/useCheckIsLoggedIn';

interface Props {
  children: React.ReactNode
}

const LayoutApp: React.FC<Props> = ({ children }) => {
  useCheckIsLoggedIn()

  return (  
    <main className="container container--main">
      {children}
    </main>
  );
}

export default LayoutApp