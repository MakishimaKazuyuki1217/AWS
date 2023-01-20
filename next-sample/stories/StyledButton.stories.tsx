import React, { useState } from 'react'
import { ComponentMeta, ComponentStory, Story } from '@storybook/react'
import { StyledButton, StyledButtonProps } from '../components/StyledButton'
import { linkTo } from '@storybook/addon-links'



// ファイル内のStoryの設定（メタデータオブジェクト）
export default {
    // グループ名
    title: 'StyledButton',
    // 使用するコンポーネント
    component: StyledButton,

} as ComponentMeta<typeof StyledButton>

export const Primary = (props : any)  => {
    return (
        <StyledButton {...props} variant="primary" onClick={linkTo('StyledButton', 'Success')}>
        Primary
        </StyledButton>
    )
}

export const Success = (props : any) => { 
    return (
        <StyledButton {...props} variant="primary" onClick={linkTo('StyledButton', 'Transparent')}>
        Primary
        </StyledButton>
    )
}

export const Transparent = (props : any) => { 
    return (
        <StyledButton {...props} variant="primary" onClick={linkTo('StyledButton', 'Primary')}>
        Transparent
        </StyledButton>
    )
}
