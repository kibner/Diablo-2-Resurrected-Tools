import {Enum} from "../helpers/enum";

const _getFieldsetComponent = function (name, labelText) {
  const template = document.querySelector(`#fieldset-template`);
  const clone = document.importNode(template.content, true);
  const fieldset = clone.querySelector(`fieldset`);
  const label = clone.querySelector(`label`);
  const input = clone.querySelector(`input`);
  fieldset.setAttribute('name', name);

  input.setAttribute(`id`, `${name}-collapsible`);

  label.setAttribute('for', input.getAttribute('id'));
  label.append(labelText);

  return clone;
}

const _SELECTOR_CSS_CLASSES = Enum({
  COLLAPSIBLE_CONTENT: 'collapsible-content',
});

export {_getFieldsetComponent as GetFieldsetComponent, _SELECTOR_CSS_CLASSES as SelectorCssClasses};
