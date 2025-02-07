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
            // const result = await this.S4cred.run(INSERT.into(CredMaster).entries(credmanage));
            console.log(req.query);
            console.log(req.data);
            const result = await this.s4Call.run(req.query);
            return result;
        });
        this.s4Call = await cds.connect.to('CredSegDet');
        return super.init();
    }

}
module.exports = RemoteData

// module.exports = cds.service.impl(async function () {
//     const s4Remote = await cds.connect.to('CredSegDet');

//     const { CredDet } = this.entities;
//     this.on('READ', 'CredDet', async (req) => {
//         let result = await s4Remote.run(req.query);
//         result = result.map((CredMaster) => ({
//             Partner: CredMaster.Partner,
//             Name: CredMaster.Name,
//             RiskClass: CredMaster.RiskClass
//         }));
//         return result;
//     });
//     this.on('CREATE', 'CredDet', req => {
//         console.log(req.query);
//         console.log(req.data);
//         return s4Remote.run(req.query);
//     });
// })