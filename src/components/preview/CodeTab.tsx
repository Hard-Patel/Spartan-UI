import { getComponentCode } from "@/utils/common-functions";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
import "../common/sidebar.css";
import CopyToClipboardButton from "../ui/CopyToClipboardButton";

const SyntaxHighlighter = Prism as any as React.FC<SyntaxHighlighterProps>;

export const CodeTab = ({ componentId }: { componentId: string }) => {
  const componentRawCode = getComponentCode(componentId);

  return (
    <div className="relative max-h-[60vh] overflow-y-scroll sidebar-scroll">
      <div className="absolute top-4 right-4 z-10">
        <CopyToClipboardButton textToCopy={componentRawCode} />
      </div>

      <SyntaxHighlighter
        language="tsx"
        style={oneDark}
        customStyle={{
          margin: 0,
          borderRadius: "0 0 12px 12px",
          background: "hsl(var(--muted)/0.7)",
          backdropFilter: "blur(8px)",
        }}
        codeTagProps={{
          style: {
            fontSize: "14px",
            fontFamily:
              "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace",
          },
        }}
      >
        {componentRawCode}
      </SyntaxHighlighter>
    </div>
  );
};
