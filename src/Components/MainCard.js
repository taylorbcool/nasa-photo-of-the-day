import React, {useState, useEffect} from 'react';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '95%',
    maxHeight: '80%',
    alignItems: 'stretch',
    margin: '2.5%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function MainCard() {
    const [pic, setPic] = useState([]);
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=lSWLvX9H1ezSKnWpoKSYoEpLKWnFIdi1PqF9TIR5')
        .then(response => {
            setPic(response.data);
        })
        .catch(error => {
            console.log(`Could not get data; ${error}`)
        })
    },[])

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
    setExpanded(!expanded);
    };

    return (
    <Card className={classes.card}>
        <CardHeader
        title={pic.title}
        subheader={pic.date}
        />
        <CardMedia
        className={classes.media}
        image={pic.url}
        title={pic.title}
        />
        <CardActions disableSpacing>
        <IconButton
            className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
        >
            <ExpandMoreIcon />
        </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <Typography variant="p" paragraph>
            {pic.explanation}
            </Typography>
        </CardContent>
        </Collapse>
    </Card>
    );
}
