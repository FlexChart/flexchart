window.addEventListener("load", ()=>{

    let signInPopUp = document.querySelector("#sign-in-popup");
    document.body.addEventListener("click", (e) => {
        if (e.target.closest("#sign-in-popup") != signInPopUp &&
            e.target != document.querySelector("#sign-up-button") &&
            e.target != document.querySelector("#sign-up-button-menu") &&
            e.target.tagName != "BUTTON" &&
            e.target.tagName != "A"
            ) {
                signInPopUp.style.display = "none";
    }
});

    document.querySelector("#sign-up-button").addEventListener("click",()=>{
        signInPopUp.style.display = (signInPopUp.style.display == "none") ? "flex" : "none"
    })
    document.querySelector("#sign-up-button-menu").addEventListener("click",()=>{
        signInPopUp.style.display = (signInPopUp.style.display == "none") ? "flex" : "none"
    })

})

let isSignedUp = false;

firebase.auth().onAuthStateChanged(user=>{
    if(user){
        isSignedUp = true; 
        document.querySelector("#firebaseui-auth-container").style.display = "none"
        document.querySelector("#sign-out-button").style.display = "block"
        window.displayName = user.displayName;
        window.email = user.email;
        window.emailVerified = user.emailVerified;
        window.photoURL = user.photoURL;
        window.uid = user.uid;
        window.phoneNumber = user.phoneNumber;
        window.providerData = user.providerData;
        document.querySelector("#menu-button").innerHTML = displayName
        document.querySelector("#sign-up-button").innerHTML = displayName
        document.querySelector("#sign-up-button-menu").innerHTML = displayName
    }else{
        document.querySelector("#firebaseui-auth-container").style.display = "block"
        document.querySelector("#sign-out-button").style.display = "none"
        document.querySelector("#menu-button").innerHTML = "menu"
        document.querySelector("#sign-up-button").innerHTML = "sign up"
        document.querySelector("#sign-up-button-menu").innerHTML = "sign up"
    }
})

