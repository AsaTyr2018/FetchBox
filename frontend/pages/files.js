import { useEffect, useState } from "react";
import { fetchFiles, createLink } from "../lib/api";

export default function Files() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles().then(setFiles);
  }, []);

  const handleLink = async (file) => {
    await createLink(file.id || file);
    // TODO: show generated link
  };

  return (
    <div>
      <h1>Files</h1>
      <ul>
        {files.map((file, idx) => (
          <li key={idx}>
            {file.name || "placeholder"}
            <button onClick={() => handleLink(file)}>Get Link</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
