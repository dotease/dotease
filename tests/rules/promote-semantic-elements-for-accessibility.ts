import { RuleTester } from 'eslint';
import promoteSemanticElementsForAccessibility from '../../src/rules/promote-semantic-elements-for-accessibility';

const tester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    jsx: true,
  },
});

tester.run('promote-semantic-elements-for-accessibility', promoteSemanticElementsForAccessibility, {
  valid: [
    {
      filename: 'valid_header.tsx', // filename must be set to tell parser this code is tsx
      code: `(props: props) => <header></header>`,
    },
    {
      filename: 'valid_nav.tsx', // filename must be set to tell parser this code is tsx
      code: `(props: props) => <nav></nav>`,
    },
    {
      filename: 'valid_main.tsx', // filename must be set to tell parser this code is tsx
      code: `(props: props) => <main></main>`,
    },
    {
      filename: 'valid_footer.tsx', // filename must be set to tell parser this code is tsx
      code: `(props: props) => <footer></footer>`,
    },
    {
      filename: 'valid_aside.tsx', // filename must be set to tell parser this code is tsx
      code: `(props: props) => <aside></aside>`,
    },
  ],
  invalid: [
    {
      filename: 'invalid_div_banner.tsx',
      code: `(props: props) => <div role="banner"></div>`,
      errors: ['Use <header> instead of <div role="banner">'],
    },
    {
      filename: 'invalid_div_navigation.tsx',
      code: `(props: props) => <div role="navigation"></div>`,
      errors: ['Use <nav> instead of <div role="navigation">'],
    },
    {
      filename: 'invalid_div_id_navigation.tsx',
      code: `(props: props) => <div id="navigation"></div>`,
      errors: ['Use <nav> instead of <div id="navigation">'],
    },
    {
      filename: 'invalid_section_role_navigation.tsx',
      code: `(props: props) => <section role="navigation"></section>`,
      errors: ['Use <nav> instead of <section role="navigation">'],
    },
    {
      filename: 'invalid_div_main.tsx',
      code: `(props: props) => <div role="main"></div>`,
      errors: ['Use <main> instead of <div role="main">'],
    },
    {
      filename: 'invalid_div_contentinfo.tsx',
      code: `(props: props) => <div role="contentinfo"></div>`,
      errors: ['Use <footer> instead of <div role="contentinfo">'],
    },
    {
      filename: 'invalid_div_feed.tsx',
      code: `(props: props) => <div role="feed"></div>`,
      errors: ['Use <article> instead of <div role="feed">'],
    },
    {
      filename: 'invalid_div_complementary.tsx',
      code: `(props: props) => <div role="complementary"></div>`,
      errors: ['Use <aside> instead of <div role="complementary">'],
    },
    {
      filename: 'invalid_div_form.tsx',
      code: `(props: props) => <div role="form"></div>`,
      errors: ['Use <form> instead of <div role="form">'],
    },
    {
      filename: 'invalid_div_search.tsx',
      code: `(props: props) => <div role="search"></div>`,
      errors: ['Use <form> instead of <div role="search">'],
    },
    {
      filename: 'invalid_div_textbox.tsx',
      code: `(props: props) => <div role="textbox"></div>`,
      errors: ['Use <input> instead of <div role="textbox">'],
    },
    {
      filename: 'invalid_div_checkbox.tsx',
      code: `(props: props) => <div role="checkbox"></div>`,
      errors: ['Use <input> instead of <div role="checkbox">'],
    },
    {
      filename: 'invalid_div_combobox.tsx',
      code: `(props: props) => <div role="combobox"></div>`,
      errors: ['Use <select> instead of <div role="combobox">'],
    },
    {
      filename: 'invalid_div_listbox.tsx',
      code: `(props: props) => <div role="listbox"></div>`,
      errors: ['Use <select> instead of <div role="listbox">'],
    },
    {
      filename: 'invalid_div_menu.tsx',
      code: `(props: props) => <div role="menu"></div>`,
      errors: ['Use <ul> instead of <div role="menu">'],
    },
    {
      filename: 'invalid_div_button.tsx',
      code: `(props: props) => <div role="button"></div>`,
      errors: ['Use <button> instead of <div role="button">'],
    },
    {
      filename: 'invalid_div_link.tsx',
      code: `(props: props) => <div role="link"></div>`,
      errors: ['Use <a> instead of <div role="link">'],
    },
    {
      filename: 'invalid_div_article.tsx',
      code: `(props: props) => <div role="article"></div>`,
      errors: ['Use <article> instead of <div role="article">'],
    },
    {
      filename: 'invalid_div_list.tsx',
      code: `(props: props) => <div role="list"></div>`,
      errors: ['Use <ul> instead of <div role="list">'],
    },
    {
      filename: 'invalid_div_listitem.tsx',
      code: `(props: props) => <div role="listitem"></div>`,
      errors: ['Use <li> instead of <div role="listitem">'],
    },
    {
      filename: 'invalid_div_row.tsx',
      code: `(props: props) => <div role="row"></div>`,
      errors: ['Use <tr> instead of <div role="row">'],
    },
    {
      filename: 'invalid_div_cell.tsx',
      code: `(props: props) => <div role="cell"></div>`,
      errors: ['Use <td> instead of <div role="cell">'],
    },
    {
      filename: 'invalid_div_table.tsx',
      code: `(props: props) => <div role="table"></div>`,
      errors: ['Use <table> instead of <div role="table">'],
    },
    {
      filename: 'invalid_div_rowgroup.tsx',
      code: `(props: props) => <div role="rowgroup"></div>`,
      errors: ['Use <tbody> instead of <div role="rowgroup">'],
    },
    {
      filename: 'invalid_div_columnheader.tsx',
      code: `(props: props) => <div role="columnheader"></div>`,
      errors: ['Use <th> instead of <div role="columnheader">'],
    },
    {
      filename: 'invalid_div_rowheader.tsx',
      code: `(props: props) => <div role="rowheader"></div>`,
      errors: ['Use <th> instead of <div role="rowheader">'],
    },
    {
      filename: 'invalid_div_grid.tsx',
      code: `(props: props) => <div role="grid"></div>`,
      errors: ['Use <table> instead of <div role="grid">'],
    },
    {
      filename: 'invalid_div_rowheader.tsx',
      code: `(props: props) => <div role={"rowheader"}></div>`,
      errors: ['Use <th> instead of <div role="rowheader">'],
    },
    {
      filename: 'invalid_div_grid.tsx',
      code: `(props: props) => <div role={"grid"}></div>`,
      errors: ['Use <table> instead of <div role="grid">'],
    },
  ],
});
