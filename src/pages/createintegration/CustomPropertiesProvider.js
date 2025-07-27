import CustomRestProps from "./CustomRestProps";


export default function CustomPropertiesProvider(propertiesPanel) {
  console.log('✅ CustomPropertiesProvider initialized');
  propertiesPanel.registerProvider(500, this);
}

CustomPropertiesProvider.$inject = ['propertiesPanel'];

CustomPropertiesProvider.prototype.getGroups = function (element) {
  console.log('🧩 getGroups called for:', element);

  return function (groups) {
    const generalGroup = groups.find(group => group.id === 'general');
    if (generalGroup) {
      console.log('💡 Injecting REST props...');
      CustomRestProps(generalGroup, element);
    }
    return groups;
  };
};
