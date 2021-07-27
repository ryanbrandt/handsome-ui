import * as React from "react";

interface Props {
  /**
   * Function to execute on file selection change
   */
  onChange: (files: Array<File>) => void;

  /**
   * Currently selected files
   */
  selection: Array<File>;

  /**
   * Optional label for file selector
   */
  label?: string;

  /**
   * Flag indicating whether multiple files may be selected
   */
  multiple?: boolean;

  /**
   * Optional string defining accepted file type (e.g. image/png)
   */
  accept?: string;

  /**
   * Optional error string associated with the user input
   */
  error?: string;
}

const FileInput: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const handleFileSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = props;

    const { target } = e;
    const { files } = target as HTMLInputElement;

    if (files) {
      const { length } = files;

      const fileList: Array<File> = [];
      for (let i = 0; i < length; i += 1) {
        fileList.push(files[i]);
      }

      onChange(fileList);
    }
  };

  const _getFileSelectionText = (): string => {
    const { selection } = props;

    let text = "No files selected";

    const selectionLength = selection.length;
    if (selectionLength > 0) {
      text = `${selectionLength} file(s) selected`;
    }

    return text;
  };

  const { label, multiple, accept, error } = props;

  return (
    <div data-testid="fileInput" className="file_input-container">
      {label && <p className="file_input-label">{label}</p>}
      <label className="file_input-wrapper">
        Choose Files
        <input
          className="file_input-hidden"
          type="file"
          onChange={handleFileSelection}
          multiple={multiple}
          accept={accept}
        />
      </label>
      <p>{_getFileSelectionText()}</p>
      {error && <span className="file_input-error">{error}</span>}
    </div>
  );
};

export default FileInput;
