using {CredSegDet as my  } from './external/CredSegDet';

service RemoteData {

 entity CredDet as projection on my.CredMaster; 
 
 entity CredSeg as projection on my.CredSeg;    

}
annotate RemoteData with @requires : 'authenticated-user';

