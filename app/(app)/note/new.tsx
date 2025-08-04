import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { useDispatch } from "react-redux";

import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { APP_CONFIG } from "../../../constants/config";
import { addNote } from "../../../store/slices/notesSlice";
import { validateNoteData } from "../../../utils/validation";

export default function NewNoteScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  const handleSave = () => {
    // Clear previous errors
    setTitleError("");
    setDescriptionError("");

    // Validate inputs
    const validationError = validateNoteData(title, description);
    if (validationError) {
      if (!title.trim()) setTitleError(validationError);
      if (!description.trim()) setDescriptionError(validationError);
      return;
    }

    // Dispatch add note action
    dispatch(addNote({ title: title.trim(), description: description.trim() }));

    // Navigate back
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  const handleTitleChange = (text: string) => {
    setTitle(text);
    if (titleError) setTitleError("");
  };

  const handleDescriptionChange = (text: string) => {
    setDescription(text);
    if (descriptionError) setDescriptionError("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <Input
              label="Title"
              placeholder="Enter note title"
              value={title}
              onChangeText={handleTitleChange}
              error={titleError}
              maxLength={APP_CONFIG.maxTitleLength}
            />

            <Input
              label="Description"
              placeholder="Enter note description"
              value={description}
              onChangeText={handleDescriptionChange}
              error={descriptionError}
              multiline
              numberOfLines={8}
              maxLength={APP_CONFIG.maxDescriptionLength}
            />

            <View style={styles.actions}>
              <Button
                title="Cancel"
                onPress={handleCancel}
                variant="secondary"
                style={styles.cancelButton}
              />
              <Button
                title="Save"
                onPress={handleSave}
                style={styles.saveButton}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  cancelButton: {
    flex: 1,
    marginRight: 8,
  },
  saveButton: {
    flex: 1,
    marginLeft: 8,
  },
});
