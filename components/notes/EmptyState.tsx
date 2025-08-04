import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface EmptyStateProps {
  message?: string;
  showSearch?: boolean;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  message = "No notes found",
  showSearch = false,
}) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name={showSearch ? "search-outline" : "document-text-outline"}
        size={64}
        color="#ccc"
      />
      <Text style={styles.title}>
        {showSearch ? "No matching notes" : "No notes yet"}
      </Text>
      <Text style={styles.message}>
        {showSearch
          ? "Try adjusting your search terms"
          : "Create your first note to get started"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginTop: 16,
    marginBottom: 8,
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
  },
});
