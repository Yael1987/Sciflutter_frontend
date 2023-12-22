"use client"
import { useCallback, useEffect } from "react"
import { checkCookieExist } from "../_actions/authActions"
import { UserStore, useUserStore } from "../_stores/userStore"
import { useShallow } from "zustand/react/shallow"

const useCheckIsLoggedIn = (): void => {
  const initLoggedUser = useUserStore(useShallow((state: UserStore) => state.initLoggedUser))

  const callInitUser = useCallback(async () => await initLoggedUser(), [initLoggedUser])

  useEffect(() => {
    if (checkCookieExist()){
      callInitUser()
    }
  }, [callInitUser])
}

export default useCheckIsLoggedIn