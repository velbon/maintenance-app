import React from 'react';
import sideBarItemsStore from '../SideBar/sideBarItems.store';
import camelCaseToUnderscores from 'd2-utilizr/lib/camelCaseToUnderscores';
import MenuCards from './MenuCards.component';
import Translate from 'd2-ui/lib/i18n/Translate.mixin';
import Auth from 'd2-ui/lib/auth/Auth.mixin';
import { hashHistory } from 'react-router';

export default React.createClass({
    mixins: [Translate, Auth],

    getInitialState() {
        return {
            menuItems: [],
        };
    },

    componentWillMount() {
        this.disposable = sideBarItemsStore
            .scan((acc, values) => acc.concat(values
                    .map(keyName => ({
                        name: this.getTranslation(camelCaseToUnderscores(keyName)),
                        description: this.getTranslation(`intro_${camelCaseToUnderscores(keyName)}`),
                        canCreate: this.getCurrentUser().canCreate(this.getModelDefinitionByName(keyName)),
                        add: () => hashHistory.push(`/edit/${keyName}/add`),
                        list: () => hashHistory.push(`/list/${keyName}`),
                    }))), [])
            .subscribe(menuItems => this.setState({ menuItems }));
    },

    componentWillUnmount() {
        if (this.disposable && this.disposable.dispose) {
            this.disposable.dispose();
        }
    },

    render() {
        const wrapStyle = {
            paddingTop: '3rem',
        };

        return (
            <div style={wrapStyle}>
                <MenuCards menuItems={this.state.menuItems} />
            </div>
        );
    },
});
