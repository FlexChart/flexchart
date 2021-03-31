let unsubscribeProjectsList;
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log("signed in")
        window.displayName = user.displayName;
        let greetTitle = document.getElementById("greet-title");
        greetTitle.innerHTML = "Hello, " + window.displayName;
        window.email = user.email;
        window.emailVerified = user.emailVerified;
        window.photoURL = user.photoURL;
        window.uid = user.uid;
        window.phoneNumber = user.phoneNumber;
        window.providerData = user.providerData;
        unsubscribeProjectsList = firestore.collection("charts").where("owner", "==", uid).onSnapshot(updateProjectsList)
    } else {
        unsubscribeProjectsList?.()
        window.displayName = undefined;
        window.email = undefined;
        window.emailVerified = undefined;
        window.photoURL = undefined;
        window.uid = undefined;
        window.phoneNumber = undefined;
        window.providerData = undefined;
        window.location.replace(window.location.origin);
    }
})




