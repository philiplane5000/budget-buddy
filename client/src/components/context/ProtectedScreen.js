import * as React from 'react'
import { Redirect } from 'react-router'

import { FirebaseAuthContext } from './FirebaseAuthProvider';

export default class ProtectedScreen extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <FirebaseAuthContext.Consumer>
                {
                    ({isUserSignedIn}) => {
                        if (isUserSignedIn) {
                            return children;
                        }
                        return <Redirect to="/login" />;
                    }
                }
            </FirebaseAuthContext.Consumer>
        );
    }
  };
