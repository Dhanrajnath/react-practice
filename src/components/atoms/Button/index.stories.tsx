import { Meta, StoryObj } from '@storybook/react';
import { IButtonProps, MUIButton } from '.';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default {
    title: 'Atoms/MUIButton',
    component: MUIButton,
    argTypes: {
        onClick: { action: 'clicked' },
    },
} as Meta;

type MUIButtonType = StoryObj<IButtonProps>;


export const Primary: MUIButtonType = {
    args: {
        size: 'large',
        variant: 'contained',
        color: 'primary',
        children: 'Primary Button',
        onClick: () => { console.log('Clicked!') }
    }
};

export const DeleteButton: MUIButtonType = {
    args: {
        size: 'large',
        variant: 'outlined',
        color: 'error',
        children: 'DELETE',
        startIcon: <DeleteIcon />
    }
}

export const SubmitButton: MUIButtonType = {
    args: {
        size: 'large',
        variant: 'text',
        color: 'success',
        children: 'SUBMIT'
    }
}
