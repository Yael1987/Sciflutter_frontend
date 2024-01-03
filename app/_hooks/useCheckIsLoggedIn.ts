"use client"
import { useCallback, useEffect } from "react"
import { checkCookieExist } from "../_actions/authActions"
import { UserStore, useUserStore } from "../_stores/userStore"
import { useShallow } from "zustand/react/shallow"

const useCheckIsLoggedIn = (): void => {
  const initLoggedUser = useUserStore(useShallow((state: UserStore) => state.initLoggedUser))
  const user = useUserStore((state: UserStore) => state.user)

  const callInitUser = useCallback(async () => await initLoggedUser(), [initLoggedUser])

  useEffect(() => {
    if (checkCookieExist() && !user){
      callInitUser()
    }
  }, [callInitUser, user])
}

export default useCheckIsLoggedIn