import React from 'react'
import * as S from './styles'

import Icon from '../../atoms/icon'
import Text from '../../atoms/text'
import Button from '../../molecules/button'

export default function LoginTemplate() {
    return <S.Container>
        <S.FormContent>
            <S.FinanceLogoContent>
                <Icon name='logo' size='large' color='PRIMARY'/>
                <Text type='headline-1' color='PRIMARY'>FINANCE DEVOT</Text>
            </S.FinanceLogoContent>
            <S.Title>
                <Text type='body-1' color='PRIMARY'>Login</Text>
            </S.Title>
            <S.Form>
                <Text type='body-1' color='PRIMARY'>TODO LOGIN</Text>
                <Text type='body-1' color='PRIMARY'>TODO PASSWORD</Text>
                <S.ButtonContent>
                    <Button>ENTRAR</Button>
                </S.ButtonContent>
            </S.Form>
            <S.CreateAccountContent>
                <Text type='body-1' color='PRIMARY'>Não tem um conta?</Text>
                <Text type='body-1' color='PRIMARY'>TODO</Text>
            </S.CreateAccountContent>
        </S.FormContent>
        <S.LogoContent>
            <Icon name='logo' size='medium' color='BACKGROUND'/>
            <S.LogoTextContent>
                <Text type='headline-1' color='BACKGROUND'>DEVOT</Text>
                <Text type='subtitle-1' color='BACKGROUND'>LEVEL UP WITH US</Text>
            </S.LogoTextContent>
        </S.LogoContent>
    </S.Container>
}
