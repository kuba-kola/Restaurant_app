import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapped) => {
    return (props) => {
        return (
            <WithRestoService.Consumer>
                {
                    (RestoService) => {
                        return <Wrapped {...props} RestoService={RestoService}/>
                    }
                }
            </WithRestoService.Consumer>
        )
    }
};

export default WithRestoService;