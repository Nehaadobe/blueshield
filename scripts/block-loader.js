import createBlockLoader from '../shared/scripts/block-loader.js';

// Site-owned loader settings. Add `styles: { blockName: url }` only for blocks that
// need a customer theme stylesheet on top of the shared CSS.
export const { loadBlock, loadSection, loadSections } = createBlockLoader({
  localBlocks: [],
  styles: {},
});
