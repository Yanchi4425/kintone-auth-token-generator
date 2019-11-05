import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';

export default function Header() {
    const useStyles = makeStyles(theme => ({
        root:{
            flexGrow:1,
        },
        title:{
            flexGrow: 1,
        }
    }));
    const classes = useStyles();

    function handleJumpGithub(){
        window.open("https://github.com/Yanchi4425/kintone-auth-token-generator","_blank");
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <ToolBar>
                    <Typography variant="h6" color="inherit" className={classes.title}>
                        kintone 認証トークン作成ツール
                    </Typography>
                    <div>
                        <IconButton
                            aria-label="Open Github."
                            onClick={handleJumpGithub}
                            color="inherit"
                        >
                            <GitHubIcon />
                        </IconButton>
                    </div>
                </ToolBar>
            </AppBar>
        </div>
    );
}
