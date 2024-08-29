import fs from "fs";
import path from "path";

export function createFile(
  folder: string,
  fileName: string,
  content: string
): void {
  const filePath = path.join(folder, fileName);
  fs.writeFileSync(filePath, content, "utf8");
}

export function createFolder(folderPath: string): void {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log(`Created folder: ${folderPath}`);
  }
}
