export interface Note {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNoteData {
  title: string;
  description: string;
}

export interface UpdateNoteData {
  id: string;
  title: string;
  description: string;
}

export interface NotesState {
  notes: Note[];
  filteredNotes: Note[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
} 