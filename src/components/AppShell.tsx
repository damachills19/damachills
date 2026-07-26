"use client";

import { useState } from "react";
import Loader from "./Loader";
import Nav from "./Nav";
import RouteTransition from "./RouteTransition";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <Nav />
      <RouteTransition>{children}</RouteTransition>
    </>
  );
}
