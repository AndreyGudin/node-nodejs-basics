import { URL } from "url";
import { cp } from "node:fs/promises";

const copy = async () => {
  try {
    const FOLDER_COPY_FROM = new URL("files", import.meta.url);
    const FOLDER_COPY_TO = new URL("files_copy", import.meta.url);
    await cp(FOLDER_COPY_FROM, FOLDER_COPY_TO, { recursive: true, force: false, errorOnExist: true });
  } catch (error) {
    console.log("FS operation failed");
  }
};

copy();
