import { useMediaQuery } from '@material-ui/core'
import React from 'react'
import { createStateContext, useCookie } from 'react-use'

const [useDarkMode, DarkModeInnerProvider] = createStateContext({
  isDarkMode: false,
  auto: true,
})

function DarkModeConsumer(consumerProps: {
  children?: React.ReactNode
}): React.ReactElement {
  const [darkMode, setDarkMode] = useDarkMode()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  React.useEffect(() => {
    if (
      !darkMode.auto ||
      darkMode.isDarkMode === prefersDarkMode ||
      typeof window === 'undefined'
    ) {
      return
    }
    setDarkMode({ ...darkMode, isDarkMode: prefersDarkMode })
  }, [darkMode, prefersDarkMode, setDarkMode])

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <React.Fragment {...consumerProps} />
}

function DarkModeProvider(props: {
  children?: React.ReactNode
}): React.ReactElement {
  const [theme] = useCookie('theme')

  return (
    <DarkModeInnerProvider
      initialValue={{
        isDarkMode: theme === 'dark',
        auto: !theme,
      }}
    >
      <DarkModeConsumer {...props} />
    </DarkModeInnerProvider>
  )
}

export { useDarkMode, DarkModeProvider }
