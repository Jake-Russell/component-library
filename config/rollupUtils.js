const getFileName = (fileName) =>
  fileName?.replace(/\.[^.]+$/, '.css') ?? fileName;

export const InjectStylesheetImport = () => ({
  name: 'inject-stylesheet-import',
  generateBundle(outputOptions, bundle) {
    const format = outputOptions.format;

    for (const [fileName, chunk] of Object.entries(bundle)) {
      if (chunk.type !== 'chunk') continue;

      const cssFileName = getFileName(fileName);
      const importStatement =
        format === 'cjs'
          ? `require("./${cssFileName}");\n`
          : format === 'es'
          ? `import "./${cssFileName}";\n`
          : '';

      if (importStatement) {
        chunk.code = importStatement + chunk.code;
      }
    }
  },
});
