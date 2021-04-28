import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  View,
  Button,
  StyleSheet,
  Platform,
  TextInput,
  StatusBar,
  Text,
} from "react-native";
import { useState } from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";

export default function App() {
  const [search, setSearch] = useState();
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View style={styles.locationBar}>
          <Image
            style={styles.logo}
            source={require("./assets/homeIcon.png")}
          ></Image>
          <View style={styles.locationWrapper}>
            <Text style={{ fontWeight: "bold" }}>Home</Text>
            <Text>House 10,sector 35,chandigarh</Text>
          </View>
          <Image
            style={styles.profile}
            source={require("./assets/profile.png")}
          ></Image>
        </View>
        <View style={styles.searchWrapper}>
          <Image
            style={styles.searchLogo}
            source={require("./assets/search.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Restaurant name,cuisine,or a dish"
            onChangeText={() => setSearch()}
          ></TextInput>
        </View>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <ScrollView
            horizontal={true}
            style={styles.horizontalHeadings}
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity>
              <Text
                style={{
                  fontWeight: "bold",
                  padding: 10,
                  color: "red",
                  fontSize: 15,
                }}
              >
                food
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.headings}>market</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.headings}>food@work</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.headings}>self pickup</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.headings}>snacks</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.headings}>desert</Text>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.historyWrapper1}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Order again
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "red" }}>view history</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.historyWrapper2}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.historyImages}
            >
              <View style={styles.previousOrders}>
                <Image
                  style={{ height: 50, width: 50, borderRadius: 2 }}
                  source={require("./assets/pizza.jpg")}
                />
                <View style={{ padding: 5 }}>
                  <Text style={{ fontWeight: "bold" }}>Bonobos Foodora</Text>
                  <Text>30 mins</Text>
                  <Text style={{ color: "blue" }}>40% off</Text>
                </View>
              </View>
              <View style={styles.previousOrders}>
                <Image
                  style={{ height: 50, width: 50, borderRadius: 2 }}
                  source={require("./assets/chicken_masala.jpg")}
                />
                <View style={{ padding: 5 }}>
                  <Text style={{ fontWeight: "bold" }}>Bonobos Foodora</Text>
                  <Text>30 mins</Text>
                  <Text style={{ color: "blue" }}>40% off</Text>
                </View>
              </View>
            </ScrollView>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.historyImages}
            >
              <View style={styles.previousOrders}>
                <Image
                  style={{ height: 50, width: 50, borderRadius: 2 }}
                  source={require("./assets/dal_makhani.jpg")}
                />
                <View style={{ padding: 5 }}>
                  <Text style={{ fontWeight: "bold" }}>Bonobos Foodora</Text>
                  <Text>30-35 mins</Text>
                  <Text style={{ color: "blue" }}>25% off</Text>
                </View>
              </View>
              <View style={styles.previousOrders}>
                <Image
                  style={{ height: 50, width: 50, borderRadius: 2 }}
                  source={require("./assets/noodles.jpg")}
                />
                <View
                  style={{
                    padding: 5,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>Bonobos Foodora</Text>
                  <Text>30-35 mins</Text>
                  <Text style={{ color: "blue" }}>25% off</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.mostOrdered}>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Lockdown Cravings
              </Text>
              <Text>Most ordered in your city</Text>
            </View>
            <ScrollView
              style={{}}
              horizontal={true}
              nestedScrollEnabled={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.bestDishes}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ height: 100, width: 100 }}
                    source={require("./assets/Aloo-Paratha.jpg")}
                  />
                  <Text>Aloo Prantha</Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ height: 100, width: 100 }}
                    source={require("./assets/dossa.jpg")}
                  />
                  <Text>Dossa</Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ height: 100, width: 100 }}
                    source={require("./assets/ice-cream.jpg")}
                  />
                  <Text>Ice Creams</Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ height: 100, width: 100 }}
                    source={require("./assets/burger.jpg")}
                  />
                  <Text>Burgers</Text>
                </View>
              </View>
            </ScrollView>
            <ScrollView
              style={{}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.bestDishes}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ height: 100, width: 100 }}
                    source={require("./assets/shushi.jpg")}
                  />
                  <Text>Shushi</Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ height: 100, width: 100 }}
                    source={require("./assets/donut.jpg")}
                  />
                  <Text>Donut</Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ height: 100, width: 100 }}
                    source={require("./assets/chines.jpg")}
                  />
                  <Text>Chinese</Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ height: 100, width: 100 }}
                    source={require("./assets/pizza.jpg")}
                  />
                  <Text>Pizza</Text>
                </View>
              </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
              <Button width="100%" title="dont"></Button>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  locationBar: {
    backgroundColor: "white",
    flexDirection: "row",
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "10%",
  },
  logo: {
    height: 40,
    width: 40,
  },
  locationWrapper: {
    margin: 10,
    padding: 20,
  },
  profile: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  searchWrapper: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    top: "15%",
    backgroundColor: "white",
    width: "90%",
    height: 40,
    borderWidth: 0.1,
    borderRadius: 2,
    left: 10,
  },
  input: {
    position: "relative",
    flexWrap: "wrap",
    backgroundColor: "white",
    right: "70%",
  },
  searchLogo: {
    position: "relative",
    right: "80%",
    height: 25,
    width: 25,
  },
  horizontalHeadings: {
    position: "absolute",
    top: "20%",
    flexDirection: "row",
    padding: 10,
    margin: 5,
  },
  headings: {
    fontWeight: "bold",
    padding: 10,
    fontSize: 15,
  },
  historyWrapper1: {
    position: "absolute",
    top: "25%",
    width: "100%",
    padding: 10,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  historyWrapper2: {
    position: "absolute",
    width: "100%",
    top: "30%",
    padding: 5,
  },
  historyImages: {
    flexDirection: "row",
    padding: 5,
    flex: 1,
  },
  previousOrders: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  mostOrdered: {
    position: "absolute",
    top: "55%",
    padding: 10,
  },
  bestDishes: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    position: "relative",
  },
});
