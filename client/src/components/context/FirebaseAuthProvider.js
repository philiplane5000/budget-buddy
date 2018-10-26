import * as React from 'react'
import firebase from 'firebase'

const defaultFirebaseContext = {
    authStatusReported: false,
    isUserSignedIn: false,
    googleUser: {}
};

export const FirebaseAuthContext = React.createContext(defaultFirebaseContext)


export default class FirebaseAuthProvider extends React.Component {

    state = defaultFirebaseContext

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => this.setState({
            authStatusReported: true,
            isUserSignedIn: !!user,
            googleUser: user
        }));
    }

    render() {
        const {authStatusReported, isUserSignedIn, googleUser} = this.state
        return (
            <FirebaseAuthContext.Provider value={{isUserSignedIn, authStatusReported, googleUser}}>
                {this.props.children}
            </FirebaseAuthContext.Provider>
        )
    }
}
