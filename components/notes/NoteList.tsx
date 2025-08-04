import React from "react";
import { FlatList, RefreshControl, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { RootState } from "../../store";
import { EmptyState } from "./EmptyState";
import { NoteCard } from "./NoteCard";

interface NoteListProps {
  onRefresh?: () => void;
  refreshing?: boolean;
}

export const NoteList: React.FC<NoteListProps> = ({
  onRefresh,
  refreshing = false,
}) => {
  const { filteredNotes, searchQuery } = useSelector(
    (state: RootState) => state.notes
  );

  const renderNote = ({ item }: { item: any }) => <NoteCard note={item} />;

  const renderEmptyState = () => {
    const hasSearchQuery = searchQuery.trim().length > 0;
    return <EmptyState showSearch={hasSearchQuery} />;
  };

  return (
    <FlatList
      data={filteredNotes}
      renderItem={renderNote}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["#007AFF"]}
          tintColor="#007AFF"
        />
      }
      ListEmptyComponent={renderEmptyState}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 8,
  },
});
