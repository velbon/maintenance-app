import React from 'react';
import TextField from 'material-ui/lib/text-field';
import Translate from 'd2-ui/lib/i18n/Translate.mixin';

import MuiThemeMixin from '../mui-theme.mixin';

export default React.createClass({
    propTypes: {
        labelText: React.PropTypes.string.isRequired,
        multiLine: React.PropTypes.bool,
    },

    mixins: [MuiThemeMixin, Translate],

    render() {
        const errorStyle = {
            lineHeight: this.props.multiLine ? '48px' : '12px',
            marginTop: this.props.multiLine ? -16 : -12,
        };

        return (
            <TextField errorStyle={errorStyle} {...this.props} floatingLabelText={this.getTranslation(this.props.labelText)} />
        );
    },
});
