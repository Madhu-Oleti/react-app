import React, { useState } from "react";
import {
    StyleSheet,
    Appearance,
    Platform,
    SafeAreaView,
    ScrollView,
    FlatList,
    View,
    Text,
    Image,
} from "react-native";

import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";

export default function MenuScreen() {
    const [selectedItem, setSelectedItem] = useState(null);  // State for the selected item
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme);
    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

    const separatorComp = <View style={styles.separator} />;
    const footerComp = <Text style={styles.footerText}>End of Menu</Text>;

    // Function to handle item click and show amount
    const handleItemPress = (item) => {
        setSelectedItem(item);  // Set the selected item, showing its amount
    };

    return (
        <Container style={styles.container}>
            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={() => separatorComp}
                ListFooterComponent={footerComp}
                ListFooterComponentStyle={styles.footerComp}
                ListEmptyComponent={<Text>No Items</Text>}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text
                                style={[styles.menuItemTitle, styles.menuItemText]}
                                onPress={() => handleItemPress(item)} // Add onPress handler
                            >
                                {item.title}
                            </Text>
                            <Text style={styles.menuItemText}>{item.description}</Text>
                            
                            {/* Conditionally show the price or amount if the item is selected */}
                            {selectedItem?.id === item.id && (
                                <Text style={styles.priceText}>Price: ${item.price}</Text>  // Assuming you have a price property
                            )}
                        </View>
                        <Image
                            source={MENU_IMAGES[item.id - 1]}
                            style={styles.menuImage}
                        />
                    </View>
                )}
            />
        </Container>
    );
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
        },
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
        },
        separator: {
            height: 1,
            backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
            width: "50%",
            maxWidth: 3000,
            alignSelf: "center",
            marginBottom: 10,
        },
        footerComp: {
            alignSelf: "center",
            marginTop: 10,
        },
        footerText: {
            fontSize: 16,
            color: theme.text,
        },
        row: {
            flexDirection: "row",
            width: "100%",
            maxWidth: 600,
            height: 100,
            marginBottom: 10,
            borderStyle: "solid",
            borderColor: colorScheme === "dark" ? "papayawhip" : "#000",
            borderWidth: 1,
            borderRadius: 20,
            overflow: "hidden",
            alignSelf: "center",
            backgroundColor: theme.card,
        },
        menuTextRow: {
            width: "65%",
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1,
        },
        menuItemTitle: {
            fontSize: 18,
            textDecorationLine: 'underline',
            fontWeight: "bold",
            marginBottom: 5,
            color: theme.text,
        },
        menuItemText: {
            fontSize: 14,
            color: theme.textSecondary,
        },
        menuImage: {
            width: 100,
            height: 100,
            borderRadius: 10,
            margin: 10,
        },
        priceText: {
            fontSize: 16,
            fontWeight: "bold",
            color: theme.text,
            marginTop: 5,
        },
    });
}


// import React from "react";
// import {
//     StyleSheet,
//     Appearance,
//     Platform,
//     SafeAreaView,
//     ScrollView,
//     FlatList,
//     View,
//     Text,
//     Image,
// } from "react-native";

// import { Colors } from "@/constants/Colors";
// import { MENU_ITEMS } from "@/constants/MenuItems";
// import MENU_IMAGES from "@/constants/MenuImages";

// export default function MenuScreen() {
//     const colorScheme = Appearance.getColorScheme();

//     const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

//     const styles = createStyles(theme, colorScheme);

//     // Determine the container based on the platform
//     const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

//     // Separator Component
//     const separatorComp = <View style={styles.separator} />;

//     // Footer Component
//     const footerComp = <Text style={styles.footerText}>End of Menu</Text>;

//     return (
//         <Container style={styles.container}>
//             <FlatList
//                 data={MENU_ITEMS}
//                 keyExtractor={(item) => item.id.toString()}
//                 showsVerticalScrollIndicator={false}
//                 contentContainerStyle={styles.contentContainer}
//                 ItemSeparatorComponent={() => separatorComp}
//                 ListFooterComponent={footerComp}
//                 ListFooterComponentStyle={styles.footerComp}
//                 ListEmptyComponent={<Text>No Items</Text>}
//                 renderItem={({ item }) => (
//                     <View style={styles.row}>
//                         <View style={styles.menuTextRow}>
//                             <Text style={[styles.menuItemTitle, styles.menuItemText]}>
//                                 {item.title}
//                             </Text>
//                             <Text style={styles.menuItemText}>{item.description}</Text>
//                         </View>
//                         <Image
//                             source={MENU_IMAGES[item.id - 1]}
//                             style={styles.menuImage}
//                         />
//                     </View>
//                 )}
//             />
//         </Container>
//     );
// }

