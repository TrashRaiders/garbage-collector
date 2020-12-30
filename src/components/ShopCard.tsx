import {
  Card,
  CardContent,
  Theme,
  Typography,
  makeStyles,
} from '@material-ui/core'
import React from 'react'

interface ShopCardProps {
  className?: string
  name: string
  tags: string[]
}

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  card: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
}))

function ShopCard(props: ShopCardProps): React.ReactElement {
  const { className, name, tags } = props

  const classes = useStyles()

  return (
    <Card className={[classes.card, className].join(' ')}>
      <CardContent className={classes.content}>
        <Typography variant="body1">{name}</Typography>

        <Typography variant="body1">{tags.join(' ')}</Typography>
      </CardContent>
    </Card>
  )
}

export default ShopCard
