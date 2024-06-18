import { state } from "~/navstore";

export default function NavDesk() {
  return (
    <ul
      class={`flex items-center p-3 flex-wrap max-md:${state.mobileMenuOpen} max-md:flex-col`}
    >
      <li class={`border-b-2  mx-1.5 sm:mx-6`}>
        <a href="/">Home</a>
      </li>
      <li class={`border-b-2 mx-1.5 sm:mx-6`}>
        <a href="/about">About</a>
      </li>
    </ul>
  );
}
