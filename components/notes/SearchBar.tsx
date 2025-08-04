import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../store/slices/notesSlice";

interface SearchBarProps {
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search notes...",
}) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  // Debounce search to avoid too many Redux updates
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setSearchQuery(query));
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, dispatch]);

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#666" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={query}
        onChangeText={setQuery}
        placeholderTextColor="#999"
        autoCapitalize="none"
        autoCorrect={false}
      />
      {query.length > 0 && (
        <Ionicons
          name="close-circle"
          size={20}
          color="#666"
          style={styles.clearIcon}
          onPress={() => setQuery("")}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  clearIcon: {
    marginLeft: 8,
  },
});
