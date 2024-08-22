import React, { useState } from 'react';
import * as S from './styles';
import Icon from '../../atoms/icon';
import Text from '../../atoms/text';
import Input from '../../atoms/input';
import Button from '../../molecules/button';
import Link from '../../molecules/link';

export default function CreateAccountTemplate() {
    const [form, setForm] = useState({ 
        fullName: "", 
        email: "", 
        password: "", 
        confirmPassword: "" 
    });

    const handleSubmit = () => {
        const { fullName, email, password, confirmPassword } = form;
        if (fullName === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Erro: Todos os campos devem ser preenchidos");
            return;
        }
        if (password !== confirmPassword) {
            alert("Erro: As senhas não coincidem");
            return;
        }
        console.log({ fullName, email, password });
    }

    return (
        <S.Container>
            <S.FormContent>
                <S.FinanceLogoContent>
                    <Icon name='logo' size='medium' color='PRIMARY' />
                    <Text type='headline-1' color='PRIMARY'>FINANCE DEVOT</Text>
                </S.FinanceLogoContent>
                <S.Title>
                    <Text type='headline-1' color='PRIMARY'>Criação de Conta</Text>
                </S.Title>
                <S.Form>
                    <S.InputContent>
                        <S.Label>
                            <Text type='body-1' color='PRIMARY'>Nome Completo</Text>
                        </S.Label>
                        <Input 
                            type="text" 
                            placeholder="Digite seu nome completo" 
                            value={form.fullName}
                            onChange={(value) => setForm({ ...form, fullName:value })}
                        />
                    </S.InputContent>
                    <S.InputContent>
                        <S.Label>
                            <Text type='body-1' color='PRIMARY'>E-mail</Text>
                        </S.Label>
                        <Input 
                            type="email" 
                            placeholder="Digite seu e-mail" 
                            value={form.email}
                            onChange={(value) => setForm({ ...form, email:value })}
                        />
                    </S.InputContent>
                    <S.InputContent>
                        <S.Label>
                            <Text type='body-1' color='PRIMARY'>Senha</Text>
                        </S.Label>
                        <Input 
                            type="password" 
                            placeholder="Digite sua senha" 
                            value={form.password}
                            onChange={(value) => setForm({ ...form, password:value })}
                        />
                    </S.InputContent>
                    <S.InputContent>
                        <S.Label>
                            <Text type='body-1' color='PRIMARY'>Confirmar Senha</Text>
                        </S.Label>
                        <Input 
                            type="password" 
                            placeholder="Confirme sua senha" 
                            value={form.confirmPassword}
                            onChange={(value) => setForm({ ...form, confirmPassword:value })}
                        />
                    </S.InputContent>
                    <S.ButtonContent>
                        <Button onClick={handleSubmit}>CRIAR CONTA</Button>
                    </S.ButtonContent>
                </S.Form>
                <S.CreateAccountContent>
                    <Link href="/login" type="headline-1">
                        Início
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