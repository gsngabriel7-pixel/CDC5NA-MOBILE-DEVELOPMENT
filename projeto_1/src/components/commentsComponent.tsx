import { CommentsType } from "@/types/comments.type";
import { StyleSheet, Text, View } from "react-native";

export const CommentsComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}></View>
      <View style={styles.commentContainer}>
        <Text style={styles.name}>Nome: {item.name}</Text>
        <Text>{item.body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 3,
  },
  image: {},
  commentContainer: {
    width: "100%",
  },
  name: {
    fontWeight: "600",
    marginBottom: 10,
  },
});
