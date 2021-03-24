window.addEventListener("load", ()=>{
    document.querySelector("#sign-up-button").addEventListener("click",()=>{
        document.querySelector("#sign-in-popup").style.display = (document.querySelector("#sign-in-popup").style.display == "none") ? "flex" : "none"
    })
    document.querySelector("#sign-up-button-menu").addEventListener("click",()=>{
        document.querySelector("#sign-in-popup").style.display = (document.querySelector("#sign-in-popup").style.display == "none") ? "flex" : "none"
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

