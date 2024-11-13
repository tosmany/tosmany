import { FormationDetail } from "./formation-detail";

export interface FormationAcademique {
    diplome: string;
    formationDetails: FormationDetail[];
    annee: string;
}
