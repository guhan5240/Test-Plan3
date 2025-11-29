import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseUploadDir = path.join(__dirname, "../../uploads");

fs.ensureDirSync(baseUploadDir);

export const fileService = {
  // write your services here eg: to save image/doc/..etc
};
