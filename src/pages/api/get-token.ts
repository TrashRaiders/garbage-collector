import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  authToken: string
}
type Error = {
  error: string
}

export default async (
  request: NextApiRequest,
  response: NextApiResponse<Data | Error>,
): Promise<void> => {
  const {
    GRAPHQL_API_LOGIN_URL: url,
    GRAPHQL_API_USERNAME: username,
    GRAPHQL_API_PASSWORD: password,
    error,
  } = getConfig(
    'GRAPHQL_API_LOGIN_URL',
    'GRAPHQL_API_USERNAME',
    'GRAPHQL_API_PASSWORD',
  )

  if (error) {
    response.status(500).json({ error })
    return
  }

  // fetch the access token from the backend
  const tokenResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
  const data: Data = await tokenResponse.json()

  response.status(200).json(data)
}

/**
 *
 * Show a warning if the env variables are not specified
 *
 * @param {string[]} variables - environment variables to read from process.env
 *
 * @returns { [key: string]: string } - the input strings as keys of the resulting object with the read values
 */
function getConfig(...variables: string[]) {
  const result: { [key: string]: string } = {}

  variables.forEach((variable) => {
    if (process.env[variable]) {
      result[variable] = process.env[variable] ?? ''
    } else {
      result[variable] = ''
      const errorMessage = `process.env.${variable} is not defined`
      // eslint-disable-next-line no-console
      console.warn(errorMessage)
      result.error = result.error
        ? [result.error, errorMessage].join(', ')
        : errorMessage
    }
  })

  return result
}
