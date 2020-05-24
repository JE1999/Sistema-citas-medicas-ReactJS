import React from 'react'
import { Link } from 'react-router-dom'

//Components
import Table from './Components/Table'
import Urls from '../../Routes/Urls';

import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import PrintIcon from '@material-ui/icons/Print';

export default function (){

    const print = () =>{
        window.print()
    }

    return(
        <>
            <div className="container-fluid">

                <div className="row d-flex justify-content-end">
                    <div className="col-md-4">
                        <h4 className="text-white mt-2">Citas</h4>
                    </div>

                    <div className="col-md-4 text-center">
                        <Tooltip title="Imprimir">
                            <IconButton onClick={print} className="shadow bg-app" aria-label="Imprimir">
                                <PrintIcon className="text-white" />
                            </IconButton>
                        </Tooltip>
                    </div>

                    <div className="col-md-4 text-right">
                        <Tooltip title="Crear nuevo">
                            <Link
                                to={Urls.QuotesCreate}
                                className="btn btn-app shadow border border-white"
                            > <AddIcon/> Nuevo
                            </Link>
                        </Tooltip>
                    </div>
                </div>
            
                <div className="mt-5">
                    <Table/>
                </div>
    
            </div>
        </>
    )
}