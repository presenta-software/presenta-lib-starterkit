const config = {
  colors: 'adele',
  fonts: 'heron',
  transition: 'fadeIn',
  controllers: {
    fullscreen: true,
    focus: true,
    swiper: true,
    markdown: true,
    preload: true,
    pagenum: true,
    progressbar: true,
    consoleNotes: {
      clear: true
    }
  },
  modules: {
    highlightjs: 'gradient-dark'
  },
  scenes: [
    {
      blocks: [
        {
          textVar: 'title',
          scale: 4,
          type: 'text',
          text: `<h1>Hello <b>PRESENTA!</b></h1>
            <p>press <mark>f</mark> to go fullscreen</p>
            <p>speaker notes in Dev Console</p>
          `
        }
      ],
      colorVar: 'sec',
      notes: 'Welcome to all my guests!'
    },
    {
      blocks: [
        {
          textVar: 'title',
          type: 'text',
          text: '<h2>Scene 2</h2>'
        }
      ],
      colorVar: 'main',
      notes: 'This is the second slide, can you believe it?'
    },
    {
      blocks: [
        {
          textVar: 'text',
          type: 'text',
          step: 'li',
          responsive: true,
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
      ],
      notes: `I have a lot of things to say such as:

First sentence

Second sentence
`
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
