// higher order component - a component (HOC) that renders another component
// to reuse code
// render hijacking
// prop manipulation
// abstart state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <p>Testing HOC {props.info}</p>
    </div>
);

// returns higher order component
// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             { props.isAdmin  && <p> This is a private info {props.info}</p> }
//             <WrappedComponent {...props}/> 
//         </div> 
//     );
// };

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>

           {!props.isAuthenticated ? 
            ( <p> User is not authenticated... </p>) : (<WrappedComponent {...props}/> )}

        </div>
    );
};

//const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='These details are secured..'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='These details are secured..'/>, document.getElementById('app'))