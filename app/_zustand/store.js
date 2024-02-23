import { create } from "zustand";

export const usePeopleStore = create((set) => ({
  people: [
    {
      id: 1,
      name: "Alex",
    },
    {
      id: 2,
      name: "George",
    },
  ],
  editMode: {
    value: false,
    name: "",
    personId: -1,
  },
  addPerson: (newPerson) => {
    set((state) => {
      return { people: [...state.people, newPerson] };
    });
  },
  deletePerson: (id) => {
    set((state) => {
      state.people = state.people.filter((person) => person.id !== id);
      return state.people;
    });
  },
  editPerson: (id, newName) => {
    set((state) => {
      for (let i = 0; i < state.people.length; i++) {
        if (state.people[i].id === id) {
          state.people[i].name = newName;
        }
      }
      return state.people;
    });
  },
  setEditMode: (id, name) => {
    set((state) => {
      state.editMode.value = 1;
      state.editMode.personId = id;
      state.editMode.name = name;
      return state.editMode;
    });
  },
  disableEditMode: () => {
    set((state) => {
      state.editMode.value = 0;
      state.editMode.personId = -1;
      state.editMode.name = "";
      return state.editMode;
    });
  },
}));
