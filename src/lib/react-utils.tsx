import React, { Dispatch, SetStateAction, useMemo, useRef } from 'react'

// TODO replace with the `createStateContext` from 'react-use
export function createStateContext<V>(
  defaultValue: V,
): [
  React.Context<[V, React.Dispatch<React.SetStateAction<V>>]>,
  (props: { children?: React.ReactNode }) => React.ReactElement,
] {
  type SetState = React.Dispatch<React.SetStateAction<V>>
  const defaultSetState: SetState = () => defaultValue
  const Context = React.createContext([defaultValue, defaultSetState] as [
    typeof defaultValue,
    typeof defaultSetState,
  ])

  function Provider(props: { children?: React.ReactNode }): React.ReactElement {
    const [state, setState] = React.useState(defaultValue)

    const value = useRef<[V, Dispatch<SetStateAction<V>>]>([state, setState])

    useMemo(() => {
      value.current = [state, setState]
    }, [state, setState])

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Context.Provider value={value.current} {...props} />
  }

  return [Context, Provider] as [typeof Context, typeof Provider]
}
