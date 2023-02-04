// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Comment {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Comment from './Comment'

export const generated = () => {
  return (
    <Comment
      comment={{
        name: 'Jaspreet Singh',
        body: 'This is the first comment!',
        createdAt: '2023-02-04T12:34:56Z'
      }}
    />
  )
}

export default {
  title: 'Components/Comment',
  component: Comment,
}