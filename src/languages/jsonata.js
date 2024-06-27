/*
Language: JSONata
Description: JSONata is a lightweight query and transformation language for JSON data.
Author: Vlad Dimov <devdimov@proton.me>
Website: http://www.jsonata.org
*/

module.exports = function (hljs) {
  const keywords = "function and or in";

  const literals = [
    "true",
    "false",
  ];

  const jsonataVariable = {
    scope: 'variable',
    begin: /\$[a-zA-Z0-9_]*/,
    relevance: 5
  };

  const jsonataFunction = {
    scope: 'title.function',
    begin: /\$\w*(?=\()/,
    relevance: 5
  };

  const jsonataBackticks = {
    scope: 'string',
    begin: '`',
    end: '`',
    illegal: '\\n',
  };

  const jsonLikeAttribute = {
    className: 'attr',
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
  };

  return {
    name: 'JSONata',
    aliases: ['jsonata'],
    keywords: {
      keyword: keywords,
      literal: literals
    },
    contains: [
      jsonataVariable,
      jsonataFunction,
      jsonataBackticks,
      jsonLikeAttribute,
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      hljs.C_NUMBER_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
    ]
  };
}
