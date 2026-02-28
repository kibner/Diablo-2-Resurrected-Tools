import templateHtmlText from 'bundle-text:./template.html';

class MiscellaneousFieldset extends HTMLElement {
  constructor() {
    super();

    const template = new DOMParser()
      .parseFromString(templateHtmlText, 'text/html')
      .querySelector('template');

    const templateContent = template.content;

    const fieldsetComponent =
      templateContent.querySelector('fieldset-component');

    this.appendCheckbox(fieldsetComponent, 'Aura');
    this.appendCheckbox(fieldsetComponent, 'Exclude Ladder Only');

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(document.importNode(templateContent, true));
  }

  appendCheckbox(fieldsetComponent, name) {
    const checkboxComponent = document.createElement('checkbox-component');
    checkboxComponent.slot = 'fields';

    const checkboxName = document.createElement('span');
    checkboxName.slot = 'checkbox-name';
    checkboxName.innerHTML = name;

    checkboxComponent.appendChild(checkboxName);
    fieldsetComponent.appendChild(checkboxComponent);
  }
}

customElements.define('miscellaneous-fieldset', MiscellaneousFieldset);
