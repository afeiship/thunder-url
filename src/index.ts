import { Base64 } from 'js-base64';

// https://www.bilibili.com/video/BV118411q7BN

class ThunderUrl {
  static encode(inURL: string): string {
    const encoded = Base64.encode(`AA${inURL}ZZ`);
    return `thunder://${encoded}`;
  }

  static decode(inThunderURL: string): string {
    const thunderDataUri = inThunderURL.slice(10);
    const decoded =  Base64.decode(thunderDataUri);
    return decoded.slice(2, -2);
  }
}

export default ThunderUrl;
