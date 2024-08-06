import fs from "fs";
import path from "path";

const args = process.argv.slice(2);
const tsconfigPath = getTsconfigPath();
const tsconfigTmpPath = tsconfigPath.replace(
  "tsconfig.json",
  "tsconfig.tmp.json",
);

function getTsconfigPath() {
  if (args.length === 0) {
    console.error("Please provide the path to the tsconfig.json file.");
    process.exit(1);
  }

  return path.resolve(process.cwd(), args[0]);
}

// Função para atualizar o tsconfig.json
function updateTsconfig() {
  fs.readFile(tsconfigPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading tsconfig.json:", err);
      process.exit(1);
    }

    let tsconfig;
    try {
      tsconfig = JSON.parse(data);
    } catch (jsonErr) {
      console.error("Error parsing tsconfig.json:", jsonErr);
      process.exit(1);
    }

    // Cria uma cópia do tsconfig.json para tsconfig.tmp.json
    fs.writeFile(
      tsconfigTmpPath,
      JSON.stringify(tsconfig, null, 2),
      "utf8",
      (writeErr) => {
        if (writeErr) {
          console.error("Error writing tsconfig.tmp.json:", writeErr);
          process.exit(1);
        }

        console.log("tsconfig.tmp.json created successfully");

        // Modifica o tsconfig.json
        tsconfig.compilerOptions = tsconfig.compilerOptions || {};
        tsconfig.compilerOptions.paths = {};
        tsconfig.exclude = ["./src/*.stories.ts", "./src/**/*.stories.ts"];

        fs.writeFile(
          tsconfigPath,
          JSON.stringify(tsconfig, null, 2),
          "utf8",
          (finalWriteErr) => {
            if (finalWriteErr) {
              console.error("Error writing tsconfig.json:", finalWriteErr);
              process.exit(1);
            }

            console.log("tsconfig.json updated successfully");
          },
        );
      },
    );
  });
}

// Função para restaurar o tsconfig.json a partir do tsconfig.tmp.json
function restoreTsconfig() {
  fs.readFile(tsconfigTmpPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading tsconfig.tmp.json:", err);
      process.exit(1);
    }

    fs.writeFile(tsconfigPath, data, "utf8", (writeErr) => {
      if (writeErr) {
        console.error("Error writing tsconfig.json:", writeErr);
        process.exit(1);
      }

      console.log("tsconfig.json restored successfully");

      // Remove o arquivo temporário tsconfig.tmp.json
      fs.unlink(tsconfigTmpPath, (unlinkErr) => {
        if (unlinkErr) {
          console.error("Error deleting tsconfig.tmp.json:", unlinkErr);
          process.exit(1);
        }

        console.log("tsconfig.tmp.json deleted successfully");
      });
    });
  });
}

try {
  // Determina a ação com base no argumento
  const action = args[1] || "update";

  if (action === "update") {
    updateTsconfig();
  } else if (action === "restore") {
    restoreTsconfig();
  } else {
    console.error('Invalid action. Use "update" or "restore".');
    process.exit(1);
  }
} catch (error) {
  console.error(`\x1b[33m ${error.message} \x1b[0m`);
  process.exit(1);
}
