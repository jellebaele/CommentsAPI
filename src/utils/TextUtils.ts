import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';
const { window } = new JSDOM('');
// @ts-expect-error The typings are mistaken in DOMPurify library: https://github.com/cure53/DOMPurify/issues/437
const domPurify = DOMPurify(window);

export default class TextUtils {
  public static sanitize(unsafeText?: string): string {
    if (unsafeText === undefined) return '';
    return domPurify.sanitize(unsafeText);
  }
}
