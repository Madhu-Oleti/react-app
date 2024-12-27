import React from "react";
import { View, Text, StyleSheet, Image, Pressable, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For Coffee logo icon

const ContactUsScreen = () => {
  const phoneNumber = "+919652750555"; // Ensure no spaces or special characters in the phone number
  const email = "contact@madhuscoffee.com"; // Replace with your email

  // Handle phone call
  const handlePhonePress = () => {
    Linking.openURL(`tel:${phoneNumber}`).catch((err) => console.error("Failed to make a call:", err));
  };

  // Handle SMS
  const handleMessagePress = () => {
    Linking.openURL(`sms:${phoneNumber}`).catch((err) => console.error("Failed to send SMS:", err));
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/coffee-logo.webp")} // Replace with actual logo image
        style={styles.logo}
      />
      <Text style={styles.title}>Contact Us</Text>

      {/* Coffee Shop Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Coffee Shop</Text>
        <Text style={styles.infoText}>Address: Hyderabad, TG, 500018</Text>

        {/* Phone number with label */}
        <Pressable onPress={handlePhonePress} style={styles.contactItem}>
          <Ionicons name="ios-call" size={24} color="black" />
          <Text style={styles.contactText}>Phone: {phoneNumber}</Text>
        </Pressable>

        {/* Message option */}
        <Pressable onPress={handleMessagePress} style={styles.contactItem}>
          <Text style={styles.messageLink}>Click Here to Message (OR) Call!</Text>
        </Pressable>

        <Text style={styles.infoText}>Hours: Open 6am to 4pm daily.</Text>

        {/* Email */}
        <Text style={styles.infoText}>Email: {email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoContainer: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Light background for the info section
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  contactText: {
    fontSize: 18,
    marginLeft: 10,
  },
  messageLink: {
    color: "skyblue",
    textDecorationLine: "underline",
    fontSize: 18,
    textAlign: "center",
  },
});

export default ContactUsScreen;


// import React from "react";
// import { View, Text, StyleSheet, Image, Pressable, Linking } from "react-native";
// import { Ionicons } from "@expo/vector-icons"; // For Coffee logo icon

// const ContactUsScreen = () => {
//   const phoneNumber = "+919652750555"; // Replace with your actual phone number
//   const email = "contact@madhuscoffee.com"; // Replace with your email

//   const handlePhonePress = () => {
//     Linking.openURL(`sms:${phoneNumber}`).catch((err) => console.error("Failed to send SMS:", err));
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require("@/assets/images/coffee-logo.webp")} // Replace with actual logo image
//         style={styles.logo}
//       />
//       <Text style={styles.title}>Contact Us</Text>

//       {/* Coffee Shop Info */}
//       <View style={styles.infoContainer}>
//         <Text style={styles.infoText}>Coffee Shop</Text>
//         <Text style={styles.infoText}>Address: Hyderabad, TG, 500018</Text>

//         {/* Phone number with label */}
//         <Pressable onPress={handlePhonePress} style={styles.contactItem}>
//           <Ionicons name="ios-call" size={24} color="black" />
//           <Text style={styles.contactText}>Phone: {phoneNumber}</Text>
//         </Pressable>

//         {/* Message option */}
//         <Pressable onPress={handlePhonePress} style={styles.contactItem}>
//           <Text style={styles.messageLink}>Click Here to Message!</Text>
//         </Pressable>

//         <Text style={styles.infoText}>Hours: Open 6am to 4pm daily.</Text>

//         {/* Email */}
//         <Text style={styles.infoText}>Email: {email}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   infoContainer: {
//     marginTop: 20,
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.1)", // Light background for the info section
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   infoText: {
//     fontSize: 18,
//     marginBottom: 10,
//     textAlign: "center",
//   },
//   contactItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 15,
//   },
//   contactText: {
//     fontSize: 18,
//     marginLeft: 10,
//   },
//   messageLink: {
//     color: "skyblue",
//     textDecorationLine: "underline",
//     fontSize: 18,
//     textAlign: "center",
//   },
// });

// export default ContactUsScreen;
