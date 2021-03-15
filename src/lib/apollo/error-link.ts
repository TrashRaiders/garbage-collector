/* eslint-disable no-loop-func */
import { ApolloLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

/**
 * Catches Apollo client errors to we don't have these ugly next.js error windows,
 * if there is an error with the connection to the Backend API.
 *
 * TODO doesn't work as intendet yet. Should show the error page, if there is no connection.
 */
export function createErrorLink(): ApolloLink {
  return onError(
    // eslint-disable-next-line consistent-return
    ({ graphQLErrors, networkError, response }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach((graphQLError) => {
          const { message, locations, path } = graphQLError

          // based on this approach to refresh a token:
          // https://able.bio/AnasT/apollo-graphql-async-access-token-refresh--470t1c8#concurrent-requests
          if (/.*authorization failed/g.test(message)) {
            // eslint-disable-next-line no-console
            console.info('Authorization failed!')
          }
          // eslint-disable-next-line no-console
          console.info(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          )
        })
      }

      if (networkError) {
        // Check if error response is JSON
        if (networkError.message === 'Internal Server Error' && response) {
          response.errors = undefined
        }

        if (networkError.name === 'FetchError' && response) {
          response.errors = undefined
        }

        // eslint-disable-next-line no-console
        console.info('[Network error]:', networkError)
      }
    },
  )
}
/* eslint-enable no-loop-func */
