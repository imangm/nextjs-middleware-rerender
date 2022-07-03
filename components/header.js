import { useState, useEffect } from "react";

export const Header = () => {
  const [objState, setObjState] = useState({ name: "Down" });

  useEffect(() => {
    setObjState({ name: "Down" });
  }, []);

  return (
    <header style={{ height: 1000 }}>
      <h1>Scroll {objState.name} !</h1>
    </header>
  );
};

Header.whyDidYouRender = true;
