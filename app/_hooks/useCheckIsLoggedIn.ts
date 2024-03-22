"use client"
import { useCallback, useEffect } from "react"
import { checkCookieExist } from "../_actions/authActions"
import { UserStore, useUserStore } from "../_store/userStore"
import { useShallow } from "zustand/react/shallow"
import { useRouter } from "next/navigation"

const useCheckIsLoggedIn = (): void => {
  const initLoggedUser = useUserStore(useShallow((state: UserStore) => state.initLoggedUser))
  const getSavedArticles = useUserStore(useShallow((state: UserStore) => state.getSavedArticles))
  const { user, savedArticles } = useUserStore()
  const { refresh } = useRouter()

  const callInitUser = useCallback(async () => {
    if (!(await checkCookieExist())) return;

    if (!user) { 
      const userSetted = await initLoggedUser()
      
      if(!userSetted) refresh()
    }

    if (!savedArticles) {
      await getSavedArticles();
    }
  }, [initLoggedUser, refresh, user, getSavedArticles, savedArticles])

  useEffect(() => {
    callInitUser()
  }, [callInitUser, user])
}

export default useCheckIsLoggedIn