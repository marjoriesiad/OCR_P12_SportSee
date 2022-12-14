import React from "react";
import { Link } from "react-router-dom";

/**
 * @component - shows a 404 error page
 * @returns Error page
 */

const Error = () => {
    return (
        <div className="error">
            <h1>404 - Cette page n'existe pas</h1>
            <Link to="/">Retourner à l'accueil</Link>
        </div>
    );
};

export default Error;
