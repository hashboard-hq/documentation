import React, { ReactNode } from "react";

export default function MutedBlock({
  header,
  children,
}: {
  header: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        marginTop: 16,
        padding: 16,
        background: "#f7f7f7",
        borderRadius: 4,
        opacity: 0.8,
      }}
    >
      <div style={{ fontWeight: "bold", opacity: 0.75, marginBottom: 4 }}>
        {header}
      </div>
      <div>{children}</div>
    </div>
  );
}
