import templateHtmlText from 'bundle-text:./template.html';

customElements.define(
  'site-header',
  class extends HTMLElement {
    constructor() {
      super();

      let template = new DOMParser()
        .parseFromString(templateHtmlText, 'text/html')
        .getElementsByTagName('template')[0];

      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(document.importNode(templateContent, true));
    }
  },
);
