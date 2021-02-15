export type Provider = 'google' | 'github'

/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
/* eslint-disable promise/no-nesting */
/* eslint-disable @typescript-eslint/no-explicit-any */
interface LoginTaskResult {
  cookies: any
  lsd: any

  ssd: any
}
/* eslint-enable @typescript-eslint/no-explicit-any */

Cypress.Commands.add('login', (provider: Provider) => {
  const credentials = {
    google: {
      username: Cypress.env('GOOGLE_USER'),
      password: Cypress.env('GOOGLE_PW'),
    },
    github: {
      username: Cypress.env('GITHUB_USER'),
      password: Cypress.env('GITHUB_PW'),
    },
  }

  const { username, password } = credentials[provider]
  const siteName = Cypress.env('SITE_NAME')
  const cookieName = Cypress.env('COOKIE_NAME')
  const loginUrl = `${siteName}/api/auth/signin`

  const socialLoginOptions = {
    username,
    password,
    loginUrl,
    headless: false,
    logs: false,
    isPopup: false,
    popupDelay: 2000,
    loginSelector: `form[action="${siteName}/api/auth/signin/${provider}"] button[type=submit]`,
    postLoginSelector: 'div#__next',
  }

  const taskNames = {
    google: 'GoogleSocialLogin',
    github: 'GitHubSocialLogin',
  }
  const taskName = taskNames[provider]

  return cy.task(taskName, socialLoginOptions).then((result) => {
    const { cookies } = result as LoginTaskResult
    cy.clearCookie(cookieName)
    // cy.clearCookie('next-auth.callback-url')
    // cy.clearCookie('next-auth.csrf-token')

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cookie = cookies.filter((c: any) => c.name === cookieName).pop()
    if (cookie) {
      cy.setCookie(cookie.name, cookie.value, {
        domain: cookie.domain,
        expiry: cookie.expires,
        httpOnly: cookie.httpOnly,
        path: cookie.path,
        secure: cookie.secure,
      })

      Cypress.Cookies.defaults({
        preserve: cookieName,
      })
    }
  })
})

Cypress.Commands.add('logout', () => {
  cy.visit('/api/auth/signout')
  cy.get('form').submit()
})

/* eslint-enable promise/always-return */
/* eslint-enable promise/no-nesting */
/* eslint-enable promise/catch-or-return */
