import { PropsWithChildren } from "react";

export default function NavigationBar({ children }: PropsWithChildren) {
  return (
    <>
      <nav>Hello!</nav>
      {children}
    </>
  );
}
