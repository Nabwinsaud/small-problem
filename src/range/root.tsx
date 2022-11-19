import React, { useState } from "react";

const root = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(false);
  const [toggle, setToggleTheme] = useState<boolean>(false);

  const toggles = {
    dark: () => setDarkTheme((prev) => !prev),
    user: () => setUser((current) => !current),
    toggle: () => setToggleTheme((theme) => !theme),
  };
  return <div>root</div>;
};

export default root;
