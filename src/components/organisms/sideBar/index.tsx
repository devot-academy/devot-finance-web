import { useRouter } from 'next/navigation'
import React from 'react';
import * as S from './styles';
import Icon from '../../atoms/icon';
import Text from '../../atoms/text';

type IMenuOption = {
    name: string;
    onClick: () => void;
}

export type ISideBarProps = {
    userName: string;
    onLogout: () => void;
    menuOptions: IMenuOption[];
}

export default function SideBar({ userName, menuOptions = [], onLogout}: ISideBarProps) {
    const router = useRouter()
    
    function handleLogout () {
        onLogout && onLogout()
        router.replace('/login')
    }

    return (
        <S.Container>
            <S.TopContent>
                <Text type="headline-1" color="BACKGROUND">
                    FINANCE DEVOT
                </Text>
                <Text type="headline-2" color="BACKGROUND">
                    {userName}
                </Text>
            </S.TopContent>
            <S.NavMenu>
                <S.MenuIcon>
                    <Icon name="menu" size="small" color="BACKGROUND" />
                    <Text type="body-1" color="BACKGROUND">
                        Finanças
                    </Text>
                </S.MenuIcon>
                {menuOptions.map(({ name, onClick }, index) => 
                    <S.MenuItem key={index} onClick={onClick}>
                        <Icon name="plus" size="small" color="BACKGROUND" />
                        <Text type="body-1" color="BACKGROUND">
                           {name}
                        </Text>
                    </S.MenuItem>
                )}
            </S.NavMenu>
            <S.LinkContent>
                <S.IconTextContent onClick={handleLogout}>
                    <Icon name="exit" size="small" color="BACKGROUND" />
                    <Text type="body-1" color="BACKGROUND">
                        Sair
                    </Text>
                </S.IconTextContent>
            </S.LinkContent>
        </S.Container>
    );
}
