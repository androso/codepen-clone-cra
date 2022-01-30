import React, { useEffect, useState } from 'react';
import Editor from "./components/Editor";
import "./index.css";
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      `)
    }, 1000);

    return () => clearTimeout(timeout);
  }, [html, css, js])

  return (
    <>
      <div className="pane top-pane">
        <Editor 
          language="xml"
          displayName="HTML"
          onChange={setHtml}
          currentValue={html}
        />
        <Editor
          language="css"
          displayName="CSS"
          onChange={setCss}
          currentValue={css}
        />
        <Editor
          language="javascript"
          displayName="JS"
          onChange={setJs}
          currentValue={js}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;