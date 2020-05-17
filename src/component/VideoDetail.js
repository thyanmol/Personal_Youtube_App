import React from 'react';

import { Paper, Typography, Button} from '@material-ui/core';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

const VideoDetail = ({video}) => {
    if(!video) return <div>Loading...</div>
    console.log(video.id.videoId);
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <React.Fragment>
            <Paper elevation={6} style={{height: '70%'}}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc}/>
            </Paper>
            <Paper elevation={6} style={{ padding: '15px'}}>
                <Typography variant="h6" style = {{alignContent:"center"}}><b>{video.snippet.title}</b></Typography>
                <Typography variant="caption"><b>{video.snippet.description}</b></Typography><br/>
                <Button style={{marginTop:'20px', marginBottom:'20px'}} variant="outlined" color="secondary" startIcon={<OndemandVideoIcon/>}> {video.snippet.channelTitle}</Button>
                
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetail;