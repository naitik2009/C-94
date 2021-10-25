const firebaseConfig = {
    apiKey: "AIzaSyDM2kdQLTEL5NcMkq8pBo3iwdJaglsXYYU",
    authDomain: "c-94-69827.firebaseapp.com",
    databaseURL: "https://c-94-69827-default-rtdb.firebaseio.com",
    projectId: "c-94-69827",
    storageBucket: "c-94-69827.appspot.com",
    messagingSenderId: "1098412460172",
    appId: "1:1098412460172:web:8ec6535edaabdc4f9b93a9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebaseConfig.database().ref("/").child(user_name).update({
    purpose : "adding user"    
    });
}