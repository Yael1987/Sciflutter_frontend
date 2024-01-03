"use client"
import { useEffect, useState } from 'react'
import { checkCookieExist } from '../_actions/authActions'
import { useUserStore } from '../_stores/userStore'
import Cookies from 'js-cookie'

const useCheckCookie = () => {
  const [isCookie, setIsCookie] = useState<boolean>(Boolean(Cookies.get('token_sciflutter'))); 
  const { user } = useUserStore()

  useEffect(() => {
    if (!user) {
      setIsCookie(Boolean(Cookies.get("token_sciflutter")));
    }
  }, [user])

  console.log(isCookie);
  
  
  return isCookie
}

export default useCheckCookie