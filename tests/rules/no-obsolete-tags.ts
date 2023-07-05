import { RuleTester } from 'eslint';
import { ErrorMessage } from '../../src/messages/errors';
import noObsoleteTags from '../../src/rules/no-obsolete-tags';

const tester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    jsx: true,
  },
});

const obsoleteHtmlTagMap = {
  acronym: 'abbr',
  applet: 'object',
  basefont: 'css: font-family: serif;',
  big: 'css: font-size: larger;',
  center: 'css: text-align: center;',
  dir: 'css: display: block;',
  font: 'css: font-family: serif;',
  frame: 'iframe',
  frameset: 'iframe',
  noframes: 'iframe',
  strike: 'css: text-decoration: line-through;',
  tt: 'css: font-family: monospace;',
};

tester.run('no-obsolete-tags', noObsoleteTags, {
  valid: [
    {
      filename: 'valid.tsx',
      code: `(props: props) => <abbr></abbr> `,
    },
    {
      filename: 'valid.tsx',
      code: `(props: props) => <object></object> `,
    },
    {
      filename: 'valid.tsx',
      code: `(props: props) => <iframe></iframe> `,
    },
  ],
  invalid: [
    {
      filename: 'invalid.tsx',
      code: `(props: props) => <acronym></acronym> `,
      errors: [ErrorMessage.NO_OBSOLETE_TAGS('acronym', obsoleteHtmlTagMap['acronym'] ?? '')],
    },
    {
      filename: 'invalid.tsx',
      code: `(props: props) => <applet></applet> `,
      errors: [ErrorMessage.NO_OBSOLETE_TAGS('applet', obsoleteHtmlTagMap['applet'] ?? '')],
    },
    {
      filename: 'invalid.tsx',
      code: `(props: props) => <basefont></basefont> `,
      errors: [ErrorMessage.NO_OBSOLETE_TAGS('basefont', obsoleteHtmlTagMap['basefont'] ?? '', true)],
    },
    {
      filename: 'invalid.tsx',
      code: `(props: props) => <big></big> `,
      errors: [ErrorMessage.NO_OBSOLETE_TAGS('big', obsoleteHtmlTagMap['big'] ?? '', true)],
    },
    {
      filename: 'invalid.tsx',
      code: `(props: props) => <center></center> `,
      errors: [ErrorMessage.NO_OBSOLETE_TAGS('center', obsoleteHtmlTagMap['center'] ?? '', true)],
    },
    {
      filename: 'invalid.tsx',
      code: `(props: props) => <dir></dir> `,
      errors: [ErrorMessage.NO_OBSOLETE_TAGS('dir', obsoleteHtmlTagMap['dir'] ?? '', true)],
    },
    {
      filename: 'invalid.tsx',
      code: `(props: props) => <font></font> `,
      errors: [ErrorMessage.NO_OBSOLETE_TAGS('font', obsoleteHtmlTagMap['font'] ?? '', true)],
    },
    {
      filename: 'invalid.tsx',
      code: `(props: props) => <frame></frame> `,
      errors: [ErrorMessage.NO_OBSOLETE_TAGS('frame', obsoleteHtmlTagMap['frame'] ?? '')],
    },
    {
      filename: 'invalid.tsx',
      code: `(props: props) => <frameset></frameset> `,
      errors: [ErrorMessage.NO_OBSOLETE_TAGS('frameset', obsoleteHtmlTagMap['frameset'] ?? '')],
    },
    {
      filename: 'invalid.tsx',
      code: `(props: props) => <noframes></noframes> `,
      errors: [ErrorMessage.NO_OBSOLETE_TAGS('noframes', obsoleteHtmlTagMap['noframes'] ?? '')],
    },
    {
      filename: 'invalid.tsx',
      code: `(props: props) => <strike></strike> `,
      errors: [ErrorMessage.NO_OBSOLETE_TAGS('strike', obsoleteHtmlTagMap['strike'] ?? '', true)],
    },
    {
      filename: 'invalid.tsx',
      code: `(props: props) => <tt></tt> `,
      errors: [ErrorMessage.NO_OBSOLETE_TAGS('tt', obsoleteHtmlTagMap['tt'] ?? '', true)],
    },
  ],
});
