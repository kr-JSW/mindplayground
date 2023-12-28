import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  LineIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
} from "react-share";

function Share() {
  const url = process.env.NEXT_PUBLIC_URL;
  return (
    <div>
      {" "}
      <FacebookShareButton style={{ marginRight: "20px" }} url={url}>
        <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
      </FacebookShareButton>
      <TwitterShareButton style={{ marginRight: "20px" }} url={url}>
        <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
      </TwitterShareButton>
      <LineShareButton url={url} style={{ marginRight: "20px" }}>
        <LineIcon size={48} round={true} borderRadius={24}></LineIcon>
      </LineShareButton>
      <EmailShareButton url={url} style={{ marginRight: "20px" }}>
        <EmailIcon size={48} round={true} borderRadius={24}></EmailIcon>
      </EmailShareButton>
      <LinkedinShareButton url={url} style={{ marginRight: "20px" }}>
        <LinkedinIcon size={48} round={true} borderRadius={24}></LinkedinIcon>
      </LinkedinShareButton>
      <PinterestShareButton url={url} style={{ marginRight: "20px" }}>
        <PinterestIcon size={48} round={true} borderRadius={24}></PinterestIcon>
      </PinterestShareButton>
      <TelegramShareButton url={url} style={{ marginRight: "20px" }}>
        <TelegramIcon size={48} round={true} borderRadius={24}></TelegramIcon>
      </TelegramShareButton>
      <TumblrShareButton url={url}>
        <TumblrIcon size={48} round={true} borderRadius={24}></TumblrIcon>
      </TumblrShareButton>
    </div>
  );
}

export default Share;
