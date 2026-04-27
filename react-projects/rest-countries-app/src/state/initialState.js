
const savedTheme = localStorage.getItem("theme");

export const initialState = {
  countries: [],
  filters: {
    name: "",
    region: ""
  },
  ui: {
    theme: savedTheme !== null ? savedTheme === "true" : true,
    loading: false
  }
}
