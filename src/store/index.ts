// store/index.ts
import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedValues: [] as any[],
    selectedLastValues: [] as any[],
    text: [] as any[]
  },
  mutations: {
    // Update the entire array
    updateSelectedValues (state, values) {
      state.selectedValues = values
    },

    updateSelectedLastValues (state, values) {
      state.selectedLastValues = values
    },

    updateText (state, values) {
      state.text = values
    },

    // Add a single value to the array
    addSelectedValue (state, value) {
      state.selectedValues.push(value)
    },
    addSelectedLastValue (state, value) {
      state.selectedLastValues.push(value)
    },
    addText (state, value) {
      state.text.push(value)
    },

    // Remove a single value from the array
    removeSelectedValue (state, value) {
      state.selectedValues = state.selectedValues.filter((v) => v !== value)
    },
    removeSelectedLastValue (state, value) {
      state.selectedLastValues = state.selectedLastValues.filter((v) => v !== value)
    },
    removeText (state, value) {
      state.text = state.text.filter((v) => v !== value)
    }

  },
  getters: {
    // Retrieve the entire array
    getSelectedValues (state) {
      return state.selectedValues
    },
    getSelectedLastValues (state) {
      return state.selectedLastValues
    },
    getText (state) {
      return state.text
    }
  },
  actions: {
    // Optional: You can create actions to commit mutations asynchronously if needed.
  }
})
