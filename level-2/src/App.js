import React from 'react'
import i18n from '@dhis2/d2-i18n'
import { Menu, MenuItem, MenuSectionHeader } from '@dhis2/ui'
import styles from './App.module.css'

const MyApp = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.menu} data-test-id="menu">
                <MenuSectionHeader label={i18n.t('Menu')} />
                <Menu>
                    <MenuItem
                        label={i18n.t('Programs')}
                        dataTest="menu-programs"
                    />
                    <MenuItem
                        label={i18n.t('Data sets')}
                        dataTest="menu-dataSets"
                    />
                </Menu>
            </nav>
            <main className={styles.main}></main>
        </div>
    )
}

export default MyApp
