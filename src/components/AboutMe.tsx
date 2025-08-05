import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const AboutMe = ({ timelineText }: { timelineText: string }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/wojtoppin/wojtoppin/main/README.md"
    )
      .then((res) => res.text())
      .then(setContent);
  }, []);

  return (
    <div
      className="px-4 py-6 m-10 flex-1 min-w-[220px] text-center shadow-lg bg-gray-900 bg-opacity-80 transition-transform hover:scale-101"
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
                      {content.slice(17)}
                    </ReactMarkdown>
                  </div>
    </div>
  );
};

export default AboutMe;
