// import React, { useState } from 'react'
// import 'codemirror/lib/codemirror.css'
// import 'codemirror/theme/material.css'
// import 'codemirror/mode/xml/xml'
// import 'codemirror/mode/javascript/javascript'
// import 'codemirror/mode/css/css'
// import { Controlled as ControlledEditor } from 'react-codemirror2'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

// export default function Editor(props) {
//   const {
//     language,
//     displayName,
//     value,
//     onChange
//   } = props
//   const [open, setOpen] = useState(true)

//   function handleChange(editor, data, value) {
//     onChange(value)
//   }

//   return (
//     <div className={`editor-container ${open ? '' : 'collapsed'}`}>
//       <div className="editor-title">
//         {displayName}
//         <button
//           type="button"
//           className="expand-collapse-btn"
//           onClick={() => setOpen(prevOpen => !prevOpen)}
//         >
//           <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
//         </button>
//       </div>
//       <ControlledEditor
//         onBeforeChange={handleChange}
//         value={value}
//         className="code-mirror-wrapper"
//         options={{
//           lineWrapping: true,
//           lint: true,
//           mode: language,
//           theme: 'material',
//           lineNumbers: true
//         }}
//       />
//     </div>
//   )
// }

import React, { useState, useEffect } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/theme/material.css";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/xml/xml";
import "codemirror/addon/scroll/simplescrollbars.js";
import "codemirror/addon/scroll/simplescrollbars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCompress,
	faCompressAlt,
	faExpandAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Editor(props) {
	const { displayName, language, onChange, currentValue } = props;
  
	const [editorIsOpen, setEditorIsOpen] = useState(true);

	return (
		<div className={`editor-container ${editorIsOpen ? "" : "collapsed"}`}>
			<div className="editor-title">
				<span className="language-name">{displayName}</span>
				<button
					onClick={() => setEditorIsOpen(!editorIsOpen)}
					type="button"
					className="expand-collapse-btn"
				>
					<FontAwesomeIcon icon={editorIsOpen ? faCompressAlt : faExpandAlt} />
				</button>
			</div>

			<CodeMirror
				value={currentValue}
				className="codemirror-wrapper"
				onBeforeChange={(editor, data, value) => {
					onChange(value);
				}}
				options={{
					theme: "material",
					lineWrapping: true,
					lint: true,
					lineNumbers: true,
					scrollbarStyle: "overlay",
					mode: language,
				}}
			/>
		</div>
	);
}
