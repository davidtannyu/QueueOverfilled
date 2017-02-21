export const parseText = (text) => {
  let parsedText = text;
  parsedText = parsedText.replace(/\*\*([^*][^*]+)\*\*/g,"<b>$1</b>");
  parsedText = parsedText.replace(/\*([^*]+)\*/g,"<i>$1</i>");
  return parsedText;
};
