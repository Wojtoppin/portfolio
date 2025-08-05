import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  useState,
} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
interface ProjectDialogProps {
  markdownUrl: string;
}

export interface ProjectDialogRef {
  open: () => void;
  close: () => void;
}

const ProjectDialog = forwardRef<ProjectDialogRef, ProjectDialogProps>(
  ({ markdownUrl }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [markdown, setMarkdown] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useImperativeHandle(ref, () => ({
      open: () => {
        if (dialogRef.current && !dialogRef.current.open) {
          dialogRef.current.showModal();
          document.body.style.overflow = 'hidden';
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
          document.body.style.overflow = '';
        }
      },
    }));

    // Allow ESC to close and restore body scroll
    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;
      const handleCancel = (e: Event) => {
        e.preventDefault();
        dialog.close();
        document.body.style.overflow = '';
      };
      dialog.addEventListener("cancel", handleCancel);
      return () => dialog.removeEventListener("cancel", handleCancel);
    }, []);

    // Allow closing by clicking outside the dialog and restore body scroll
    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;
      const handleClick = (e: MouseEvent) => {
        if (e.target === dialog) {
          dialog.close();
          document.body.style.overflow = '';
        }
      };
      dialog.addEventListener("click", handleClick);
      return () => dialog.removeEventListener("click", handleClick);
    }, []);

    return (
      <dialog
        ref={dialogRef}
        className="w-full max-w-4xl rounded-lg shadow-lg m-auto relative"
        style={{
          boxShadow:
            "0 0 2px 1px #3fdad8, 0 0 4px 2px #3b82f6, 0 0 6px 2px #a78bfa, 0 0 8px 2px #38bdf8",
          borderImage:
            "linear-gradient(135deg, #3fdad8, #3b82f6, #a78bfa, #38bdf8) 1",
          borderColor: "transparent",
          color: "#e0e7ef",
          textDecoration: "none",
          borderRadius: "20px",
        }}
      >
        <div
          className="bg-gray-900"
          style={{
            maxHeight: "80vh",
            overflowY: "auto",
            padding: "1.5rem",
            position: "relative",
          }}
        >
          <div style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(17,24,39,0)", paddingBottom: "0.5rem" }}>
            <button
              className="float-right text-cyan-300 hover:text-cyan-100 text-2xl font-bold"
            onClick={() => {
              dialogRef.current?.close();
              document.body.style.overflow = '';
            }}
              aria-label="Close dialog"
            >
              ×
            </button>
            <div style={{ clear: "both" }} />
          </div>
          {loading && <div className="text-cyan-200">Loading...</div>}
          {error && <div className="text-red-400">{error}</div>}
          {!loading && !error && (
            <div className="prose prose-invert text-left max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-2xl font-semibold mt-4 mb-3" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="mb-4 text-gray-300" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc pl-6 mb-4" {...props} />
                  ),
                  code: ({ node, ...props }) => (
                    <code className="bg-gray-800 text-pink-400 px-1 rounded" {...props} />
                  ),
                }}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </dialog>
    );
  }
);

export default ProjectDialog;
