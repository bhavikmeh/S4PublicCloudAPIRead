sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'disp/cred/seg/zdispcred/test/integration/FirstJourney',
		'disp/cred/seg/zdispcred/test/integration/pages/CredDetList',
		'disp/cred/seg/zdispcred/test/integration/pages/CredDetObjectPage'
    ],
    function(JourneyRunner, opaJourney, CredDetList, CredDetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('disp/cred/seg/zdispcred') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCredDetList: CredDetList,
					onTheCredDetObjectPage: CredDetObjectPage
                }
            },
            opaJourney.run
        );
    }
);