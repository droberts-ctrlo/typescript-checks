import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: { ...globals.browser, ...globals.jest } } },
  { ignores: ["**/dist/**", "**/node_modules/**", "**/*.test.*", "eslint.config.mjs", "jest.config.js", "babel.config.js"] },
  { plugins: { "@stylistic": stylistic } },
  tseslint.configs.recommended,
  stylistic.configs.recommended,
  {
    rules: {
      "@stylistic/semi": "error",
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/indent": ["error", 4],
    }
  }
]);
