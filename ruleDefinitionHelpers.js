export const flattenRuleDefinitions = (ruleBookDefinitions) => {
  const ruleBookDefinitionValues = Object.values(ruleBookDefinitions);
  return Object.assign({}, ...ruleBookDefinitionValues);
};
