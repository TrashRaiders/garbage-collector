/* eslint-disable no-loop-func */
import { ApolloLink, fromPromise } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

let isRefreshing = false
let pendingRequests: (() => void)[] = []

const resolvePendingRequests = () => {
  pendingRequests.map((callback) => callback())
  pendingRequests = []
}

export const token: { auth: string } = {
  auth: '',
}

/**
 * Catches Apollo client errors to we don't have these ugly next.js error windows,
 * if there is an error with the connection to the Backend API.
 *
 * TODO doesn't work as intendet yet. Should show the error page, if there is no connection.
 */
export function createErrorLink(): ApolloLink {
  return onError(
    // eslint-disable-next-line consistent-return
    ({ graphQLErrors, networkError, response, forward, operation }) => {
      if (graphQLErrors) {
        for (const graphQLError of graphQLErrors) {
          const { message, locations, path } = graphQLError
          // eslint-disable-next-line no-console
          console.info(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          )

          // based on this approach to refresh a token:
          // https://able.bio/AnasT/apollo-graphql-async-access-token-refresh--470t1c8#concurrent-requests
          if (/.*authorization failed/g.test(message)) {
            // error code is set to UNAUTHENTICATED
            // when AuthenticationError thrown in resolver
            let forward$

            if (!isRefreshing) {
              isRefreshing = true
              forward$ = fromPromise(
                getNewToken()
                  .then(({ authToken }) => {
                    // Store the new tokens for your auth link
                    token.auth = authToken

                    resolvePendingRequests()
                    return authToken
                  })
                  .catch(() => {
                    pendingRequests = []
                    // Should never error
                  })
                  .finally(() => {
                    isRefreshing = false
                  }),
              ).filter((value) => Boolean(value))
            } else {
              // Will only emit once the Promise is resolved
              forward$ = fromPromise(
                new Promise<void>((resolve) => {
                  pendingRequests.push(() => resolve())
                }),
              )
            }

            return forward$.flatMap(() => forward(operation))
          }
        }
      }

      if (networkError) {
        // Check if error response is JSON
        if (networkError.message === 'Internal Server Error' && response) {
          response.errors = undefined
        }

        if (networkError.name === 'FetchError' && response) {
          response.errors = undefined
        }

        console.info('[Network error]:', networkError)
      }
    },
  )
}
/* eslint-enable no-loop-func */

async function getNewToken() {
  const url =
    typeof window === 'undefined'
      ? `${process.env.BASE_URL}/api/get-token`
      : '/api/get-token'

  const res = await fetch(url)
  const data = await res.json()

  return data
}
