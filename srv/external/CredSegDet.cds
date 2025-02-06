/* checksum : 37d363344d6201e127d76dbf5f86f19b */
@cds.external : true
@m.IsDefaultEntityContainer : 'true'
@sap.message.scope.supported : 'true'
@sap.supported.formats : 'atom json xlsx'
service CredSegDet {};

@cds.external : true
@cds.persistence.skip : true
@sap.content.version : '1'
@sap.label : 'Cred MAster'
entity CredSegDet.CredMaster {
  @sap.updatable : 'false'
  key Partner : String(10) not null;
  Name : String(100);
  RiskClass : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Created By'
  @sap.quickinfo : 'Created By User'
  CreatedBy : String(12);
  @odata.Type : 'Edm.DateTimeOffset'
  @odata.Precision : 7
  @sap.label : 'Created On'
  @sap.quickinfo : 'Creation Date Time'
  CreatedAt : Timestamp;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Changed By'
  @sap.quickinfo : 'Local Instance Last Changed By User'
  LastChangedBy : String(12);
  @odata.Type : 'Edm.DateTimeOffset'
  @odata.Precision : 7
  @sap.label : 'Changed On'
  @sap.quickinfo : 'Local Instance Last Change Date Time'
  LastChangedAt : Timestamp;
  to_credsgm : Composition of many CredSegDet.CredSeg on to_credsgm.Partner = Partner;
};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.content.version : '1'
@sap.label : 'Credit Segment Details'
entity CredSegDet.CredSeg {
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  key Partner : String(10) not null;
  @sap.updatable : 'false'
  key CreditSgmnt : String(10) not null;
  @sap.unit : 'Currency'
  @sap.variable.scale : 'true'
  CreditLimit : Decimal(15, 3);
  @sap.semantics : 'currency-code'
  Currency : String(5);
  @odata.Type : 'Edm.DateTimeOffset'
  @odata.Precision : 7
  @sap.label : 'Changed On'
  @sap.quickinfo : 'Local Instance Last Change Date Time'
  LastChangedAt : Timestamp;
  to_cred_master : Association to CredSegDet.CredMaster;
};

