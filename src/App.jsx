import React from "react";
import { Typography, AppBar, Card, Button, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import  useStyles  from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]


const App = () =>{
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className = {classes.icon} />
                    <Typography variant="h6">
                        PhotoAlbum
                    </Typography>
                </Toolbar>
            </AppBar> 
            <main>
                <div className={classes.conatiner}>
                    <Container maxWidth="sm" style = {{ marginTop: '100px'}}>
                        <Typography variant="h2" align = "center" color = "textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant ="h5" align ="center" color = "textSecondary" paragraph>
                            Hello I am Leo. this is a photo ALbum. AS long as possible
                        </Typography>
                        <div className = {classes.button}>
                            <Grid container spacing = {2} justify = "center">
                                <Grid item>
                                    <Button variant = "contained" color ="primary">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant = "outlined" color ="primary">
                                        Secondary Actions
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className = {classes.cardGrid} maxWidth ='md'>
                    <Grid container spacing = {4}>
                        {cards.map((card)=>(
                            <Grid item key = {card} xs = {12}>
                            <Card className = {classes.card}>
                                <CardMedia
                                className = {classes.cardMedia}
                                image = "https://source.unsplash.com/random"
                                title = "New Image"
                                />
                                <CardContent className = {classes.cardContent}>
                                    <Typography gutterBottom variant = "h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is content. You can use this section to describe the media
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size ="small" color = "primary"> View </ Button>
                                    <Button size ="small" color = "primary"> Edit </ Button>
                                </CardActions>
                            </Card> 
                        </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className="classes.footer">
                <Typography variant ="h6" align ="center" gutterBottom>
                    footer
                </Typography>
                <Typography variant = "subtitle1" align ="center" color ="textSecondary">
                    Something is here
                </Typography>
            </footer>
        </>
    );
}

export default App;