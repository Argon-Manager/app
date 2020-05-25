import { createStateContext } from "react-use"
import { Auth } from "../../generated/graphql"

type AuthState = Partial<Omit<Auth, "__typename">>

const [useSharedAuth, AuthProvider] = createStateContext<AuthState>({})

const useAuth = () => {
  const [{ user, token }, _setAuth] = useSharedAuth()

  const setAuth = (auth: AuthState) => {
    if (auth.token) {
      localStorage.setItem("token", auth.token)
    }

    _setAuth((prevAuth) => ({ ...prevAuth, ...auth }))
  }

  return {
    isAuth: Boolean(user && token),
    token,
    user,
    setAuth,
  }
}

export default useAuth

export { AuthProvider }
