import React from 'react'
import Helmet from 'react-helmet'

export const PageError = () => {
    return (
        <>
        <Helmet>
            <title>404 error</title>
        </Helmet>
            <div className="container">
                <h1>No Page Found</h1>
            </div>
        </>
    )
}
