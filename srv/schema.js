const cds = require('@sap/cds');

class RemoteData extends cds.ApplicationService {
    async init() {
        this.on('READ', 'CredDet', async (req) => {
            let result = await this.s4Call.run(req.query);
            result = result.map((CredMaster) => ({
                Partner: CredMaster.Partner,
                Name: CredMaster.Name,
                RiskClass: CredMaster.RiskClass
            }));
            return result;
        });
        this.on('CREATE', 'CredDet', async (req) => {
            var credmanage = {};
            credmanage.Partner = req.data.Partner;
            credmanage.RiskClass = req.data.RiskClass;
            credmanage.Name = req.data.Name;
            const result = await this.S4cred.run(INSERT.into(CredMaster).entries(credmanage));
            return result;
        });
        this.s4Call = await cds.connect.to('CredSegDet');
        return super.init();
    }
   
}
module.exports = RemoteData