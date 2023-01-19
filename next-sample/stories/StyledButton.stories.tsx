import React, { useState } from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import { StyledButton, StyledButtonProps } from '../components/StyledButton'
// 新しくactionをインポート
import { action } from '@storybook/addon-actions'

// ファイル内のStoryの設定（メタデータオブジェクト）
export default {
    // グループ名
    title: 'StyledButton',
    // 使用するコンポーネント
    component: StyledButton,

    // 以下の行を追加（また、著者がぶっこんできたｗｗｗ
//    argTypes: { onClick: { action: 'clicked' } },

} as ComponentMeta<typeof StyledButton>


// increment という名前でactionを出力するための関数を作る
const incrementAction = action('increment')  

function MyFunction(arg: string)
{
    console.log(arg)

    return arg
}



export const Primary = (props : any)  => {
    const [count , setCount] = useState(0)
    const onClick = (e: React.MouseEvent) => {

        incrementAction(e, count)

        MyFunction("前の会社から株主総会の案内きた～")

        setCount(c => c + 2)
    }

    return (
        <StyledButton {...props} variant="primary" onClick={onClick}>
            Count: {count}
                 <audio id="btn_audio">
                    
                </audio>
        </StyledButton>
    )
}

/*
export const Primary: Story<StyledButtonProps> = (props) => {
    return (
        <StyledButton {...props} variant ="primary">
        Primary
    </StyledButton>
    )
}
*/

export const Success: Story<StyledButtonProps> = (props) => { 
    return (
        <StyledButton {...props} variant ="success">
            Primary
        </StyledButton>
    )
}

export const Transparent: Story<StyledButtonProps> = (props) => {
    return (
        <StyledButton {...props} variant="transparent">
            Transparent
        </StyledButton>
    )
}
