import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Post = ({ data }) => {
  const {
    title,
    image,
    bed,
    bedroom,
    oldPrice,
    newPrice,
    totalPrice,
    id,
  } = data;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate("Post", { postId: id });
  };

  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      {/* Images */}
      <Image
        style={styles.image}
        source={{
          uri: `${image}`,
        }}
      />
      {/* Bad Bedroom */}
      <Text style={styles.bedrooms}>{`${bed} bed ${bedroom} bedroom`}</Text>
      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        {title}
      </Text>
      {/* Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>{`$${oldPrice} `}</Text>
        <Text style={styles.newPrice}>{`$${newPrice} `}</Text>/ night
      </Text>
      {/* Total price */}
      <Text style={styles.totalPrice}>{`$${totalPrice} total`}</Text>
    </Pressable>
  );
};

export default Post;
