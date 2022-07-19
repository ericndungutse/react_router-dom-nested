import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Sidenav from "../components/Sidenav.component";

const Contact = () => {
  const show = useSelector(({sidenav:{show}}) =>show);
  const dispatch = useDispatch();

  return (
    <section className="about-container">
      <Sidenav show={show} />
      <div className="btn" onClick={() => dispatch({ type: "SHOW_SIDE_NAV" })}>
        Toggle Menu
      </div>
    </section>
  );
};

export default Contact;
