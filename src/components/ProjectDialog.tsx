import React, { forwardRef, useImperativeHandle, useRef, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
interface ProjectDialogProps {
  markdownUrl: string;
}

export interface ProjectDialogRef {
  open: () => void;
  close: () => void;
}

const ProjectDialog = forwardRef<ProjectDialogRef, ProjectDialogProps>(({ markdownUrl }, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [markdown, setMarkdown] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      if (dialogRef.current && !dialogRef.current.open) {
        dialogRef.current.showModal();
      }
      setLoading(true);
      setError(null);
      fetch(markdownUrl)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch markdown");
          return res.text();
        })
        .then(setMarkdown)
        .catch((e) => setError(e.message))
        .finally(() => setLoading(false));
    },
    close: () => {
      if (dialogRef.current && dialogRef.current.open) {
        dialogRef.current.close();
      }
    },
  }));

  // Allow ESC and clicking outside to close
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleCancel = (e: Event) => {
      e.preventDefault();
      dialog.close();
    };
    dialog.addEventListener("cancel", handleCancel);
    return () => dialog.removeEventListener("cancel", handleCancel);
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="w-full max-w-4xl rounded-lg shadow-lg border border-gray-300 m-auto bg-gray-900 p-6 relative "
      style={{
        boxShadow:
          "0 0 2px 1px #3fdad8, 0 0 4px 2px #3b82f6, 0 0 6px 2px #a78bfa, 0 0 8px 2px #38bdf8",
        borderImage: "linear-gradient(135deg, #3fdad8, #3b82f6, #a78bfa, #38bdf8) 1",
        borderColor: "transparent",
        color: "#e0e7ef",
        textDecoration: "none",
        borderRadius: "20px",
      }}
    >   
        <button
          className="absolute top-2 right-2 text-cyan-300 hover:text-cyan-100 text-2xl font-bold"
          onClick={() => dialogRef.current?.close()}
        >
          ×
        </button>
        {loading && <div className="text-cyan-200">Loading...</div>}
        {error && <div className="text-red-400">{error}</div>}
        {!loading && !error && (
            console.log(markdown), <ReactMarkdown>{markdown}</ReactMarkdown>
        )}
    </dialog>
  );
});

export default ProjectDialog;
