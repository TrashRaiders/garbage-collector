import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  authToken: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> => {
  const {
    GRAPHQL_API_LOGIN_URL: url,
    GRAPHQL_API_USERNAME: username,
    GRAPHQL_API_PASSWORD: password,
  } = getConfig(
    'GRAPHQL_API_LOGIN_URL',
    'GRAPHQL_API_USERNAME',
    'GRAPHQL_API_PASSWORD',
  )

  // fetch the access token from the backend
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
  const data: Data = await response.json()

  res.status(200).json(data)
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

  for (const variable of variables) {
    if (process.env[variable]) {
      result[variable] = process.env[variable] ?? ''
    } else {
      result[variable] = ''
      // eslint-disable-next-line no-console
      console.warn(`process.env.${variable} is not defined`)
    }
  }

  return result
}
