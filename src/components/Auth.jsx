import React from 'react';
import { AuthContainer } from './AuthContainer'

// mui
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Snackbar from '@material-ui/core/Snackbar';

// mui-icons
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        margin: theme.spacing(3,0)
    },
    fg1:{
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(1),
    },
    textField:{
        margin: theme.spacing(1),
    }
}));

const Form = _ => {
    const classes = useStyles();
    const authContainer = AuthContainer.useContainer();

    const [showPassword, setShowPassword] = React.useState({visible:false});

    const handleClickShowPassword = () => {
        setShowPassword({ ...showPassword, visible: !showPassword.visible });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const [open, setOpen] = React.useState(false);
    const handleSnOpen = (e) => {
        if(authContainer.copyText(e)){
            setOpen(true);
        }else{
            alert("コピーできません。\n手動でコピーしてください。");
        }
    };
    const handleSnClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    return (
        <>
            <Paper className={classes.root}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">トークンのタイプ</FormLabel>
                    <RadioGroup aria-label="gender" name="type" value={authContainer.type} onChange={authContainer.handleChangeType}>
                        <Grid container className={classes.fg1}>
                            <Grid item xs={12} sm={6} className={classes.fg1}>
                                <FormControlLabel value="auth" control={<Radio color="primary" />} label="認証" />
                            </Grid>
                            <Grid item xs={12} sm={6} className={classes.fg1}>
                                <FormControlLabel value="basic" control={<Radio color="primary" />} label="Basic 認証" />
                            </Grid>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </Paper>
            <Paper className={classes.root}>
                <FormControl className={classes.textField}>
                    <InputLabel htmlFor="login-name">ログイン名*</InputLabel>
                    <Input
                        required
                        id="login-name"
                        value={authContainer.id}
                        onChange={authContainer.handleChangeId}
                    />
                </FormControl>
                <FormControl className={classes.textField}>
                    <InputLabel htmlFor="opassword">Password*</InputLabel>
                    <Input
                        required
                        id="password"
                        type={showPassword.visible ? 'text' : 'password'}
                        value={authContainer.pass}
                        onChange={authContainer.handleChangePass}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="パスワードを表示"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword.visible ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button
                    color="primary"
                    variant="contained" 
                    className={classes.button}
                    startIcon={<VpnKeyIcon />}
                    onClick={authContainer.generateToken}
                >
                    トークン生成
                </Button>
            </Paper>
            <Paper className={classes.root}>
                <FormControl>
                    <InputLabel htmlFor="token">トークン</InputLabel>
                    <Input
                        id="token"
                        value={authContainer.token}
                        readOnly
                    />
                </FormControl>
                
                <Button 
                    size="small" 
                    variant="outlined" 
                    color="primary" 
                    className={classes.button}
                    onClick={e => handleSnOpen(e)}
                >
                    <FileCopyIcon /> コピー
                </Button>
            </Paper>

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={2000}
                onClose={handleSnClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">コピーしました</span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        onClick={handleSnClose}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        </>
    );
}
export const Auth = _ => {
    return (
        <AuthContainer.Provider>
            <Form />
        </AuthContainer.Provider>
    );
}
