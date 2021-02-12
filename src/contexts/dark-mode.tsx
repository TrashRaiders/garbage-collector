// import { useMediaQuery } from '@material-ui/core'
import React from 'react'
import { createStateContext } from 'react-use'

const [useDarkMode, DarkModeInnerProvider] = createStateContext({
  isDarkMode: false,
  auto: true,
})

function DarkModeConsumer(consumerProps: {
  children?: React.ReactNode
}): React.ReactElement {
  // Note: set dark theme as default, because forcing dark theme for cypress tests is not implemented
  const prefersDarkMode = true // useMediaQuery('(prefers-color-scheme: dark)')
  const [darkMode, setDarkMode] = useDarkMode()

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
  return (
    <DarkModeInnerProvider>
      <DarkModeConsumer {...props} />
    </DarkModeInnerProvider>
  )
}

export { useDarkMode, DarkModeProvider }
