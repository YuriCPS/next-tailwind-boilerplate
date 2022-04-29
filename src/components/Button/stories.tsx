import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const Amber: Story<ButtonProps> = (args) => <Button {...args} />;

Amber.args = {
  href: '#',
  text: 'Button',
  color: 'amber',
  size: 'medium',
};

export const Blue: Story<ButtonProps> = (args) => <Button {...args} />;

Blue.args = {
  href: '#',
  text: 'Button',
  color: 'blue',
  size: 'medium',
};

export const Green : Story<ButtonProps> = (args) => <Button {...args} />;

Green.args = {
  href: '#',
  text: 'Button',
  color: 'green',
  size: 'medium',
};

export const Neutral : Story<ButtonProps> = (args) => <Button {...args} />;

Neutral.args = {
  href: '#',
  text: 'Button',
  color: 'neutral',
  size: 'medium',
};

export const Red : Story<ButtonProps> = (args) => <Button {...args} />;

Red.args = {
  href: '#',
  text: 'Button',
  color: 'red',
  size: 'medium',
};

export const Violet : Story<ButtonProps> = (args) => <Button {...args} />;

Violet.args = {
  href: '#',
  text: 'Button',
  color: 'violet',
  size: 'medium',
};
