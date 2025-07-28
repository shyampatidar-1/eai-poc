import CustomRestProps from "./CustomRestProps";

export default function CustomPropertiesProvider(propertiesPanel, translate) {
  console.log('✅ CustomPropertiesProvider Registered');
  this.getGroups = function (element) {
    return function (groups) {
      const generalGroup = groups.find(group => group.id === 'general');
      if (generalGroup) {
        CustomRestProps(generalGroup, element);
      }
      return groups;
    };
  };
}

CustomPropertiesProvider.$inject = ['propertiesPanel', 'translate'];
CustomPropertiesProvider.prototype.propertiesProvider = true;
