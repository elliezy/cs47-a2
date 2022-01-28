import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, SafeAreaView, Dimensions, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from "./assets/Themes";
a
const NavigationBar = () => {
  return (
    <View style={styles.navBar}>
      <Image source={require("./assets/Icons/menu_light.png")} style={styles.icon}/>
      <Text style={styles.appText}>ensom</Text>
      <Image source={require("./assets/Icons/sun.png")} style={styles.icon}/>
    </View>
  )
} 

const MiddleItems = () => {
  return (
    <View style={styles.middle}>
      <View style={{ flex:2, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground source={require("./assets/Profiles/mtl.jpg")} 
          style={styles.profPic}
          imageStyle = {{borderRadius: 18, maxWidth: 500, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.picTopText}>MTL</Text>
          <Text style={styles.picBotText}>2 miles away</Text>
        </ImageBackground>
      </View>
      <View style={styles.audio}>
        <Text style={styles.audioText}>My hottest take</Text>
        <View style={styles.audioFeature}>
          <Image source={require("./assets/Icons/player_light.png")} style={styles.player}/>
          <Image source={require("./assets/Icons/audio_waveform_light.png")} style={styles.waveform}/>
        </View>
      </View>
    </View>
  )
}

const BottomBar = () => {
  return (
    <View style={styles.bottomBar}>
      <View style={styles.actionItem}>
        <Image source={require("./assets/Icons/discover_light.png")} style={styles.actionImage}/>
        <Text style={styles.actionText}>Discover</Text>
      </View>
      <View style={styles.actionItem}>
        <Image source={require("./assets/Icons/heart_light.png")} style={styles.actionImage}/>
        <Text style={styles.actionText}>Matches</Text>
      </View>
      <View style={styles.actionItem}>
        <Image source={require("./assets/Icons/messages_light.png")} style={styles.actionImage}/>
        <Text style={styles.actionText}>DMs</Text>
      </View>
    </View>
  )
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    
    <View style={styles.container}>
      <SafeAreaView style={styles.androidSafeArea}></SafeAreaView>
      <SafeAreaView style={{ flex: 0, backgroundColor: Themes.light.navigation}} />

      <NavigationBar/>
      <MiddleItems/>
      <BottomBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 0,
    backgroundColor: Themes.light.bg,
  },
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    alignItems: 'center',
    justifyContent: 'center',
    display: "flex",
  },
  navBar: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  icon: {
    flex: 1,
    width: "10%",
    height: "50%",
    resizeMode: 'contain',
  },
  appText: {
    textAlign: 'center',
    flex: 2,
    fontFamily: 'Sydney-Bold',
    fontSize: Platform.isPad ? 48 : 32,
  },
  middle: {
    flex: 6, 
    backgroundColor: Themes.light.bg,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 120,
  },
  profPic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.85,
    maxWidth: 500,
    resizeMode: "contain",
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    marginBottom: "5%",
  },
  picTopText: {
    position: "absolute",
    top: "2%",
    left: "3%",
    fontFamily: 'Sydney',
    fontSize: Platform.isPad ? 42 : 32,
    color: Themes.light.textSecondary,
  },
  picBotText: {
    position: "absolute",
    bottom: "3%",
    left: "3%",
    fontFamily: 'Sydney',
    fontSize: Platform.isPad ? 24 : 18,
    color: Themes.light.textSecondary,
  },
  audio: {
    flex: 1,
    width: Dimensions.get('window').width * 0.85,
    maxWidth: 500,
    display: "flex",
    justifyContent: 'center',
    backgroundColor: Themes.light.bgSecondary,
    borderRadius: 30,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
  },
  audioText: {
    flex: 1,
    fontFamily: 'Sydney',
    fontSize: Platform.isPad ? 36 : 28,
    color: Themes.light.text,
    marginTop: "5%",
    marginLeft: "5%"
  },
  audioFeature: {
    flex: 3,
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  player: {
    flex: 1,
    resizeMode: 'contain',
    marginLeft: "3%",
    marginBottom: "8%"
  },
  waveform: {
    flex: 4,
    resizeMode: 'contain',
    marginLeft: "2%",
    marginRight: "3%",
    marginBottom: "8%"
  },
  bottomBar: {
    flex: 1,
    backgroundColor: Themes.light.navigation,
    display: "flex",
    width: "100%",
    paddingLeft: "6%",
    paddingRight: "6%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
    
  },
  actionItem: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    width: "18%",
    resizeMode: "contain",
  },
  actionImage: {
    width: "60%",
    height: "50%",
    resizeMode: 'contain',
  },
  actionText: {
    marginTop: "2%",
    fontFamily: 'Sydney',
    fontSize: Platform.isPad ? 24 : 18,
    color: Themes.light.textSecondary,
  }
});