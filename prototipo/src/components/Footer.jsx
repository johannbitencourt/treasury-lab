import React from 'react'
import { Footer } from 'mui-layout'
import Typography from '@material-ui/core/Typography'

export default props =>
    <Footer>
        <Typography variant="body2" color="textSecondary" align="center">
            {'Desenvolvido por Johann '}{new Date().getFullYear()}{'.'}
        </Typography>
    </Footer>