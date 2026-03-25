import { CommentsComponent } from "@/components/commentsComponent";
import { getComments, getPost } from "@/services/posts.service";
import { CommentsType } from "@/types/comments.type";
import { PostType } from "@/types/post.type";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function Post() {
  const [post, setPost] = useState<PostType | null>(null);
  const [comments, setComments] = useState<CommentsType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useLocalSearchParams();

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  const handlePost = async () => {
    const data = await getPost(id as string);

    setPost(data);
  };

  const handleComments = async () => {
    setLoading(true);
    try {
      const resp = await getComments(id as string);
      setComments(resp);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <CommentsComponent item={item} />}
        ListHeaderComponent={
          <>
            <View style={styles.postContainer}>
              <Text style={styles.title}>{post?.title}</Text>
              <View style={styles.bodyContainer}>
                <Text style={styles.body}>{post?.body}</Text>
              </View>
            </View>

            <Text style={styles.comment}>Comentários</Text>

            {loading && <Text>Carregando...</Text>}
            {!loading && comments.length === 0 && (
              <Text>Sem comentários para esse Post</Text>
            )}
          </>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  postContainer: {
    height: 300,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  bodyContainer: {
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingTop: 10,
  },
  body: {
    fontSize: 16,
    textAlign: "justify",
  },
  comment: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20,
  },
});
