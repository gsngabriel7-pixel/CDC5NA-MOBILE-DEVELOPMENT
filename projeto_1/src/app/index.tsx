import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";
import { getPosts } from "@/services/posts.service";
import { PostType } from "@/types/post.type";
import { PostCard } from "@/components/postCard";

export default function Home() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {}, []);

  const handleApi = async () => {
    const data = await getPosts();

    setPosts(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Posts</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostCard item={item} />}
        keyExtractor={(item) => item.id as unknown as string}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 20,
  },
});
