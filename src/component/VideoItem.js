import React from 'react';
import {Grid, Paper, Typography, Button} from '@material-ui/core';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <Grid item xs ={12}>
            <Paper elevation={6} style = {{display : 'flex', alignItems:'center', cursor:'pointer'}} onClick={()=> onVideoSelect(video)}>
                <img style={{ marginRight: '10px', marginTop:'10px', marginBottom:'10px', marginLeft:'10px'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
                    <Typography variant="caption"><b><p style={{marginRight:'10px', alignContent:'justify'}}>{video.snippet.title}
                    <br/>
                    <Typography variant="caption">{video.snippet.description}</Typography><br/></p>
                    <Button style={{marginTop:'20px', marginBottom:'20px'}} variant="outlined" color="secondary" startIcon={<OndemandVideoIcon/>}> {video.snippet.channelTitle}</Button>
                    </b></Typography>
                    
            </Paper>
            
        </Grid>
    )
}

export default VideoItem;