import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import Navbar from '../Components/Navbar/navbar'

function Update() {
    return (
        <div>
            <Navbar/>
            <Paper>
                <Typography style={{position:'relative',left:'45vw'}}>Upcoming Features......</Typography>
            </Paper>
            
        </div>
    )
}

export default Update
