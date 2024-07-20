import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import "./Private.css"

function Private () {
    const handleSignOut = () => {
        signOut(auth)
        .then(() => alert("signed out Successfullly!"))
        .catch(error => {
            alert(error.message);
        })
    }

    return (
        <div className="private-container">
            <header className="private-header">
                <h1>Welcome to the dashboard</h1>
            </header>
            
            <main className="private-content">
                <h2>Your Profile</h2>
                <p>Welcome to the private dashboard Here you can manage your settings and preferences.</p>
            </main>

            <footer className="private-footer">
                <button onClick={handleSignOut}>SignOut</button>
            </footer>
        </div>
    )
}

export default Private