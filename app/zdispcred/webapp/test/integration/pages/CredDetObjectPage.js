sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'disp.cred.seg.zdispcred',
            componentId: 'CredDetObjectPage',
            contextPath: '/CredDet'
        },
        CustomPageDefinitions
    );
});