import * as React from 'react'
import firebase from 'firebase'

const defaultFirebaseContext = {
    authStatusReported: false,
    isUserSignedIn: false
};

export const FirebaseAuthContext = React.createContext(defaultFirebaseContext)


export default class FirebaseAuthProvider extends React.Component {

    state = defaultFirebaseContext

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => this.setState({
            authStatusReported: true,
            isUserSignedIn: !!user
        }));
    }

    render() {
        const {children} = this.props
        const {authStatusReported, isUserSignedIn} = this.state
        return (
            <FirebaseAuthContext.Provider value={{isUserSignedIn, authStatusReported}}>
                {authStatusReported && children}
            </FirebaseAuthContext.Provider>
        )
    }
}
