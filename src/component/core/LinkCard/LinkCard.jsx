import React, { useState } from "react";
import "./linkcard.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "../button/button.component";
import Alert from "../alert/Alert";

function LinkCard({ link, heading }) {
  const [copy, setCopy] = useState(false);
  const copyClickHaqndler = () => {
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };
  return (
    <div className="link-card-container">
      {copy && <Alert variant={"success"} message="Copied!" />}
      <div className="link-card-container-heading">{heading}</div>
      <div className="link-element">{link}</div>
      <div className="link-card-container-button">
        <Button
          className="btn-sm link-card-container-button-open"
          onClick={() => window.open(link, "_blank")}
        >
          open
        </Button>
        <CopyToClipboard text={link} onCopy={copyClickHaqndler}>
          <Button className="btn-sm link-card-container-button-copy">
            Copy
          </Button>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default LinkCard;
