import { setState, state } from "~/navstore";

export default function NavMobile() {
  return (
    <>
      <div>{state.mobileMenuOpen}</div>
      <div class="md:hidden">
        <button
          class="text-white focus:outline-none"
          onClick={() =>
            setState({
              mobileMenuOpen: "contents",
            })
          }
        >
          <svg
            class="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
}
