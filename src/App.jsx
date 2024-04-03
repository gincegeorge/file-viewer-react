import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

export default function App() {
  const docs = [
    {
      uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
      fileType: "docx",
      fileName: "Holaa.docx",
    },
    {
      uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
      fileType: "docx",
      fileName: "Holaa.docx",
    },
  ];

  return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
}
