import { StatusBar , ScrollView} from 'react-native';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'

import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading'

import { Home } from './src/Screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })



  return (
    
      <Background>
        <ScrollView>
        <StatusBar
          barStyle="light-content" 
          backgroundColor="transparent"
          translucent
          />
              
        {fontsLoaded ? <Home /> : <Loading />}

        </ScrollView>
      </Background>
    
  )

}
