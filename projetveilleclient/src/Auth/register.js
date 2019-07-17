import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
        backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    }));


export default function SignUp() {
    const [email, setEmail] = React.useState('');
    const [name, setname] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [password_digest, setPassword_digest] = React.useState('');
    const [registered, setRegistered] = React.useState(false);
    const classes = useStyles();


function register(e) {
    e.preventDefault();
    e.stopPropagation();
fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    name,
    email,
    password,
    password_digest
    }),
})
    .then((response) => response.json())
    .then((data) => {
        if(data) {
            setRegistered(true);
        }
        })
    .catch((error) => {
    console.error(error);
    });
    return false;
}



return (
    {registered},
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        Sign up
        </Typography>
        <form className={classes.form} onSubmit={register} noValidate>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={e => setname(e.target.value)}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                name="password_digest"
                label="Password_digest"
                type="password"
                id="password_digest"
                autoComplete="password_digest"
                value={password_digest}
                onChange={e => setPassword_digest(e.target.value)}
            />
            </Grid>
        </Grid>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
        >
            Sign Up
        </Button>
        <Grid container justify="flex-end">
            <Grid item>
            <Link href="/login" variant="body2">
                Already have an account? Sign in
            </Link>
            </Grid>
        </Grid>
        </form>
    </div>
    <Box mt={5}>
    </Box>
    </Container>
);
}