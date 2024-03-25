import { Base64 } from 'js-base64';

const thunderUrl = (inURL: string): string => {
  const encoded = Base64.encode(`AA${inURL}ZZ`);
  return `thunder://${encoded}`;
};

export default thunderUrl;
