const config = {
  colors: 'adele',
  transition: 'fadeIn',
  blockVar: 'c',
  controllers: {
    fullscreen: true,
    focus: true,
    swiper: true,
    markdown: true
  },
  modules: {
    highlightjs: 'monokai'
  },
  scenes: [
    {
      blocks: [
        {
          textVar: 'title',
          type: 'text',
          text: '<h1>Hello <b>PRESENTA!</b></h1>'
        }
      ],
      colorVar: 'sec'
    },
    {
      blocks: [
        {
          textVar: 'title',
          type: 'text',
          text: '<h2>Scene 2</h2>'
        }
      ],
      colorVar: 'main'
    },
    {
      blocks: [
        {
          textVar: 'title',
          type: 'text',
          text: '<h2>Scene 3</h2>'
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1562797807-aa9baed9a414?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        }
      ]
    },
    {
      blocks: [
        {
          type: 'text',
          text: `## This block:
\`\`\`js
{
  type: 'text',
  text: '## This block:'
}
\`\`\`
`,
          textVar: 'title'
        }
      ],
      colorVar: 'main'
    },
    {
      blocks: [
        {
          blockVar: '',
          type: 'youtube',
          url: 'Mh4f9AYRCZY'
        }
      ]
    }
  ]
}
