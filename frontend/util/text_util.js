const createDOMPurify = require('dompurify');
const DOMPurify = createDOMPurify(window);

export const parseText = (text) => {
  let parsedText = text;
  parsedText = parsedText.replace(/\*\*([^*][^*]+)\*\*/g,"<b>$1</b>");
  parsedText = parsedText.replace(/\*([^*]+)\*/g,"<i>$1</i>");
  parsedText = DOMPurify.sanitize(parsedText);
  return parsedText;
};
