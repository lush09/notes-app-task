import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateNoteData, Note, NotesState, UpdateNoteData } from '../../types/notes';

const initialState: NotesState = {
  notes: [],
  filteredNotes: [],
  isLoading: false,
  error: null,
  searchQuery: '',
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    addNote: (state, action: PayloadAction<CreateNoteData>) => {
      const newNote: Note = {
        id: Date.now().toString(),
        title: action.payload.title,
        description: action.payload.description,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      state.notes.unshift(newNote);
      state.filteredNotes = state.notes;
    },
    updateNote: (state, action: PayloadAction<UpdateNoteData>) => {
      const index = state.notes.findIndex(note => note.id === action.payload.id);
      if (index !== -1) {
        state.notes[index] = {
          ...state.notes[index],
          title: action.payload.title,
          description: action.payload.description,
          updatedAt: new Date().toISOString(),
        };
        state.filteredNotes = state.notes;
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
      state.filteredNotes = state.notes;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      if (action.payload.trim() === '') {
        state.filteredNotes = state.notes;
      } else {
        const query = action.payload.toLowerCase();
        state.filteredNotes = state.notes.filter(
          note =>
            note.title.toLowerCase().includes(query) ||
            note.description.toLowerCase().includes(query)
        );
      }
    },
    clearNotes: (state) => {
      state.notes = [];
      state.filteredNotes = [];
      state.searchQuery = '';
    },
  },
});

export const {
  setLoading,
  setError,
  addNote,
  updateNote,
  deleteNote,
  setSearchQuery,
  clearNotes,
} = notesSlice.actions;

export default notesSlice.reducer; 