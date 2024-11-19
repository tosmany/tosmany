import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jsPDF } from 'jspdf';
import * as jSPDF  from 'jspdf';
import html2canvas from 'html2canvas';

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

  /* CONSTRUCTION DU PDF AVEC JSPDF */
  data = Array.from({ length: 50 }, (_, i) => `item ${i + 1}`);
  date = new Date().toLocaleDateString();

  public generatePDF(): void {
    const pdf = new jsPDF('p','mm','letter');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const logoWidth = 20;
    const itemsPerge = 20;
    const marginX = 20;
    const titre =()=>{
      pdf.setFont('Helvetica', 'font-weight:bold', 'color:#222222');
      pdf.setFontSize(14);
    }
    const subTitre = () =>{
      pdf.setFont('Helvetica', 'font-weight:semibold', 'color:#111111');
      pdf.setFontSize(12);
    }
    const subTitreDeux = () =>{
      pdf.setFont('Helvetica', 'font-weight:semibold', 'color:#BFBFBF');
      pdf.setFontSize(10);
    }
    const normalText = () => {
      pdf.setFont('Helvetica', 'normal', 'color:#BFBFBF');
      pdf.setFontSize(8);
    }
     const textDescription = () =>{
      pdf.setFont('Helvetica', 'normal');
      pdf.setFontSize(10);
     }
     const sautPage = () =>{
      // Verificar si el espacio restante en la página es insuficiente
      if (currentY > pageHeight - 40) { // Si se acerca al final de la página
        pdf.addPage();  // Agregar una nueva página
        currentY = 10;  // Resetear el valor de currentY para comenzar desde la parte superior
      }
     }
    let currentY =15; // Donde comienza la primera sección (desplazamiento inicial)

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

    const addCoordonnees = () =>{
      /*Nom */
      titre();
      pdf.text(this.userCoordonnees.name, marginX, currentY);
      currentY += 4;
      /** Adresse*/
      normalText();
      pdf.text(this.userCoordonnees.adresse, marginX, currentY);
      currentY += 4;
      /*Ville, Province, CP */
      normalText();
      pdf.text(this.userCoordonnees.ville + ','+ this.userCoordonnees.province + ','+ this.userCoordonnees.CP, marginX, currentY);
      currentY += 4;
      /*Téléphone */
      pdf.text(this.userCoordonnees.telephone, marginX, currentY);
      currentY += 4;
      /*Email */
      pdf.setFont('Italic', 'italic');
      pdf.text(this.userCoordonnees.email, marginX, currentY);
      currentY += 10; // Espace après coordonnées
    }

    //Add ligne separatrice
    const addLineSeparator = (yPosition: number) => {
      pdf.setDrawColor(214,211,204,255);  // Color negro
      pdf.setLineWidth(0.5);  // Grosor de la línea
      pdf.line(marginX, yPosition, pageWidth - marginX, yPosition);  // Línea horizontal
    }

    //Add compétences
    const addCompetences = () => {
      titre();
      pdf.text("Compétences", marginX, currentY);
      currentY += 3;
      addLineSeparator(currentY); //Ligne separatrice
      currentY += 8;

      textDescription();
       //Iterarar les compétences
       this.userChampCompetences.forEach((competence, index) =>{
        if (typeof competence === 'string') {
          pdf.text(`° ${competence}`, marginX, currentY);
        } else {
          pdf.text(`${competence.description}:`, marginX, currentY);
          currentY += 6;
          subTitre();
          competence["Connaissances informatiques"]?.forEach( info => {
            textDescription();
            pdf.text(` ° ${info}`, marginX + 2, currentY);
            currentY +=6;
          });
        }
        currentY += 8;
      });
    }

    //Add formation academique
    const addFormationAcademique = () => {
      titre();
      pdf.text("Formation Académique", marginX, currentY);
      currentY += 3;
      addLineSeparator(currentY); //Ligne separatrice
      currentY += 8;
      this.userFormationAcademique.forEach(formation => {
        /* Diplôme - duration */
        subTitre();
        pdf.text(`${formation.diplome}`, marginX + 3, currentY);
        pdf.text(`${formation.annee}`, pageWidth - marginX, currentY, {align:'right'});
        currentY += 6;
        subTitreDeux();
        formation.formationDetails.forEach(detail => {
          pdf.text(` ${detail.formation}`, marginX + 2, currentY);
          pdf.text(` ${detail.centre}, ${detail.ville}`, marginX + 3, currentY + 6);
        });
        currentY += 16;
      });
      // Verificar si el espacio restante en la página es insuficiente
      sautPage();
    }

    //Add expérience professionnelle
    const addExperienceProfessionnelle = () => {
      titre();
      pdf.text("Expérience Professionnelle", marginX, currentY);
      currentY += 3;
      addLineSeparator(currentY); //Ligne separatrice
      currentY += 8;

      this.userExperienceProfessionelles.forEach(exp => {
        subTitre();
        pdf.text(`${exp.poste}`, marginX + 3, currentY);
        pdf.text(`${exp.annee}`, pageWidth - marginX, currentY, {align:'right'});
        currentY += 6;
        subTitreDeux();
        pdf.text(`${exp.compagnie}`, marginX + 3, currentY);
        currentY += 5;
        normalText();
        exp.detailDuPoste.forEach(detail => {
          pdf.text(`${detail}`, marginX + 7, currentY);
          currentY += 6;
        });
        currentY += 6;
      });

    }

    //Add Autres formations
    const addAutreFormation = () => {
      titre()
      pdf.text("Autres Formations", marginX, currentY);
      currentY += 3;
      addLineSeparator(currentY); //Ligne separatrice
      currentY += 8;

      this.userAutresFormation.forEach(formation => {
        subTitre();
        pdf.text(` ${formation.diplome}`, marginX + 3 , currentY);
        pdf.text(` ${formation.annee}`, pageWidth - marginX, currentY, {align:'right'});
        currentY += 6;

        formation.formationDetails.forEach(detail => {
          subTitreDeux();
          pdf.text(`${detail.centre}, ${detail.ville}`, marginX + 4, currentY);
          currentY += 6;
        });
        currentY += 6;
      });
    }

    //Add Angagements soicaux
    const addEngagementSocial = () => {
      titre();
      pdf.text("Engagement Social", marginX, currentY);
      currentY += 3;
      addLineSeparator(currentY); //Ligne separatrice
      currentY += 8;

      this.userEngementsSociaux.forEach(engagement => {
        subTitre();
        pdf.text(`${engagement.role}`, marginX + 3, currentY);
        pdf.text(`${engagement.annee}`, pageWidth - marginX, currentY, {align:'right'});
        currentY += 6;

        engagement.formationDetails.forEach(detail => {
          subTitreDeux();
          pdf.text(` ${detail.centre}, ${detail.ville}`, marginX + 3, currentY);
          currentY += 6;
        });

        engagement.taches.forEach(tache => {
          normalText();
          pdf.text(`${tache}`, marginX + 7, currentY);
          currentY += 6;
        });
      });
      sautPage();
    }

    //Add date
    const addDate = () => {
      pdf.setFont('Helvetica', 'normal');
      pdf.setFontSize(10);
      pdf.text(`Date: ${new Date().toLocaleDateString()}`, pageWidth - marginX, pageHeight - 20, { align: 'right' });
    }

    // Construir le PDF
    addCoordonnees();
    addCompetences();
    addFormationAcademique();
    addExperienceProfessionnelle();
    addAutreFormation();
    addEngagementSocial();
    addDate();

    // Générer el PDF
    pdf.save('cv.pdf');

  }
  /* CONSTRUCTION DU PDF AVEC HTML2CANVAS */
  exportPDF(){
    const data = document.getElementById('pdf_content');
        html2canvas(data!).then(canvas => {
            const imgWidth = 208;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const contentDataURL = canvas.toDataURL('image/png');
            const pdf = new jSPDF.jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
            const position = 20;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('exported-file.pdf'); // Save the generated PDF
        });
  }
}
