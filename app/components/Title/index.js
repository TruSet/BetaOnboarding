import React from 'react'
import injectSheet from 'react-jss'

const styles = theme => ({
  root: {
    alignItems: 'center',
    background: 'linear-gradient(#292929, #040404)',
    display: 'flex',
    height: '40%',
    justifyContent: 'center',
    minHeight: theme.custom.defaultTitleHeight,
    paddingTop: 20,
    width: '100%',
  }
})

export default injectSheet(styles)(({children, classes}) =>
  <div className={classes.root}>
    {children}
  </div>
)
