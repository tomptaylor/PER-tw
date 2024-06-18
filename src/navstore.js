import { createStore } from "solid-js/store";

const [state, setState] = createStore({
  mobileMenuOpen: "max-md:hidden max-md:flex-col",
});

export { state, setState };
