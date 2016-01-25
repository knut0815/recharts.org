export default {
  name: 'ReferenceLine',
  props: [
    {
      name: 'customContent',
      type: 'ReactElement',
      defaultVal: 'null',
      isOptional: true,
      desc: 'If set a React element, the option is the custom react element of rendering tooltip.',
    }, {
      name: 'viewBox',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The box of viewing area, which has the shape of {x: someVal, y: someVal, width: someVal, height: someVal}.',
    }, {
      name: 'active',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If set true, the tooltip is displayed. If set false, the tooltip is hidden.',
    }, {
      name: 'separator',
      type: 'String',
      defaultVal: ' : ',
      isOptional: false,
      desc: 'The separator between name and value.',
    }, {
      name: 'formatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The formatter function of value in tooltip.',
    }, {
      name: 'offset',
      type: 'Number',
      defaultVal: '10',
      isOptional: false,
      desc: 'The offset size between the position of tooltip and the active position.',
    }, {
      name: 'itemStyle',
      type: 'Object',
      defaultVal: '{}',
      isOptional: false,
      desc: 'The style of default tooltip content item which is a li element.',
    },  {
      name: 'wrapperStyle',
      type: 'Object',
      defaultVal: '{}',
      isOptional: false,
      desc: 'The style of tooltip wrapper which is a dom element.',
    },  {
      name: 'labelStyle',
      type: 'Object',
      defaultVal: '{}',
      isOptional: false,
      desc: 'The style of default tooltip label which is a p element.',
    }, {
      name: 'coordinate',
      type: 'Object',
      defaultVal: '{ x: 0, y: 0 }',
      isOptional: false,
      desc: 'The coordinate of tooltip position',
    }, {
      name: 'label',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The label value which is active now.',
    }, {
      name: 'cursor',
      type: 'Boolean | Object | ReactElement',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If set false, no cursor will be drawed when tooltip is active. If set a object, the option is the configuration of cursor. If set a React element, the option is the custom react element of drawing cursor.',
    }, {
      name: 'data',
      type: 'Array',
      defaultVal: '[]',
      isOptional: false,
      desc: 'The source data of the content to be displayed in the tooltip, and each value in the array has the shape of "{key: someVal, value: someVal, unit: someVal}".',
    },
  ],
  examples: [
    {
      name: 'Simple AreaChart',
      url: '/examples#areaChart',
    }
  ]
};
