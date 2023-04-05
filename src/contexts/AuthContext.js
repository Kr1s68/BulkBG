import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { error } from "jquery";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password, name) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then(function (result) {
        return result.user.updateProfile({
          displayName: name,
          photoURL:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fronaldmottram.co.nz%2Fwp-content%2Fuploads%2F2019%2F01%2Fdefault-user-icon-8-300x300.jpg&f=1&nofb=1&ipt=94f066ac11ff044efa480ed76c7fc993f97ba6842096fbfbf3a11b3ca52aa409&ipo=images",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function updateProfilePicture(nextPicture) {
    return auth.currentUser.updateProfile({
      photoURL: nextPicture,
    });
  }

  function updatePassword(email, newPassword) {
    if (email === auth.currentUser.email) {
      auth.currentUser
        .updatePassword(newPassword)
        .then(() => {
          console.log("Update Successful");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Incorrect email");
    }
  }

  //Finish profile update system

  function updateProfileName(newName) {
    return auth.currentUser.updateProfile({
      displayName: newName,
    });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const obj = { ...user };
        fetch(`https://pc-builder-api.herokuapp.com/api/data/checkAdmin`, {
          body: JSON.stringify({ email: user.email }),
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            setLoading(false);
            response
              .json()
              .then((body) => {
                setCurrentUser({ ...obj._delegate, isAdmin: body.isAdmin });
              })
              .catch((e) => {
                setCurrentUser({ ...obj._delegate, isAdmin: false });
              });
          })
          .catch((e) => {
            setLoading(false);
            setCurrentUser({ ...obj._delegate, isAdmin: false });
          });
      } else {
        setCurrentUser(user);

        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    updateProfilePicture,
    updateProfileName,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
