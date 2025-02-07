using {CredSegDet as my  } from './external/CredSegDet';
using { generic as gen } from '../db/modelling';


service RemoteData {
 entity CredFromFront as projection on gen.CredFromFront;   
 entity CredDet as projection on my.CredMaster;  
 entity CredSeg as projection on my.CredSeg;    

}
// annotate RemoteData with @requires : 'authenticated-user';

