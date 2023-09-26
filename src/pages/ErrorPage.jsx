import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();

    return (
        <div>
            <h2> { error.status } </h2>
            <h2>
                { 
                    error.status === 404 ?
                    'The page you\'re looking for doesn\'t exist.'
                    :
                    'Something went wrong...'
                }
            </h2>
        </div>
    );
}

export default ErrorPage;
