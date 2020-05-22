import React from 'react'
import { useHistory } from 'react-router-dom'
import URLS from '../../Routes/Urls'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const useStyles = makeStyles((theme) => ({
  button: {
    background: '#ee8572',
    color: '#fff',
    "&:hover": {
        backgroundColor: "#ee8572"
    }
  },
}));


export default function (){

    const classes = useStyles();

    const history = useHistory()

    const handleSubmit = e =>{
        e.preventDefault()

        history.push(URLS.Dashboard)
    }

    return(
        <div className="landing-page">
            <div className="container page-content">
                <div className="row d-flex justify-content-center">
                    <div className="col-11 col-sm-8 col-md-6 col-lg-4 my-5 p-0 rounded bg-white opcd">
                        <div className="col-12 p-0" style={{height: "250px", position: "absolute"}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M-30.76,141.61 C-23.98,49.83 -1.41,87.33 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill: "#ee8572"}}></path></svg></div>
                        <h2 className="mb-5 mt-5 text-center text-white" style={{position: "relative"}}>Login <LockOpenIcon/></h2>
                        <form
                            onSubmit={handleSubmit}
                            className="p-3"
                        >
                            <div className="form-row">
                                <div className="form-group col-12">
                                    <TextField 
                                        fullWidth 
                                        id="user" 
                                        label="Usuario" 
                                        variant="outlined"
                                        required
                                    />
                                </div>
                                <div className="form-group col-12">
                                    <TextField 
                                        fullWidth 
                                        id="password" 
                                        label="Contraseña" 
                                        variant="outlined" 
                                        type="password"
                                        required
                                    />
                                </div>
                            </div>
                            <Button 
                                fullWidth 
                                variant="contained" 
                                size="large"
                                className={classes.button}
                                type="submit"
                            >
                                Login
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}