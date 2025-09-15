import { useEffect, useState } from "react";
import { fetchGroups } from "../lib/api";

export default function Groups() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetchGroups().then(setGroups);
  }, []);

  return (
    <div>
      <h1>Groups</h1>
      <ul>
        {groups.map((group, idx) => (
          <li key={idx}>{group.name || "placeholder"}</li>
        ))}
      </ul>
    </div>
  );
}
