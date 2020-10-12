const config = {
  transition: '.verticalIn',
  modules: {
    markdown: true
  },
  scenes: [

    {
      blocks: [
        {
          type: 'text',
          text: '# Slide 1',
          scale: 3,
          props: {
            colorvar: '.b'
          }
        }
      ]
    },

    {
      blocks: [
        {
          type: 'text',
          text: '# Slide 2',
          scale: 3,
          props: {
            colorvar: '.c',
            textPosition: '.tl',
            textAlign: 'left'
          }
        }
      ]
    },

    {
      blocks: [
        {
          type: 'text',
          text: '# Slide 1',
          scale: 3
        }
      ]
    }
  ]
}
