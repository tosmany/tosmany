import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jsPDF } from 'jspdf';

// Definimos las interfaces aquí
interface UserCoordonnees {
  name: string;
  adresse: string;
  ville: string;
  province: string;
  CP: string;
  telephone: string;
  email: string;
}

interface Competence {
  "Connaissances informatiques"?: string[];
  description: string;
}

interface FormationDetail {
  formation: string;
  centre: string;
  ville: string;
}

interface FormationAcademique {
  diplome: string;
  formationDetails: FormationDetail[];
  annee: string;
}

interface ExperienceDetail {
  poste: string;
  compagnie: string;
  detailDuPoste: string[];
  annee: string;
}

interface AutreFormation {
  diplome: string;
  formationDetails: { centre: string; ville: string }[];
  annee: string;
}

interface EngagementSocial {
  role: string;
  formationDetails: { centre: string; ville: string }[];
  annee: string;
  taches: string[];
}

@Component({
  selector: 'app-pdf-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdf-component.component.html',
  styleUrls: ['./pdf-component.component.css']
})
export class PdfComponentComponent {

  // Tipamos las propiedades del componente con las interfaces
  userCoordonnees: UserCoordonnees = {
    "name": "Terry Diaz, Osmany",
    "adresse": "5668, 7 avenue",
    "ville": "Montréal",
    "province": "Québec",
    "CP": "H1Y 2N7",
    "telephone": "(514) 962-5239",
    "email": "hablandoenserio@yahoo.com"
  };

  userChampCompetences: (Competence | string)[] = [
    "Langues: français, anglais, espagnol",
    "Trois ans d’expérience en développement WEB (frontend - backend)",
    "Être à l’affut des exigences fonctionnelles et non fonctionnelles dans l’écriture du code",
    "Contrôler la qualité de l’application",
    "Appliquer le référencement d'un site Web",
    "Gérer des projets selon la méthode Scrum d’Agile",
    "Sens de l’organisation et de priorités",
    "Capacité d’analyse",
    "Habileté à travailler en équipe et de forme autonome",
    "Exploiter un système de gestion de base de données",
    {
      "Connaissances informatiques": [
        "Langage: Java, JavaScript, HTML, CSS, PHP, C#, C++",
        "Technologies : Angular, Spring, Vue, Express, Node, .Net, Git, Jira, Figma, CISCO",
        "Bases de données: Mongo DB, MySQL, SQL",
        "Microsoft Office: Word, Outlook, Excel, PowerPoint, Teams, Access",
        "Système opératif: Windows, Linux, Mac"
      ],
      description: "Connaissances informatiques"
    }
  ];

  userFormationAcademique: FormationAcademique[] = [
    {
      "diplome": "AEC Développement de sites Web transactionnels",
      "formationDetails": [
        {
          "formation": "Formation intensive (975 heures)",
          "centre": "Collège Ahuntsic",
          "ville": "Montréal"
        }
      ],
      "annee": "En cours"
    },
    {
      "diplome": "AEC Programmation objet orientée et technologies WEB",
      "formationDetails": [
        {
          "formation": "Formation continue (1410 heures)",
          "centre": "Collège Rosemont",
          "ville": "Montréal"
        }
      ],
      "annee": "2021 - 2022"
    },
    {
      "diplome": "DEC Gestion de réseaux",
      "formationDetails": [
        {
          "formation": "Formation régulière (1450 heures)",
          "centre": "Collège De Maisonneuve",
          "ville": "Montréal"
        }
      ],
      "annee": "En cours"
    },
    {
      "diplome": "DEP Support technique",
      "formationDetails": [
        {
          "formation": "Formation intensive (975 heures)",
          "centre": "Collège Herzing",
          "ville": "Montréal"
        }
      ],
      "annee": "2010 - 2012"
    }
  ];

  userExperienceProfessionelles: ExperienceDetail[] = [
    {
      "poste": "Opérateur logistique",
      "compagnie": "Gastier / Ganotec",
      "detailDuPoste": [
        "Gérer la logistique d’entreposage pour de matériaux dangereux et non dangereux",
        "Manipuler une base de données",
        "Maintenir à jour la documentation ainsi que les archives",
        "Respecter et porter des améliorations de la norme ISO 9000"
      ],
      "annee": "2017 - cours"
    },
    {
      "poste": "Stagiaire",
      "compagnie": "Mouvement Desjardins",
      "detailDuPoste": [
        "Analyser de billets dans Jira et participer dans les Scrum",
        "Développer et analyser des applications frontend",
        "Travailler en équipe sur le principe d’entraide pour finir un Spring dans un délais établi"
      ],
      "annee": "sept. - oct. 2017"
    },
    {
      "poste": "Travailleur autonome",
      "compagnie": "",
      "detailDuPoste": [
        "Configurer et mettre en place de petit et de moyen réseau informatique",
        "Installer des composants et de logiciels informatiques",
        "Optimiser des postes de travail"
      ],
      "annee": "2013 - en cours"
    }
  ];

  userAutresFormation: AutreFormation[] = [
    {
      "diplome": "LabView 1",
      "formationDetails": [
        {
          "centre": "Collège Saint-Laurent",
          "ville": "Montréal"
        }
      ],
      "annee": "2016"
    },
    {
      "diplome": "CCNA Sécurité",
      "formationDetails": [
        {
          "centre": "Collège Saint-Laurent",
          "ville": "Montréal"
        }
      ],
      "annee": "2015"
    }
  ];

  userEngementsSociaux: EngagementSocial[] = [
    {
      role: "Bénévolat",
      formationDetails: [
        {
          centre: "Centre de soir Massé",
          ville: "Montréal"
        }
      ],
      annee: "2016 - 2017",
      taches: [
        "Rétablir, configurer et optimiser un poste informatique",
        "Installer des outils de nettoyage et de sécurité sur les stations de travail",
        "Donner des formations bases sur l'explotaition de poste informatique"
      ]
    }
  ];

  // Método para identificar si el item es un objeto Competence
  isCompetence(item: any): item is Competence {
    return item && item["Connaissances informatiques"] !== undefined;
  }

  /* CONSTRUCTION DU PDF */
  data = Array.from({ length: 50 }, (_, i) => `item ${i + 1}`);
  date = new Date().toLocaleDateString();

  public generatePDF(): void {
    const pdf = new jsPDF('p','mm','letter');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const logoWidth = 20;
    const itemsPerge = 20;
    let currentY = 40;

    const nom = this.userCoordonnees.name;
    const datePDF = this.date;

    //Placement du logo
    /*
    const addLogo = () =>{
      const logoUrl = '../../assets/images/logo.png';
      const marginRight = 10;
      const xPos = pageWidth - logoWidth - marginRight;
      pdf.addImage(logoUrl, 'png', xPos, 10, logoWidth, 20);
    }
     */

    // Ajout du entete (Coordonnées)
    const addTableHeader = () =>{
      pdf.setFont('Helvetica', 'bold');
      pdf.setFontSize(20);
      pdf.text(this.userCoordonnees.name, 10, 35);
      pdf.setFont('Helvetica', 'normal');
      pdf.setFontSize(10);
      pdf.text(this.userCoordonnees.adresse, 10, 40);
      pdf.text(this.userCoordonnees.ville + ','+ this.userCoordonnees.province + ','+ this.userCoordonnees.CP, 10, 45);
      pdf.text(this.userCoordonnees.telephone, 10, 50);
      pdf.setFont('Italic', 'italic');
      pdf.text(this.userCoordonnees.email, 10, 55);

      currentY = 55; //Separateur de bloques


    }

  }
}
