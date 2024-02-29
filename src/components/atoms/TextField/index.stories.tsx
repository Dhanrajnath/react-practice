import type { Meta, StoryObj } from '@storybook/react';
import MUITextField from ".";

const meta: Meta<typeof MUITextField> = {
  title: "Atoms/MUITextField",
  component: MUITextField
}

export default meta;

type MUITextFieldStory = StoryObj<typeof MUITextField>;

export const UsernameTextField: MUITextFieldStory = {
  args: {
    variant: 'outlined',
    label: 'Username',
    required: true,
    placeholder: 'enter your username',
    onChange: (event: any) => console.log(event.target.value),
    sx: { borderColor: "blue" }
  }
}

export const PasswordTextField: MUITextFieldStory = {
  args: {
    type: 'password',
    variant: 'outlined',
    label: 'Password',
    required: true,
    placeholder: 'enter your password',
    onChange: (event: any) => console.log(event.target.value),
    sx: { borderColor: "blue" }
  }
}