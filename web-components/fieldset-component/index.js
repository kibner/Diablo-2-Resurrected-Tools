import templateHtmlText from 'bundle-text:./template.html';

class FieldsetComponent extends HTMLElement {
  constructor() {
    super();

    const template = new DOMParser()
      .parseFromString(templateHtmlText, 'text/html')
      .querySelector('template');

    const templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(document.importNode(templateContent, true));
  }
}

customElements.define('fieldset-component', FieldsetComponent);
