
import { defineCommand } from "citty";
import consola from "consola";

export default defineCommand({
  meta: { name: "init", description: "Initialization" },
  async run() {
    
    consola.info("Initializing project...");
  },
});
