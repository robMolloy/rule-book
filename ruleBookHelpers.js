export const createRuleFromRuleDefinition = (ruleDefinition) => (...props) => {
  const { test, msg } = ruleDefinition(...props);

  return (val) => test(val) || msg;
};

export const createRulesFromRuleDefinitions = (ruleDefinitions = {}) => {
  const newRules = {};

  const ruleDefinitionEntries = Object.entries(ruleDefinitions);
  ruleDefinitionEntries.forEach(([ruleDefinitionName, ruleDefinition]) => {
    newRules[ruleDefinitionName] = createRuleFromRuleDefinition(ruleDefinition);
  });

  return newRules;
};

const createSomeRulesFromRuleDefinitions = (ruleDefinitions, ruleDefinitionNames) => {
  const newRules = {};

  ruleDefinitionNames.forEach((ruleDefinitionName) => {
    const ruleDefinition = ruleDefinitions[ruleDefinitionName];
    newRules[ruleDefinitionName] = createRuleFromRuleDefinition(ruleDefinition);
  });

  return newRules;
};

export const createUseRulesFromRuleDefinitions = (ruleDefinitions) => (ruleDefinitionNames) => {
  const isUndefined = ruleDefinitionNames === undefined;
  ruleDefinitionNames = isUndefined ? Object.keys(ruleDefinitions) : ruleDefinitionNames;

  const isString = typeof ruleDefinitionNames === "string";
  ruleDefinitionNames = isString ? [ruleDefinitionNames] : ruleDefinitionNames;

  return createSomeRulesFromRuleDefinitions(ruleDefinitions, ruleDefinitionNames);
};

export const createUseRules = createUseRulesFromRuleDefinitions;
