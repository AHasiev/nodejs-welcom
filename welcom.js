import os from "os";
function names() {
  return `Привет, юзер. Вижу ты зашел с ${os.type()}`;
}
export default names;
