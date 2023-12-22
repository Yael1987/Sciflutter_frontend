import React from 'react'

import '@/styles/components/skeletons.scss'

const NavBarSkeleton = () => {
  return (
    <div className='skeleton--nav-menu'>
      <div className='skeleton--nav-menu__option'></div>
      <div className='skeleton--nav-menu__option'></div>
      <div className='skeleton--nav-menu__option'></div>
      <div className='skeleton--nav-menu__avatar'></div>
      <div className='skeleton--nav-menu__option'></div>
    </div>
  )
}

export default NavBarSkeleton