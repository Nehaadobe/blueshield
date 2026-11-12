import { loadCSS } from '../../scripts/aem.js';
import decorateNotice from '../../shared/scripts/notice.js';

/**
 * Decorates the notice block using shared code.
 * @param {Element} block The block element.
 */
export default async function decorate(block) {
  await loadCSS(new URL('../../shared/styles/notice.css', import.meta.url).href);
  decorateNotice(block);
}