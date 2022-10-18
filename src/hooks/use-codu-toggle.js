import React, { useState } from "react";

const useCoduToggle = (active = false) => {
  const [isActive, setActive] = useState(active);

  console.log({ active });

  return [isActive, setActive];
};

export default useCoduToggle;
