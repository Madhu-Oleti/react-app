import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { Link } from 'expo-router';

import icedCoffeeImg from "@/assets/images/iced-coffee(1).png";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImg}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>Madhu's Coffee Shop</Text>

        <Link href="/menu" style={{ marginHorizontal: 'auto' }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Our Menu</Text>
          </Pressable>
        </Link>

        <Link href="/ContactUsScreen" style={{ marginHorizontal: 'auto' }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '50%',
    height: '50%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },
  button: {
    height: 60,
    width: 150,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 6,
    marginBottom: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
});


// import React from 'react';
// import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
// import { Link } from 'expo-router';

// import icedCoffeeImg from "@/assets/images/iced-coffee(1).png"

// const app = () => {
//   return (
//     <View style={styles.container}>
//       <ImageBackground
//       source={icedCoffeeImg}
//       resizeMode="cover"
//       style={styles.image}
//     >
//       <Text style={styles.title}>Madhu's Coffee Shop</Text>

//       <Link href="/menu" style={{marginHorizontal: 'auto'}} asChild>
//         <Pressable style={styles.button}>
//           <Text style={styles.buttonText}>Our Menu</Text>
//         </Pressable>
//       </Link>

//       <Link href="/contact" style={{marginHorizontal: 'auto'}} asChild>
//         <Pressable style={styles.button}>
//           <Text style={styles.buttonText}>Contact Us</Text>
//         </Pressable>
//       </Link>

//       </ImageBackground>
//     </View>
//   )
// }

// export default app;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   image: {
//     width: '50%',
//     height: '50%',
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
//   title: {
//     color: 'white',
//     fontSize: 32,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     marginBottom: 120,
//   },
//   Link: {
//     color: 'white',
//     fontSize: 42,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     textDecorationLine: 'underline',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     padding: 4,
//   },
//   button: {
//     height: 60,
//     width: 150,
//     borderRadius: 20,
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0,0,0,0.75)',
//     padding: 6,
//     marginBottom: 50,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     padding: 4,
//   }
// })