export const hashsRemoves = (code: string) => {
  // Captura os hashes das classes
  const matchesHashCss = Array.from(
    code.matchAll(/(?:rarui-[\w|-]+)(__\w{7,})/gm),
    (m) => m[1],
  );

  // Captura os hashes das variáveis CSS dentro dos atributos style
  const matchesHashVars = Array.from(
    code.matchAll(/--[\w-]+(__\w{7,})/g),
    (m) => m[1],
  );

  const uniqueMatches = [...new Set([...matchesHashCss, ...matchesHashVars])];

  let newContent = code;

  uniqueMatches?.forEach((hash) => {
    const regex = new RegExp(`${hash}\\b`, "gm");
    newContent = newContent.replace(regex, "");
  });

  return newContent.replace(' class=""', "");
};
