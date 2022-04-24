import { Story, Meta } from '@storybook/react'
import Button, {ButtonProps}from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  href: '#',
  text: 'Button',
  color: 'amber',
  size: 'medium'
}
