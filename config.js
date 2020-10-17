const config = {
  colors: 'a',
  transition: 'a',
  blockVar: 'c',
  controllers: {
    fullscreen: true,
    focus: true
  },
  scenes: [
    {
      blocks: [
        {
          scale: 3,
          type: 'text',
          text: '<h1>Hello <b>PRESENTA!</b></h1>'
        }
      ],
      colorVar: 'b'
    },
    {
      blocks: [
        {
          scale: 2,
          type: 'text',
          text: '<h2>Scene 2</h2>'
        }
      ],
      colorVar: 'a'
    },
    {
      blocks: [
        {
          scale: 2,
          type: 'text',
          text: '<h2>Scene 3</h2>'
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1562797807-aa9baed9a414?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        }
      ]
    }
  ]
}
