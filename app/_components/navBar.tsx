"use client"
import NavBarUser from './navBarUser'

import NavBarSkeleton from '../_skeletons/navBarSkeleton'
import { UserStore, useUserStore } from '../_stores/userStore'
import { useCallback, useEffect, useState } from 'react'
import { useShallow } from 'zustand/react/shallow'

const NavBar = () => {
  const user = useUserStore((state: UserStore) => state.user)
  const initLoggedUser = useUserStore(useShallow((state: UserStore) => state.initLoggedUser))
  const initUser = useCallback(
    async () => await initLoggedUser(),
    [initLoggedUser]
  );
  const [loading, setLoading] = useState<boolean>(Boolean(user))

  useEffect(() => {
    if (user) 
      setLoading(false)
  }, [user, initUser])

  if (!loading && user) {
    return <NavBarUser />
  } else {
    return <NavBarSkeleton />;
  }
}

export default NavBar