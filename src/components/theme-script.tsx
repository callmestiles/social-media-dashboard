export function ThemeScript() {
  const codeToRunBeforeAppLoads = `
    (function () {
      try {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDark) {
          document.documentElement.classList.add('dark');
        }
      } catch(e) {}
    })();
  `;

  return (
    <script dangerouslySetInnerHTML={{ __html: codeToRunBeforeAppLoads }} />
  );
}
