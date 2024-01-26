"use client"
import useCheckIsLoggedIn from '../_hooks/useCheckIsLoggedIn';

interface Props {
  children: React.ReactNode
}

const LayoutApp: React.FC<Props> = ({ children }) => {
  useCheckIsLoggedIn()

  return (  
    <main className="l-container_main">
      {children}
    </main>
  );
}

export default LayoutApp