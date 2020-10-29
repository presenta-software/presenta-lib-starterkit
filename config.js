const config = {
  colors: 'adele',
  fonts: 'heron',
  transition: 'fadeIn',
  blockVar: 'c',
  controllers: {
    fullscreen: true,
    focus: true,
    swiper: true,
    markdown: true,
    preload: true,
    pagenum: true,
    progressbar: true
  },
  modules: {
    highlightjs: 'monokai'
  },
  scenes: [
    {
      blocks: [
        {
          textVar: 'title',
          scale: 4,
          type: 'text',
          text: `<h1>Hello <b>PRESENTA!</b></h1>
          <small>press <mark>f</mark> to go fullscreen</small>`
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
          textVar: 'text',
          type: 'text',
          step: 'li',
          text: `<h1>Scene 3</h1>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>`
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
    },
    {
      blocks: [
        {
          type: 'text',
          textVar: 'title',
          text: `# Go ahead
## it\'s your **turn!**

Just edit <mark>config.js</mark>`
        }
      ]
    }
  ]
}
