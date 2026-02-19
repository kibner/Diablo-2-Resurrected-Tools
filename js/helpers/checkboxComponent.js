const _getCheckboxComponent = function (template, fieldsetName, checkboxId, checkboxName, checkboxLabel) {
  const clone = document.importNode(template.content, true);
  const label = clone.querySelector(`label`);
  const checkbox = clone.querySelector(`input[type="checkbox"]`);

  checkbox.setAttribute('id', checkboxId);
  checkbox.setAttribute('name', fieldsetName);
  checkbox.setAttribute('value', checkboxName);

  label.setAttribute('for', checkbox.getAttribute('id'));
  label.append(checkboxLabel);

  return label;
}

export {_getCheckboxComponent as GetCheckboxComponent}
