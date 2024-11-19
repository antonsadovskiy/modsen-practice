import { ChangeEvent, HTMLProps, ReactNode, useCallback, useRef } from "react";

type FileInputPropsType = {
  trigger: ReactNode;
  onFileSelected: (file: File) => void;
  disableUpload?: boolean;
} & HTMLProps<HTMLDivElement>;

export const FileInput = ({
  trigger,
  onFileSelected,
  disableUpload,
  ...rest
}: FileInputPropsType) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => inputRef.current?.click();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files && e.target.files[0];
      if (selectedFile) {
        onFileSelected(selectedFile);
      }
    },
    [onFileSelected],
  );
  if (disableUpload) {
    return <div {...rest}>{trigger}</div>;
  }

  return (
    <>
      <div
        {...rest}
        onClick={() => {
          handleUploadClick();
        }}
      >
        {trigger}
      </div>
      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleChange}
        onClick={(event) => (event.currentTarget.value = "")}
      />
    </>
  );
};
