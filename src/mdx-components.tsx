import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props: ComponentPropsWithoutRef<"h1">) => (
      <h1
        style={{
          fontFamily: "var(--font-lora), serif",
          fontSize: "28px",
          fontWeight: 600,
          letterSpacing: "-0.5px",
          lineHeight: "1.3",
          color: "var(--c-text)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
        {...props}
      />
    ),
    h2: (props: ComponentPropsWithoutRef<"h2">) => (
      <h2
        style={{
          fontFamily: "var(--font-lora), serif",
          fontSize: "22px",
          fontWeight: 600,
          letterSpacing: "-0.3px",
          lineHeight: "1.35",
          color: "var(--c-text)",
          marginTop: "36px",
          marginBottom: "12px",
        }}
        {...props}
      />
    ),
    h3: (props: ComponentPropsWithoutRef<"h3">) => (
      <h3
        style={{
          fontFamily: "var(--font-lora), serif",
          fontSize: "18px",
          fontWeight: 600,
          lineHeight: "1.4",
          color: "var(--c-text)",
          marginTop: "28px",
          marginBottom: "10px",
        }}
        {...props}
      />
    ),
    h4: (props: ComponentPropsWithoutRef<"h4">) => (
      <h4
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "15px",
          fontWeight: 500,
          lineHeight: "1.5",
          color: "var(--c-text)",
          marginTop: "24px",
          marginBottom: "8px",
        }}
        {...props}
      />
    ),
    p: (props: ComponentPropsWithoutRef<"p">) => (
      <p
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "15px",
          lineHeight: "1.75",
          color: "var(--c-secondary)",
          marginTop: "0",
          marginBottom: "20px",
        }}
        {...props}
      />
    ),
    a: (props: ComponentPropsWithoutRef<"a">) => (
      <a
        className="mdx-link"
        style={{ color: "var(--c-link)" }}
        {...props}
      />
    ),
    ul: (props: ComponentPropsWithoutRef<"ul">) => (
      <ul
        style={{
          paddingLeft: "20px",
          marginBottom: "20px",
          listStyleType: "disc",
        }}
        {...props}
      />
    ),
    ol: (props: ComponentPropsWithoutRef<"ol">) => (
      <ol
        style={{
          paddingLeft: "20px",
          marginBottom: "20px",
          listStyleType: "decimal",
        }}
        {...props}
      />
    ),
    li: (props: ComponentPropsWithoutRef<"li">) => (
      <li
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "15px",
          lineHeight: "1.75",
          color: "var(--c-secondary)",
          marginBottom: "6px",
        }}
        {...props}
      />
    ),
    blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        style={{
          borderLeft: "3px solid var(--c-border)",
          paddingLeft: "20px",
          marginLeft: "0",
          marginBottom: "20px",
          fontStyle: "italic",
          color: "var(--c-muted)",
        }}
        {...props}
      />
    ),
    hr: (props: ComponentPropsWithoutRef<"hr">) => (
      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--c-border)",
          margin: "36px 0",
        }}
        {...props}
      />
    ),
    table: (props: ComponentPropsWithoutRef<"table">) => (
      <div style={{ overflowX: "auto", marginBottom: "24px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "14px",
          }}
          {...props}
        />
      </div>
    ),
    th: (props: ComponentPropsWithoutRef<"th">) => (
      <th
        style={{
          padding: "8px 12px",
          textAlign: "left",
          fontWeight: 500,
          color: "var(--c-text)",
          borderBottom: "2px solid var(--c-border)",
        }}
        {...props}
      />
    ),
    td: (props: ComponentPropsWithoutRef<"td">) => (
      <td
        style={{
          padding: "8px 12px",
          color: "var(--c-secondary)",
          borderBottom: "1px solid var(--c-divider)",
        }}
        {...props}
      />
    ),
    code: (props: ComponentPropsWithoutRef<"code">) => {
      const isInline = !props.className;
      if (isInline) {
        return (
          <code
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "12.5px",
              backgroundColor: "var(--c-code-bg)",
              color: "var(--c-text)",
              padding: "1px 5px",
              borderRadius: "3px",
            }}
            {...props}
          />
        );
      }
      return <code {...props} />;
    },
    pre: (props: ComponentPropsWithoutRef<"pre">) => (
      <pre
        style={{
          borderRadius: "6px",
          marginBottom: "24px",
          overflow: "auto",
        }}
        {...props}
      />
    ),
    strong: (props: ComponentPropsWithoutRef<"strong">) => (
      <strong style={{ fontWeight: 600, color: "var(--c-text)" }} {...props} />
    ),
    em: (props: ComponentPropsWithoutRef<"em">) => (
      <em style={{ fontStyle: "italic", color: "inherit" }} {...props} />
    ),
    ...components,
  };
}
