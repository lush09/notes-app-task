import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

import { deleteNote } from "../../store/slices/notesSlice";
import { Note } from "../../types/notes";
import { formatDate } from "../../utils/helpers";

interface NoteCardProps {
  note: Note;
}

export const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleEdit = () => {
    router.push(`/note/${note.id}` as any);
  };

  const handleDelete = () => {
    Alert.alert("Delete Note", "Are you sure you want to delete this note?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => dispatch(deleteNote(note.id)),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} onPress={handleEdit}>
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={1}>
            {note.title}
          </Text>
          <Text style={styles.date}>{formatDate(note.updatedAt)}</Text>
        </View>

        <Text style={styles.description} numberOfLines={3}>
          {note.description}
        </Text>
      </TouchableOpacity>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleEdit}>
          <Ionicons name="create-outline" size={20} color="#007AFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleDelete}>
          <Ionicons name="trash-outline" size={20} color="#FF3B30" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 6,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    flex: 1,
    marginRight: 8,
  },
  date: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  actionButton: {
    padding: 8,
    marginLeft: 8,
  },
});
