<template>
  <div class="social-buttons-container">
    <button @click="signInWithGoogle" class="google">
      <i class="fab fa-google"></i>Sign In with Google
    </button>
    <button @click="signInWithFacebook" class="facebook">
      <i class="fab fa-facebook-f"></i>Sign In with Facebook
    </button>
  </div>
</template>

<script>
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { useRouter } from "vue-router";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/auth";
import toastr from "toastr";

export default {
  name: "SocialLogin",
  data() {
    return {
      router: useRouter(),
    };
  },
  methods: {
    async signInWithGoogle() {
      const googleProvider = new firebase.auth.GoogleAuthProvider();

      await firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then(async (user_data) => {
          const docRef = doc(getFirestore(), "users", user_data.user.uid);
          const docSnap = await getDoc(docRef);

          let userData = {
            fullName: user_data.user.displayName,
            email: user_data.user.email,
            id: user_data.user.uid,
            photoURL: user_data.user.photoURL,
          };

          if (docSnap.exists()) {
            toastr["success"](
              `Welcome ${user_data.user.displayName}`,
              "Successful"
            );
            setTimeout(() => {
              this.router.replace("/chat");
            }, 1000);
          } else {
            await setDoc(
              doc(getFirestore(), "users", user_data.user.uid),
              userData
            )
              .then(() => {
                toastr["success"](
                  `Welcome ${user_data.user.displayName}`,
                  "Successful"
                );
                setTimeout(() => {
                  this.router.replace("/messeges");
                }, 1000);
              })
              .catch((error) => {
                toastr["error"](error, "Error");
              });
          }
        });
    },
    async signInWithFacebook() {
      const facebookProvider = new firebase.auth.FacebookAuthProvider();

      await firebase
        .auth()
        .signInWithPopup(facebookProvider)
        .then(async (user_data) => {
          const docRef = doc(getFirestore(), "users", user_data.user.uid);
          const docSnap = await getDoc(docRef);

          let userData = {
            fullName: user_data.user.displayName,
            email: user_data.user.email,
            id: user_data.user.uid,
            photoURL: user_data.user.photoURL,
          };

          if (docSnap.exists()) {
            toastr["success"](
              `Welcome ${user_data.user.displayName}`,
              "Successful"
            );
            setTimeout(() => {
              this.router.replace("/chat");
            }, 1000);
          } else {
            await setDoc(
              doc(getFirestore(), "users", user_data.user.uid),
              userData
            )
              .then(() => {
                toastr["success"](
                  `Welcome ${user_data.user.displayName}`,
                  "Successful"
                );
                setTimeout(() => {
                  this.router.replace("/chat");
                }, 1000);
              })
              .catch((error) => {
                toastr["error"](error, "Error");
              });
          }
        });
    },
  },
};
</script>

<style lang="scss" src="../styles/SocialLogin.scss"></style>
