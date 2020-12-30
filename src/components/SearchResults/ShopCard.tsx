import { Card, CardContent, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

interface ShopCardProps {
  className?: string
  name: string
  tags: string[]
}

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

function ShopCard(props: ShopCardProps): React.ReactElement {
  const { className, name, tags } = props

  const classes = useStyles()

  return (
    <Card className={className}>
      <CardContent className={classes.content}>
        <Typography variant="body1">{name}</Typography>
        <Typography variant="body1">{tags.join(' ')}</Typography>
      </CardContent>
    </Card>
  )
}

export default ShopCard
