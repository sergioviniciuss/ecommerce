import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Default: Story = (args) => <Main {...args} />
Default.args = {
  title: 'title default',
  description: 'description default'
}

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'title basic',
  description: 'description basic'
}
