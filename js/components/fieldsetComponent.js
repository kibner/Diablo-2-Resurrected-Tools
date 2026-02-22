import { Enum } from '../helpers/enum';
import { focusable } from 'tabbable';

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
};

const _toggleCollapsibleContent = function (name) {
  const _SCREEN_READER_ONLY_CLASS_NAME = 'sr-only';
  const collapsibleContent = _getCollapsibleContent(name);

  if (collapsibleContent.classList.contains(_SCREEN_READER_ONLY_CLASS_NAME)) {
    collapsibleContent.classList.remove(_SCREEN_READER_ONLY_CLASS_NAME);
    _setTabindexAttributeForAllFocusableNodes(collapsibleContent, 0);
  } else {
    _setTabindexAttributeForAllFocusableNodes(collapsibleContent, -1);
    collapsibleContent.classList.add(_SCREEN_READER_ONLY_CLASS_NAME);
  }
};

const _getCollapsibleContent = function (input) {
  const rootFieldset = _getRootFieldset(input);

  return rootFieldset.querySelector(
    `.${_SELECTOR_CSS_CLASSES.COLLAPSIBLE_CONTENT}`,
  );
};

const _getRootFieldset = function (input) {
  return input.closest('fieldset');
};

const _setTabindexAttributeForAllFocusableNodes = function (
  rootNode,
  tabindexValue,
) {
  const focusableContent = focusable(rootNode);

  focusableContent.forEach((tabbableElement) => {
    tabbableElement.setAttribute('tabindex', tabindexValue);
  });
};

const _SELECTOR_CSS_CLASSES = Enum({
  COLLAPSIBLE_CONTENT: 'collapsible-content',
  TOGGLE_COLLAPSIBLE_CLASS_NAME: 'toggle-collapsible',
});

export {
  _getFieldsetComponent as GetFieldsetComponent,
  _toggleCollapsibleContent as ToggleCollapsibleContent,
  _SELECTOR_CSS_CLASSES as SelectorCssClasses,
};
