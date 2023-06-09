import React from "react";
import { Button } from "react-native";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { DATA } from "../data";
import { Post } from "../components/Post";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const MainScreen = ({navigation}) => {
    const openPostHandler = post => {
        navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})

}

    return (
      <View style={styles.wrapper}>
        <FlatList
          data={DATA}
          keyExtractor={(post) => post.id.toString()}
          renderItem={({ item }) => <Post post={item} onOpen={openPostHandler}/>}
        />
      </View>
    );
}


MainScreen.navigationOptions = {
  headerTitle: "Мой блог",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Take photo"
        iconName="ios-menu"
        onPress={() => console.log("dasd")}
      />
    </HeaderButtons>
  ),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Take photo"
        iconName="ios-camera"
        onPress={() => console.log("dasd")}
      />
    </HeaderButtons>
  )
  }

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})