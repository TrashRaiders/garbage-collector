import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import React from 'react'

interface ShopCardProps {
  className?: string
  id: string
  name: string
  tags: string[]
}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

function ShopCard(props: ShopCardProps): React.ReactElement {
  const { className, id, name, tags } = props

  const classes = useStyles()
  const router = useRouter()

  function onListItemClick() {
    router.push(`/shop/${id}`)
  }

  return (
    <Card
      className={[classes.root, className].join(' ')}
      onClick={onListItemClick}
    >
      <CardContent className={classes.content}>
        <Typography variant="body1">{name}</Typography>

        <Typography variant="body1">{tags.join(' ')}</Typography>
      </CardContent>
    </Card>
  )
}

export default ShopCard
