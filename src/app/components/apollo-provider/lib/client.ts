import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from "@apollo/link-context"

const authLink = setContext((_, { headers: prevHeaders }) => {
  const headers = { ...prevHeaders }
  const token = localStorage.getItem("token")

  token && (headers.Authorization = `Bearer ${token}`)

  return { headers }
})

const httpLink = new HttpLink({
  uri: "http://localhost:3100",
})

const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
})

export default client
