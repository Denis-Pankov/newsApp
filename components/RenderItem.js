import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RenderItem({ item }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("FullInfo", item)}
    >
      <Image
        style={styles.image}
        source={{
        uri: item.img,
        }}
      />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.anons}>{item.anons}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  item: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747',
  },
  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747',
  }
});
