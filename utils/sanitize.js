let DOMPurify;

if (typeof window !== "undefined") {
  DOMPurify = require("dompurify");
} else {
  const createDOMPurify = require("dompurify");
  const { JSDOM } = require("jsdom");
  const window = new JSDOM("").window;
  DOMPurify = createDOMPurify(window);
}
export const sanitizeHTML = (dirty) => {
  if (!DOMPurify) return dirty;
  return DOMPurify.sanitize(dirty);
};
