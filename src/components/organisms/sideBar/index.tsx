import React from 'react';
import * as S from './styles';
import Icon from '../../atoms/icon';
import Text from '../../atoms/text';
import LinkText from '../../molecules/link';

export default function SideBar() {
    return (
        <S.Container>
            <S.TopContent>
                <Text type="headline-1" color="BACKGROUND">
                    FINANCE DEVOT
                </Text>
                <Text type="headline-2" color="BACKGROUND">
                    Allan Paulo
                </Text>
            </S.TopContent>
            <S.NavMenu>
                <S.MenuItem>
                    <Icon name="menu" size="small" color="BACKGROUND" />
                    <Text type="body-1" color="BACKGROUND">
                        Finanças
                    </Text>
                </S.MenuItem>
                <S.MenuItem>
                    <Icon name="plus" size="small" color="BACKGROUND" />
                    <Text type="body-1" color="BACKGROUND">
                        Nova entrada
                    </Text>
                </S.MenuItem>
                <S.MenuItem>
                    <Icon name="plus" size="small" color="BACKGROUND" />
                    <Text type="body-1" color="BACKGROUND">
                        Nova despesa essencial
                    </Text>
                </S.MenuItem>
                <S.MenuItem>
                    <Icon name="plus" size="small" color="BACKGROUND" />
                    <Text type="body-1" color="BACKGROUND">
                        Nova despesa não essencial
                    </Text>
                </S.MenuItem>
            </S.NavMenu>
            <S.LinkContent>
                <LinkText href='#' type='body-1' color='BACKGROUND'>
                    <S.IconTextContent>
                        <Icon name="exit" size="small" color="BACKGROUND" />
                        <Text type="body-1" color="BACKGROUND">
                            Sair
                        </Text>
                    </S.IconTextContent>
                </LinkText>
            </S.LinkContent>
        </S.Container> 
    );
}