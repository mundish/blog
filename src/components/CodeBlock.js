import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';

const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, '') || '';

  return (
    <Highlight
      {...defaultProps}
      theme={vsDark}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} min-w-full float-left p-4 rounded`}
          style={{ ...style }}
        >
          {tokens.map((line, index) => {
            return (
              <div key={index} {...getLineProps({ line, key: index })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
