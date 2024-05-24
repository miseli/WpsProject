const defaultconfig = {
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

import {basicSetup, EditorView, /*minimalSetup*/} from "codemirror"
import {GutterMarker, gutter, keymap} from '@codemirror/view'
// import {highlightActiveLineGutter, highlightActiveLine} from "@codemirror/view"
import {scrollPastEnd, lineNumbers, /*drawSelection*/} from '@codemirror/view'
import {lintGutter, linter} from '@codemirror/lint'
import {javascript} from "@codemirror/lang-javascript"
import {EditorState} from "@codemirror/state"
import {defaultKeymap, history, historyKeymap, indentWithTab} from "@codemirror/commands"
import {syntaxTree} from "@codemirror/language"
// import {Tooltip, showTooltip} from "@codemirror/view"


Number.prototype.leftpadding = function(length = 2, padchar = '0'){
  return (Array(length).join(padchar) + this).slice(-length)
}

const emptyMarker = function(line){
  return new class extends GutterMarker {
    toDOM() {
      let text = document.createTextNode('*' + (line.length-20))
      let s = document.createElement("div")
      s.appendChild(text)

/*      let l = document.createElement("div")
      l.className = "CodeMirror-lint-marker CodeMirror-lint-marker-warning"
      // l.className = "CodeMirror-lint-marker CodeMirror-lint-marker-multiple"
      s.appendChild(l)

      l.addEventListener('mouseover', function(e){
        console.log(e,arguments)
      })*/
      return s
      // return document.createTextNode('*' + (line.length-20)),
    }
  }
}


function CodeMirror(config={}/*Object*/) {

  config = {...defaultconfig, ...config}

  let state = EditorState.create({
    doc: config.doc,
    extensions: [
      basicSetup,
      config.scrollPastEnd? scrollPastEnd(): null,
      config.lineWrapping? EditorView.lineWrapping: null,
      EditorState.allowMultipleSelections.of(config.multipleSelections),
      keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
      lineNumbers({
        formatNumber(lineNo, state){
          // console.log('formatNumber', arguments)
          let n = lineNo - 1 + (Math.abs(config.BlankLineNums)-1)*-1
          return n>0? n : ''
        },
        domEventHandlers:{
          mousedown(view, line, event){
            console.log(this, indentWithTab, arguments)
            return true
          }
        }
      }),
      gutter({
        lineMarker(view, line){
          // console.log('lineMarker', arguments)
          // console.log(otherMarkers)
          console.log(line)
          return line.length>20 ? emptyMarker(line): null
        }
      }),
      linter(view => {
        // view.state.doc.toString()
        view.state.selection.ranges.filter(range=>{
            console.log(range)
            return true;
        })

        // console.log(view.state.selection.ranges)

        let diagnostics = []
        syntaxTree(view.state).cursor().iterate(node=>{
          console.log(node.name)
          if (node.name == "RegExp")
            diagnostics.push({
              from: node.from,
              to: node.to,
              severity: "warning",
              message: "Regular expressions are FORBIDDEN",
              actions: [{
                name: "Remove",
                apply(view, from, to) { view.dispatch({changes: {from, to}}) }
              }]
            })
        })
        return diagnostics
      }),
      lintGutter({
        hoverTime: 200,
        markerFilter(diagnostic){
          // debugger
          return diagnostic
        },
        tooltipFilter(diagnostic){
          // debugger
          return diagnostic
        }
      }),
    ],
  })

  return new EditorView({
    state,
    parent: document.body
  })
}

// CodeMirror()



// export default CodeMirror
CodeMirror.defaultconfig = function(){
  return defaultconfig
}
window.CodeMirror = CodeMirror

// let editor = CodeMirror({doc:`console.log('hello')
//   123456789012345678900123456789123456789012345678900123456789123456789012345678900123456789123456789012345678900123456789123456789012345678900123456789123456789012345678900123456789
//   123`})
// console.log(editor.state.doc.toString())
// 修改
// editor.dispatch({changes: {from: 0, to: editor.state.doc.length, insert: "editor"}})