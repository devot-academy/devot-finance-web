import React, { useState } from 'react';
import * as S from './styles';
import Icon from '../../atoms/icon';
import Text from '../../atoms/text';
import LinkText from '../../molecules/link';
import Modal from '../modal';

export default function SideBar() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');

    const handleMenuItemClick = (title: string) => {
        setModalTitle(title);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

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
                <S.MenuItem onClick={() => handleMenuItemClick('Finanças')}>
                    <Icon name="menu" size="small" color="BACKGROUND" />
                    <Text type="body-1" color="BACKGROUND">
                        Finanças
                    </Text>
                </S.MenuItem>
                <S.MenuItem onClick={() => handleMenuItemClick('Nova entrada')}>
                    <Icon name="plus" size="small" color="BACKGROUND" />
                    <Text type="body-1" color="BACKGROUND">
                        Nova entrada
                    </Text>
                </S.MenuItem>
                <S.MenuItem onClick={() => handleMenuItemClick('Nova despesa essencial')}>
                    <Icon name="plus" size="small" color="BACKGROUND" />
                    <Text type="body-1" color="BACKGROUND">
                        Nova despesa essencial
                    </Text>
                </S.MenuItem>
                <S.MenuItem onClick={() => handleMenuItemClick('Nova despesa não essencial')}>
                    <Icon name="plus" size="small" color="BACKGROUND" />
                    <Text type="body-1" color="BACKGROUND">
                        Nova despesa não essencial
                    </Text>
                </S.MenuItem>
            </S.NavMenu>
            <S.LinkContent>
                <LinkText href='/login' type='body-1' color='BACKGROUND'>
                    <S.IconTextContent>
                        <Icon name="exit" size="small" color="BACKGROUND" />
                        <Text type="body-1" color="BACKGROUND">
                            Sair
                        </Text>
                    </S.IconTextContent>
                </LinkText>
            </S.LinkContent>

            <Modal
                isVisible={isModalVisible}
                title={modalTitle}
                onClose={closeModal}
            />
        </S.Container>
    );
}
