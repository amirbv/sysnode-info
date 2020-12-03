import firebase from 'firebase';
import jwtDecode from "jwt-decode";
import {getToken, setToken} from "./auth-token";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
};

/**
 * Class that manages firebase
 * @class
 */
export default class Firebase {

  /**
   * To initialize the firebase app and the self authentication
   * @constructor
   */
  constructor() {
    firebase.initializeApp(config);
    this.firebaseApp = firebase;
    this.auth = firebase.auth();
  }

  /**
   * function to use the device language
   * @function
   */
  useDeviceLanguage = () => this.auth.useDeviceLanguage();

  /**
   * function to login the user with email and password
   * @function
   * @param {Object} userData the email and password of the user to login 
   */
  loginWithEmailAndPassword = async ({email, password}) => await this.auth.signInWithEmailAndPassword(email, password).catch(err => {
    throw err
  });

  /**
   * function to create a new user with email and password
   * @function
   * @param {Object} userData the email and password of the user to signup 
   */
  register = async ({email, password}) => await this.auth.createUserWithEmailAndPassword(email, password).catch(err => {
    throw err
  });

  /**
   * function to logout / signout a user from firebase
   * @function
   */
  signOut = async () => await this.auth.signOut();

  /**
   * function to send an email to reset the password
   * @function
   * @param {string} email email of the user
   */
  passwordReset = async (email) => await this.auth.sendPasswordResetEmail(email, {
    // url: 'http://198.211.117.144/'
  }).catch(err => {
    throw err
  });

  /**
   * function to create a new recaptcha verifier
   * @function
   * @param {string} container id of the html container for the recaptcha (must be empty)
   * @param {*} params params of the recaptcha
   * @param {*} app firebase app
   */
  newRecaptchaVerifier = (container, params, app) => new this.firebaseApp.auth.RecaptchaVerifier(container, params, app);

  /**
   * function that creates a new phone provider
   * @function
   */
  newPhoneAuthProvider = () => new this.firebaseApp.auth.PhoneAuthProvider();

  /**
   * function that returns the phone number of the current user
   * @function
   */
  getPhoneAuthProviderID = () => this.auth.currentUser.phoneNumber;

  /**
   * function that removes the phone number of the current user
   * @function
   */
  removePhoneNumber = () => this.auth.currentUser.unlink(this.firebaseApp.auth.PhoneAuthProvider.PROVIDER_ID)

  /**
   * function to send an sms to verificate
   * @function
   * @param {string} phoneNumber the phone number to send the sms
   * @param {*} appVerifier the recaptcha verifier
   */
  sendSMSToPhone = async (phoneNumber, appVerifier) => {
    const provider = this.newPhoneAuthProvider();
    return await provider.verifyPhoneNumber(phoneNumber, appVerifier).catch(err => {
      throw err
    });
  };

  /**
   * function to login using the phone number
   * @function
   * @param {string} phoneNumber the phone number of the user
   * @param {*} appVerifier the recaptcha verifier
   */
  loginWithPhone = async (phoneNumber, appVerifier) => await this.auth.signInWithPhoneNumber(`${phoneNumber}`, appVerifier);

  /**
   * function to login with the user credentials
   * @function 
   * @param {*} credentials the credentials of the user
   */
  loginWithCredentials = async (credentials) => await firebase.auth().signInWithCredential(credentials)

  /**
   * function to verify the phone code sent to the phone number
   * @param {*} verificationId 
   * @param {string} smsCode the code sent to the user via sms
   */
  verifyPhoneCode = (verificationId, smsCode) => this.firebaseApp.auth.PhoneAuthProvider.credential(verificationId, smsCode);

  /**
   * function to update the phone number
   * @function
   * @param {*} credentials the new data used to update the phone number
   */
  updatePhoneCredentials = (credentials) => new Promise(async (resolve, reject) => await this.auth.currentUser.updatePhoneNumber(credentials).then((res => resolve(res))).catch(err => reject(err)));

  /**
   * function to update the password of the user
   * @function  
   * @param {string} oldPwd old password of the user
   * @param {string} password new password of the user
   */
  changePassword = async (oldPwd, password) => {
    const currentUser = this.auth.currentUser;

    if (currentUser) {
      const credentials = this.firebaseApp.auth.EmailAuthProvider.credential(currentUser.email, oldPwd)

      return new Promise(async (resolve, reject) => {
        currentUser.reauthenticateWithCredential(credentials).then(async () => {
          await currentUser.updatePassword(password).catch(err => {
            reject(err)
          })
          resolve('pwd Changed')
        }).catch(err => {
          reject(err)
        })
      })
    }
  }

  /**
   * function to refresh the authorization token of the user
   * @function
   */
  refreshToken = async () => {
    return new Promise(async (resolve, reject) => {
        if (this.auth.currentUser !== null) {
          const unsubscribe = this.auth
            .onIdTokenChanged(async user => {
              unsubscribe()
              const refreshedToken = await user
                .getIdToken(true)
                .catch(err => console.error(err))
              resolve(refreshedToken)
            }, reject)
        }
      }
    )
  }

  /**
   * function that generates a link to verificate the email
   * @function
   */
  generateLinkVerification = async () => await this.auth.currentUser.sendEmailVerification(
    //   {
    //   url: 'https://firebase.google.com/docs/web/setup',
    //   handleCodeInApp: true
    //   }
  ).catch(err => {
    throw err
  })

  /**
   * function used to verificate the time of the auth token and refresh it if neccesary
   * @function
   */
  refreshInRequest = async () => {
    const token = getToken();
    if (!token) {
      return null
    } else {
      const decoded = jwtDecode(token.decryptedToken);
      const dateNow = new Date().getTime();
      if (Math.floor(dateNow / 1000) > decoded.exp) {
        // console.log('token refrescado')
        const newTokenRefreshed = await this.refreshToken().catch(err => {
          throw err
        })
        setToken(newTokenRefreshed);
      }
    }
  }
}
