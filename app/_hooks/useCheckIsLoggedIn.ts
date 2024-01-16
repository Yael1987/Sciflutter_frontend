"use client"
import { useCallback, useEffect } from "react"
import { checkCookieExist } from "../_actions/authActions"
import { UserStore, useUserStore } from "../_store/userStore"
import { useShallow } from "zustand/react/shallow"
import { useRouter } from "next/navigation"

const useCheckIsLoggedIn = (): void => {
  const initLoggedUser = useUserStore(useShallow((state: UserStore) => state.initLoggedUser))
  const user = useUserStore((state: UserStore) => state.user)
  const { refresh } = useRouter()

  const callInitUser = useCallback(async () => {
    if (!user) { 
      const userSetted = await initLoggedUser()
      
      if(!userSetted) refresh()
    }
  }, [initLoggedUser, refresh, user])

  useEffect(() => {
    if (checkCookieExist() && !user){
      callInitUser()
    }
  }, [callInitUser, user, refresh])
}

export default useCheckIsLoggedIn