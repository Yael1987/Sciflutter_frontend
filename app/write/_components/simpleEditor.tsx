import { CKEditor } from "@ckeditor/ckeditor5-react"
import type { EditorConfig } from "@ckeditor/ckeditor5-core"
import myEditor  from "ckeditor5-custom-build";
import { EditorProps } from "@/app/_interfaces/components";

const editorConfig = {
  toolbar: [
    'bold',
    'italic',
    'bulletedList',
    'numberedList',
    '|',
    'specialCharacters',
    '|',
    'undo',
    'redo'
  ]
}

const setEditorConfig = (saveFuncion: (data: string) => Promise<void>, setWordsCount: (word: number) => void): EditorConfig => {
  return {
    toolbar: [
      "bold",
      "italic",
      "bulletedList",
      "numberedList",
      "|",
      "specialCharacters",
      "|",
      "undo",
      "redo",
    ],
    autosave: {
      save(editor) {
          return saveFuncion(editor.getData())
      },
      waitingTime: 2000
    },
    wordCount: {
      onUpdate(data) {
        setWordsCount(data.words)
      },
    }
  };
}

const SimpleEditor: React.FC<EditorProps> = ({ initialData, handleSetData, handleAutosave, setWordCount }) => {
  return (
    <CKEditor
      editor={myEditor.Editor}
      config={setEditorConfig(handleAutosave, setWordCount)}
      data={initialData}
      onChange={(event, editor) => {
        const data = editor.getData()
        handleSetData(data)
      }}
    />
  )
}

export default SimpleEditor