import React, { useState } from 'react';
import * as S from './styles';
import Icon from '../../atoms/icon';
import Text from '../../atoms/text';
import Button from '../../molecules/button';
import Link from '../../molecules/link';
import Input from '../../molecules/input';

export default function LoginTemplate() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <S.Container>
            <S.FormContent>
                <S.FinanceLogoContent>
                    <Icon name='logo' size='large' color='PRIMARY' />
                    <Text type='headline-1' color='PRIMARY'>FINANCE DEVOT</Text>
                </S.FinanceLogoContent>
                <S.Title>
                    <Text type='body-1' color='PRIMARY'>Login</Text>
                </S.Title>
                <S.Form>
                    <S.InputContent>
                        <S.Label>
                            <Text type='body-1' color='PRIMARY'>E-mail</Text>
                        </S.Label>
                        <Input 
                            type="text" 
                            placeholder="" 
                            value={username}
                            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUsername(e.target.value)}
                        />
                    </S.InputContent>
                    <S.InputContent>
                        <S.Label>
                            <Text type='body-1' color='PRIMARY'>Senha</Text>
                        </S.Label>
                        <Input 
                            type="password" 
                            placeholder="" 
                            value={password}
                            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
                        />
                    </S.InputContent>
                    <S.ButtonContent>
                        <Button>ENTRAR</Button>
                    </S.ButtonContent>
                </S.Form>
                <S.CreateAccountContent>
                    <Text type='body-1' color='PRIMARY'>Não tem um conta?</Text>
                    <Link href="/outra-pagina" type="headline-1">
                        Criar conta
                    </Link>                
                </S.CreateAccountContent>
            </S.FormContent>
            <S.LogoContent>
                <Icon name='logo' size='medium' color='BACKGROUND' />
                <S.LogoTextContent>
                    <Text type='headline-1' color='BACKGROUND'>DEVOT</Text>
                    <Text type='subtitle-1' color='BACKGROUND'>LEVEL UP WITH US</Text>
                </S.LogoTextContent>
            </S.LogoContent>
        </S.Container>
    );
}