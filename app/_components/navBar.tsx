'use client'
import { type FC, useCallback, useEffect, useState } from 'react'
import { useShallow } from 'zustand/react/shallow'

import { type UserStore, useUserStore } from '../_store/userStore'

import NavBarUser from './navBarUser'

import NavBarSkeleton from '../_skeletons/navBarSkeleton'

const NavBar: FC = () => {
  const user = useUserStore((state: UserStore) => state.user)
  const initLoggedUser = useUserStore(useShallow((state: UserStore) => state.initLoggedUser))
  const initUser = useCallback(
    async () => await initLoggedUser(),
    [initLoggedUser]
  )
  const [loading, setLoading] = useState<boolean>(Boolean(user))

  useEffect(() => {
    if (user) 
      setLoading(false)
  }, [user, initUser])

  if (!loading && user) {
    return <NavBarUser/>
  } else {
    return <NavBarSkeleton/>
  }
}

export default NavBar