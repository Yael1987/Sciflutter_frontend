"use client"
import NavBarUser from './navBarUser'
import NavBarPublic from './navBarPublic'

import NavBarSkeleton from '../_skeletons/navBarSkeleton'
import { checkCookieExist } from '../_actions/authActions'
import { useUserStore } from '../_stores/userStore'

const NavBar = () => {
  const { user } = useUserStore()

  if (!checkCookieExist()) return <NavBarPublic />

  if (user) {
    return <NavBarUser />
  } else {
    return <NavBarSkeleton />;
  }
}

export default NavBar