import { createStore } from "solid-js/store";

const [state, setState] = createStore({
  mobileMenuOpen: "hidden",
});

export { state, setState };
