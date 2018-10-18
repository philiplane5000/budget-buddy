// @flow
import * as React from 'react';

import firebase from 'firebase';

const defaultFirebaseContext = {
    authStatusReported: false,
    isUserSignedIn: false
};

export const FirebaseAuthContext = React.createContext(defaultFirebaseContext);

type FireAuthProviderProps = {
    children: React.Node
};

type FireAuthProviderState = {
    authStatusReported: boolean,
    isUserSignedIn: boolean
};

export default class FirebaseAuthProvider extends React.Component<FireAuthProviderProps, FireAuthProviderState> {

    state = defaultFirebaseContext;

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => this.setState({
            authStatusReported: true,
            isUserSignedIn: !!user
        }));
    }

    render(): React.Node {
        const {children} = this.props;
        const {authStatusReported, isUserSignedIn} = this.state;
        return (
            <FirebaseAuthContext.Provider value={{isUserSignedIn, authStatusReported}}>
                {authStatusReported && children}
            </FirebaseAuthContext.Provider>
        );
    }
}