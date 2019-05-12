import * as moment from 'moment';
import {ProjetInterface} from './projet';
export interface TacheInterface {
    titre?: string;
    date?: string;
    priorite?: string;
    statut?:string;
    id?: any;
    projet?:ProjetInterface;

    isUpdating?: boolean;

}
