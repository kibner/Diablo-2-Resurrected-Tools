import templateHtmlText from 'bundle-text:./template.html';
import { Equipment } from '../../../js/data/equipment_data/index.js';

class EquipmentFieldset extends HTMLElement {
  constructor() {
    super();

    const template = new DOMParser()
      .parseFromString(templateHtmlText, 'text/html')
      .querySelector('template');

    const templateContent = template.content;

    const fieldsetComponent =
      templateContent.querySelector('fieldset-component');

    this.appendCheckboxes(fieldsetComponent);

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(document.importNode(templateContent, true));
  }

  appendCheckboxes(fieldsetComponent) {
    for (let i = 0; i < Equipment.length; i++) {
      const checkboxComponent = document.createElement('checkbox-component');
      checkboxComponent.slot = 'fields';

      const checkboxName = document.createElement('span');
      checkboxName.slot = 'checkbox-name';
      checkboxName.innerHTML = Equipment[i].name;

      checkboxComponent.appendChild(checkboxName);
      fieldsetComponent.appendChild(checkboxComponent);
    }
  }
}

customElements.define('equipment-fieldset', EquipmentFieldset);
