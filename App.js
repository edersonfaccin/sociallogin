import React from 'react'
import { StyleSheet, ScrollView, View, Image } from 'react-native'
import { LoginManager, AccessToken } from 'react-native-fbsdk'

import ButtonFb from './src/components/ButtonLoginFacebook'
import imgLogo from './assets/logo.png'

const App = () => {

  const loginFb = () => {
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled")
          //DO SOMETHING
        } else {
          console.log("Login success with permissions: " + result.grantedPermissions.toString())
          AccessToken.getCurrentAccessToken().then((data) => {
            const { accessToken } = data

            initUser(accessToken)
          })
        }
      },
      function(error) {
        console.log("Login fail with error: " + error)
      }
    )
  }

  const initUser = (token) => {
    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      user.id = json.id
      user.email = json.email
      //user.name = json.name
      //user.user_friends = json.friends
      //user.username = json.name
      //user.loading = false
      //user.loggedIn = true
      //user.avatar = setAvatar(json.id)      
    })
    .catch(() => {
      console.log('ERROR GETTING DATA FROM FACEBOOK')
    })
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
      <View style={styles.body}>

        <Image source={imgLogo} style={styles.logo}/>
      
        <View style={styles.buttonView}>
          <ButtonFb title='Login com Facebook' acao={loginFb}/>
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F0F8FF'
  },
  body: {
    backgroundColor: '#F0F8FF',
    flex: 1,
    alignItems: 'center'
  },
  buttonView: {
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 140,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  }
})

export default App