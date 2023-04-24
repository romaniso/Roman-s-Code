import React from "react";
import { Link } from "react-router-dom";
import "../styles/Button.css";

export default function Button({
  btnLink = "test",
  btnText = "Test",
  outline = false,
  download = null,
  aboutBtn,
  isInNavbar = false,
}) {
  return (
    <>
      {download ? (
        <a
          href={download}
          download={download}
          className={
            aboutBtn
              ? "button"
              : outline
              ? "button button--outline button--sm"
              : isInNavbar
              ? "button button--navbar"
              : "button button--sm"
          }
        >
          {" "}
          {btnText}
        </a>
      ) : (
        <Link
          className={outline ? "button button--outline" : "button"}
          to={btnLink}
        >
          {btnText}
        </Link>
      )}
    </>
  );
}
