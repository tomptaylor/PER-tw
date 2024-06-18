import { state } from "~/navstore";

export default function NavDesk() {
  return (
    <ul
      class={`container flex items-center p-3 text-gray-200 max-md:flex-col max-md:${state.mobileMenuOpen}`}
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
