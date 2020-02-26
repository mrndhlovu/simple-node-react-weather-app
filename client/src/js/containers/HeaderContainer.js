import React, { useState, useEffect, memo } from "react";
import Header from "../components/Header";

const HeaderContainer = () => {
  const pageTitle = document.getElementById("#title");
  const [title, setTitle] = useState(null);

  useEffect(() => {
    if (title) pageTitle.innerHTML = title;
  }, [title, pageTitle]);

  const handleClickItem = target => {
    setTitle(target.toUpperCase() || "HOME");
  };

  return (
    <div>
      <Header handleClickItem={handleClickItem} />
    </div>
  );
};

export default memo(HeaderContainer);
