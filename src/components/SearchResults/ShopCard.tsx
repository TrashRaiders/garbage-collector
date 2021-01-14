import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

interface ShopCardProps {
  className?: string
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
  const { className, name, tags } = props

  const classes = useStyles()

  return (
    <Card className={[classes.root, className].join(' ')}>
      <CardContent className={classes.content}>
        <Typography variant="body1">{name}</Typography>

        <Typography variant="body1">{tags.join(' ')}</Typography>
      </CardContent>
    </Card>
  )
}

export default ShopCard
