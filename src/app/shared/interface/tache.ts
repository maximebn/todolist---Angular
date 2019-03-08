import * as moment from 'moment';
import {ProjetInterface} from './projet';
export interface TacheInterface {
    titre?: string;
    date?: moment.Moment;
    priorite?: string;
    statut?: string;
    id?: number;
    projet?: ProjetInterface;
}
