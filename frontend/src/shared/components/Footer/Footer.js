import React, { useState, useEffect } from "react";
import "./Footer.css";

function Footer() {
  const [lastModified, setLastModified] = useState("");

  useEffect(() => {
    const lastModifiedDate = new Date(document.lastModified);
    setLastModified(lastModifiedDate.toLocaleString());
  }, []);
  return (
    <footer>
      <p>Sylvain Labranche</p>
      <p>Dernière modification : {lastModified}</p>
    </footer>
  );
}

export default Footer;
