// import {EditorView, basicSetup} from "codemirror"
// import {javascript} from "@codemirror/lang-javascript"

// let editor = new EditorView({
//   extensions: [basicSetup, javascript()],
//   parent: document.body
// })

// import {minimalSetup} from "codemirror"
import {EditorView, scrollPastEnd, highlightActiveLineGutter, drawSelection, gutter, GutterMarker, keymap, lineNumbers} from "@codemirror/view"
import {defaultKeymap, history, historyKeymap, indentWithTab} from "@codemirror/commands"
import {EditorState, StateCommand} from "@codemirror/state"

const emptyMarker = function(line){
  return new class extends GutterMarker {
    toDOM() {
      return document.createTextNode('*' + (line.length)-20)
    }
  }
}

let defaultconfig = {
  doc: `hello\r\nword`,
  parent: document.body,
  lineWrapping: true,
  lineNumbers: true,
  BlankLineNums: 0,
  multipleSelections: true,
  scrollPastEnd: true,
  highlightActiveLineGutter: true,
  drawSelection: true,
  history: true
}

function CodeMirror(config={}/*Object*/){

  config = {...defaultconfig, ...config}
  console.log(config)
  return new EditorView({
    extensions: [
      // minimalSetup,
      config.scrollPastEnd? scrollPastEnd(): null,
      config.lineWrapping? EditorView.lineWrapping: null,
      config.highlightActiveLineGutter ? highlightActiveLineGutter(): null,
      config.drawSelection? drawSelection(): null,
      EditorState.allowMultipleSelections.of(config.multipleSelections),
      config.history? history(): null,
      keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
      // config.lineNumbers ? lineNumbers(): null,
      config.lineNumbers ? lineNumbers({
        formatNumber(lineNo, state){
          // console.log('formatNumber', arguments)
          let n = lineNo - 1 + (Math.abs(config.BlankLineNums)-1)*-1
          return n>0? n : ''
        },
        domEventHandlers:{
          mousedown(view, line, event){
            console.log(indentWithTab)
            // console.log('event', arguments)
            return true}
        }
      }): null,
      gutter({
        lineMarker(view, line){
          // console.log('lineMarker', arguments)
          return line.length>20 ? emptyMarker(line): null
        }
      }),
    ],
    parent: config.parent,
    doc: config.doc
  })
}

// export default CodeMirror
CodeMirror.defaultconfig = function(){
  return defaultconfig
}
window.CodeMirror = CodeMirror