import { type UserStore, useUserStore } from '../_stores/userStore';
import { useCallback, useEffect, useState } from 'react';
import { type User } from '../_interfaces/api';
import { checkCookieExist } from '../_actions/authActions';

const useCheckSession = (): [User | null, boolean] => {
  const [isLoading, setIsLoading] = useState<boolean>()
  const [loggedUser, setLoggedUser] = useState<User | null>(null)
  
  const user = useUserStore((state: UserStore) => state.user);

  const checkLogin = useCallback(async () => {
    setIsLoading(true)

    if (checkCookieExist()) {
      if (!user) return
      else {
        setLoggedUser(user)
        setIsLoading(false)
        return
      }
    };

    setLoggedUser(null)
    setIsLoading(false)
  }, [user]);

  useEffect(() => {
    checkLogin()
  },[checkLogin])

  return [loggedUser, (isLoading as boolean)]
}

export default useCheckSession