export default {
    getSideBarConfig() {
        return {
            dataElementSection: {
                items: [
                    'categoryOption',
                    'category',
                    'categoryCombo',
                    'categoryOptionCombo',
                    'categoryOptionGroup',
                    'categoryOptionGroupSet',
                    'dataElement',
                    'dataElementGroup',
                    'dataElementGroupSet',
                ],
            },

            indicatorSection: {
                items: [
                    'indicator',
                    'indicatorType',
                    'indicatorGroup',
                    'indicatorGroupSet',
                ],
            },

            organisationUnitSection: {
                items: [
                    'organisationUnit',
                    'organisationUnitGroup',
                    'organisationUnitGroupSet',
                ],
            }
        };
    },
};
