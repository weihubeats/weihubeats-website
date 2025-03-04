// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  RocketMQ: [
    {
      type: 'category',
      label: '源码分析',
      collapsed: false,
      items: [
          {
              type: 'autogenerated',
              dirName: 'MQ/RocketMQ/源码分析',
          },
      ],
  },
  {
    type: 'category',
    label: '最佳实践',
    collapsed: false,
    items: [
        {
            type: 'autogenerated',
            dirName: 'MQ/RocketMQ/最佳实践',
        },
    ],
},
  ],
  Kafka: [
    {
        type: 'category',
        label: 'Overview',
        collapsed: true,
        items: [
            'MQ/Kafka/index',
        ],
    }
  ],
  springboot: [
    {
      type: 'category',
      label: 'Spring Boot',
      collapsed: false,
      items: [
          {
              type: 'autogenerated',
              dirName: 'java/spring-boot',
          },
      ],
  },
  ],
  springcloud: [
    {
      type: 'category',
      label: 'Spring Cloud Gateway',
      collapsed: false,
      items: [
          {
              type: 'autogenerated',
              dirName: 'java/spring-cloud/spring-cloud-gateway',
          },
      ],
  },
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
