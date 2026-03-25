import { PostType } from "@/types/post.type";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

export const PostCard = () => {
  const router = useRouter();

  return (
    <Pressable
      style={styles.container}
      onPress={() => router.push(`/post/${item.id}`)}
    >
      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#ccc",
    marginBottom: 10,
    height: 60,
    padding: 6,
    borderRadius: 10,
  },
  title: {
    fontWeight: "400",
  },
});
