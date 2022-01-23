import React from "react";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
 
const Media = () => {
  // const pdf = "5ca2433047c31e08073e5c1cafcd3a17e56e2c4a.png";
  const docs = [
    { uri: "https://screenshots.codesandbox.io/f9hkb/1.png" },
    { uri: "https://screenshots.codesandbox.io/f9hkb/2.png" },
    { uri: "https://screenshots.codesandbox.io/f9hkb/1.png" },
    // { uri: require("./example-files/pdf.pdf") }, // Local File
  ];
 
  return <DocViewer
    documents={docs}
    pluginRenderers={DocViewerRenderers}
    config={{
      header: {
      disableHeader: true
      }
   }} />;
}

export default Media;