// function createStyles(theme, colorScheme) {
//     return StyleSheet.create({
//         container: {
//             flex: 1,
//             backgroundColor: theme.background,
//         },
//         contentContainer: {
//             paddingTop: 10,
//             paddingBottom: 20,
//             paddingHorizontal: 12,
//         },
//         separator: {
//             height: 1,
//             backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
//             width: "50%",
//             maxWidth: 3000,
//             alignSelf: "center",
//             marginBottom: 10,
//         },
//         footerComp: {
//             alignSelf: "center",
//             marginTop: 10,
//         },
//         footerText: {
//             fontSize: 16,
//             color: theme.text,
//         },
//         row: {
//             flexDirection: "row",
//             width: "100%",
//             maxWidth: 600,
//             height: 100,
//             marginBottom: 10,
//             borderStyle: "solid",
//             borderColor: colorScheme === "dark" ? "papayawhip" : "#000",
//             borderWidth: 1,
//             borderRadius: 20,
//             overflow: "hidden",
//             alignSelf: "center",
//             backgroundColor: theme.card,
//         },
//         menuTextRow: {
//             width: "65%",
//             paddingTop: 10,
//             paddingLeft: 10,
//             paddingRight: 5,
//             flexGrow: 1,
//         },
//         menuItemTitle: {
//             fontSize: 18,
//             textDecorationLine: 'underline',
//             fontWeight: "bold",
//             marginBottom: 5,
//             color: theme.text,
//         },
//         menuItemText: {
//             fontSize: 14,
//             color: theme.textSecondary,
//         },
//         menuImage: {
//             width: 100,
//             height: 100,
//             borderRadius: 10,
//             margin: 10,
//         },
//     });
// }


// // import { StyleSheet, Appearance, Platform, SafeAreaView,
// // ScrollView, FlatList, View, Text, Image } from "react-native";

// // import { Colors } from "@/constants/Colors";
// // import { MENU_ITEMS } from '@/constants/MenuItems'
// // import MENU_IMAGES from '@/constants/MenuImages'
// // import { setStatusBarHidden } from "expo-status-bar";
// // // import { ScrollView } from "react-native-gesture-handler";

// // export default function MenuScreen() {
// //     const colorScheme = Appearance.getColorScheme()

// //     const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

// //     const styles = createStyles(theme, colorScheme)

// //     const Container = Platform.OS === 'web' ? ScrollView :
// //     SafeAreaView;

// //     const separatorComp = <view style={styles.separator} />

// //     // const headerComp = <test>Top of List</test>
// //     const footerComp = <test>End of Menu</test>

// //     return (
// //         <Container>

// //             <FlatList
// //                 data={MENU_ITEMS}
// //                 keyExtractor={(item) => item.id.toString()}
// //                 showsVerticalScrollIndicator={false}
// //                 contentContainerStyle={styles.contentContainer}
// //                 ItemSeparatorComponent={separatorComp}
// //                 // ListHeaderComponent={headerComp}
// //                 ListFooterComponent={footerComp}
// //                 ListFooterComponentStyle={styles.footerComp}
// //                 ListEmptyComponent={<Text>No Items</Text>}
// //                 renderItem={({ item }) => (
// //                     <view style={styles.row}>
// //                         <view style={styles.menuTextRow}>
// //                             <text style={[styles.menuItemTitle,
// //                             styles.menuItemText]}>{item.title}</text>
// //                             <text style={styles.menuItemText}>
// //                                 {item.description}</text>
// //                         </view>
// //                         <Image
// //                             source={MENU_IMAGES[item.id - 1]}
// //                             style={styles.menuImage}
// //                         />
// //                     </view>
// //                 )}
// //             />

// //         </Container>
// //     )
// // }

// // function createStyles(theme, colorScheme) {
// //     return StyleSheet.create({
// //         contentContainer: {
// //             paddingTop: 10,
// //             paddingBottom: 20,
// //             paddingHorizontal: 12,
// //             backgroundColor: theme.background,
// //         },
// //         separator: {
// //             height: 1,
// //             backgroundColor: colorScheme === 'dark' ? 'papayawrip'
// //             : "#000",
// //             width: '50%',
// //             maxWidth: 3000,
// //             marginHorizontal: 'auto',
// //             marginBottom: 10,
// //         },
// //         footerComp: {
// //             marginHorizontal: 'auto',
// //         },
// //         row: {
// //             flexDirection: 'row',
// //             width: '100%',
// //             maxWidth: 600,
// //             height: 100,
// //             marginBottom: 10,
// //             borderStyle: 'solid',
// //             borderColor: colorScheme === 'dark' ? 'papayawhip' : 
// //             '#000',
// //             borderWidth: 1,
// //             borderRadius: 20,
// //             overflow: 'hidden',
// //             marginHorizontal: 'auto',
// //         },
// //         menuTextRow: {
// //             width: '65%',
// //             paddingTop: 10,
// //             paddingLeft: 10,
// //             paddingRight: 5,
// //             flexGrow: 1,
// //         }
// //     })
// // }