import React from 'react'
import { useHistory } from 'react-router-dom'
import URLS from '../../Routes/Urls'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  button: {
    background: '#0f4c75',
    color: '#fff',
    "&:hover": {
        backgroundColor: "#0f4c85"
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
                    <div className="col-11 col-sm-8 col-md-6 col-lg-4 my-5 px-3 py-4 bg-white shadow border">
                        <h3 className="mb-4 text-center">Login</h3>
                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="form-row">
                                <div className="form-group col-12">
                                    <TextField 
                                        fullWidth 
                                        id="outlined-basic" 
                                        label="Usuario" 
                                        variant="outlined" 
                                        required
                                    />
                                </div>
                                <div className="form-group col-12">
                                    <TextField 
                                        fullWidth 
                                        id="outlined-basic" 
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