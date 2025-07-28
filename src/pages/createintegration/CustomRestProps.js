// import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

// export default function CustomRestProps(group, element) {
//   const bo = element.businessObject;

//   console.log('Checking for REST fields:', bo);

//   if (bo && bo.connectorType === 'REST') {
//     console.log('✅ Showing REST properties panel');

//     group.entries.push(
//       entryFactory.textField({
//         id: 'restUrl',
//         label: 'REST URL',
//         modelProperty: 'restUrl'
//       }),
//       entryFactory.selectBox({
//         id: 'restMethod',
//         label: 'HTTP Method',
//         modelProperty: 'restMethod',
//         selectOptions: [
//           { name: 'GET', value: 'GET' },
//           { name: 'POST', value: 'POST' },
//           { name: 'PUT', value: 'PUT' },
//           { name: 'DELETE', value: 'DELETE' }
//         ]
//       }),
//       entryFactory.textField({
//         id: 'headers',
//         label: 'Headers',
//         modelProperty: 'headers'
//       }),
//       entryFactory.textField({
//         id: 'timeout',
//         label: 'Timeout (ms)',
//         modelProperty: 'timeout'
//       })
//     );
//   }

//   return group;
// }
// custom-rest-props.js
import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

export default function CustomRestProps(group, element) {
  const bo = element.businessObject;
  console.log('✅ Injecting REST Props for', bo);
  if (bo && bo.connectorType === 'REST') {
    console.log('✅ Injecting REST Props');

    group.entries.push(
      entryFactory.textField({
        id: 'restUrl',
        label: 'REST URL',
        modelProperty: 'restUrl',
      }),
      entryFactory.selectBox({
        id: 'restMethod',
        label: 'HTTP Method',
        modelProperty: 'restMethod',
        selectOptions: [
          { name: 'GET', value: 'GET' },
          { name: 'POST', value: 'POST' },
          { name: 'PUT', value: 'PUT' },
          { name: 'DELETE', value: 'DELETE' },
        ],
      })
    );
  }
}

