import * as moment from 'moment';

export interface TacheInterface {
    id?: number;
    titre?: string;
    priorite?: string;
    statut?:string; P
    projet?:ProjetInterface;
    date?: moment.Moment;
}