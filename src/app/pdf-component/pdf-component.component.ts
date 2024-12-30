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
    $localize `Langues: français, anglais, espagnol`,
    $localize `Trois ans d’expérience en développement WEB (frontend - backend)`,
    $localize `Être à l’affut des exigences fonctionnelles et non fonctionnelles dans l’écriture du code`,
    $localize `Contrôler la qualité de l’application`,
    $localize `Appliquer le référencement d'un site Web`,
    $localize `Gérer des projets selon la méthode Scrum d’Agile`,
    $localize `Sens de l’organisation et de priorités`,
    $localize `Capacité d’analyse`,
    $localize `Habileté à travailler en équipe et de forme autonome`,
    $localize `Exploiter un système de gestion de base de données`,
    {
      "Connaissances informatiques": [
        $localize `Langage: Java, JavaScript, HTML, CSS, PHP, C#, C++`,
        $localize `Technologies : Angular, Spring, Vue, Express, Node, .Net, Git, Jira, Figma, CISCO`,
        $localize `Bases de données: Mongo DB, MySQL, SQL`,
        $localize `Microsoft Office: Word, Outlook, Excel, PowerPoint, Teams, Access`,
        $localize `Système opératif: Windows, Linux, Mac`
      ],
      description: $localize `"Connaissances informatiques"`
    }
  ];

  userFormationAcademique: FormationAcademique[] = [
    {
      "diplome": $localize `AEC Développement de sites Web transactionnels`,
      "formationDetails": [
        {
          "formation": $localize `Formation intensive (975 heures)`,
          "centre": $localize `Collège Ahuntsic`,
          "ville": $localize `Montréal`
        }
      ],
      "annee": $localize `En cours`
    },
    {
      "diplome": $localize `AEC Programmation objet orientée et technologies WEB`,
      "formationDetails": [
        {
          "formation": $localize `Formation continue (1410 heures)`,
          "centre": $localize `Collège Rosemont`,
          "ville": $localize `Montréal`
        }
      ],
      "annee": "2021 - 2022"
    },
    {
      "diplome": $localize `DEC Gestion de réseaux`,
      "formationDetails": [
        {
          "formation": $localize `Formation régulière (1450 heures)`,
          "centre": $localize `Collège De Maisonneuve`,
          "ville": $localize `Montréal`
        }
      ],
      "annee": $localize `En cours`
    },
    {
      "diplome": $localize `DEP Support technique`,
      "formationDetails": [
        {
          "formation": $localize `Formation intensive (975 heures)`,
          "centre": $localize `Collège Herzing`,
          "ville": $localize `Montréal`
        }
      ],
      "annee": "2010 - 2012"
    }
  ];

  userExperienceProfessionelles: ExperienceDetail[] = [
    {
      "poste": $localize `Opérateur logistique`,
      "compagnie": "Gastier / Ganotec",
      "detailDuPoste": [
        $localize `Gérer la logistique d’entreposage pour de matériaux dangereux et non dangereux`,
        $localize `Manipuler une base de données`,
        $localize `Maintenir à jour la documentation ainsi que les archives`,
        $localize `Respecter et porter des améliorations de la norme ISO 9000`
      ],
      "annee": $localize `2017 - cours`
    },
    {
      "poste": $localize `Stagiaire`,
      "compagnie": $localize `Mouvement Desjardins`,
      "detailDuPoste": [
        $localize `Analyser de billets dans Jira et participer dans les Scrum`,
        $localize `Développer et analyser des applications frontend`,
        $localize `Travailler en équipe sur le principe d’entraide pour finir un Spring dans un délais établi`
      ],
      "annee": $localize `sept. - oct. 2017`
    },
    {
      "poste": $localize `Travailleur autonome`,
      "compagnie": "",
      "detailDuPoste": [
        $localize `Configurer et mettre en place de petit et de moyen réseau informatique`,
        $localize `Installer des composants et de logiciels informatiques`,
        $localize `Optimiser des postes de travail`
      ],
      "annee": $localize `2013 - en cours`
    }
  ];

  userAutresFormation: AutreFormation[] = [
    {
      "diplome": "LabView 1",
      "formationDetails": [
        {
          "centre": $localize `Collège Saint-Laurent`,
          "ville": $localize `Montréal`
        }
      ],
      "annee": "2016"
    },
    {
      "diplome": $localize `CCNA Sécurité`,
      "formationDetails": [
        {
          "centre": $localize `Collège Saint-Laurent`,
          "ville": $localize `Montréal`
        }
      ],
      "annee": "2015"
    }
  ];

  userEngementsSociaux: EngagementSocial[] = [
    {
      role: $localize `Bénévolat`,
      formationDetails: [
        {
          centre: $localize `Centre de soir Denise Massé`,
          ville: $localize `Montréal`
        }
      ],
      annee: "2016 - 2017",
      taches: [
        $localize `Rétablir, configurer et optimiser un poste informatique`,
        $localize `Installer des outils de nettoyage et de sécurité sur les stations de travail`,
        $localize `Donner des formations bases sur l'explotaition de poste informatique`
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
      pdf.setFont('Helvetica', 'Bold');
      pdf.setFontSize(16);
      pdf.setTextColor(1, 1, 1);  // Color black
    }
    const subTitre = () =>{
      pdf.setFont('Helvetica', 'Bolder');
      pdf.setFontSize(14);
      pdf.setTextColor(1, 1, 1);  // Color black
    }
    const subTitreDeux = () =>{
      pdf.setFont('Helvetica', 'Bolder');
      pdf.setFontSize(12);
      pdf.setTextColor(83, 83, 83);  // Color gris
    }
    const normalText = () => {
      pdf.setFont('Helvetica', 'Normal');
      pdf.setFontSize(10);
      pdf.setTextColor(1, 1, 1);  // Color black
    }
     const textDescription = () =>{
      pdf.setFont('Helvetica', 'Normal');
      pdf.setFontSize(10);
      pdf.setTextColor(83, 83, 83);  // Color gris
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
      pdf.setDrawColor(83, 83, 83);  // Color gris
      pdf.setLineWidth(0.5);  // Grosor de la línea
      pdf.line(marginX, yPosition, pageWidth - marginX, yPosition);  // Línea horizontal
    }

    //Add compétences

      const addCompetences = () => {
        titre();
        pdf.text($localize `Compétences`, marginX, currentY);
        currentY += 3;
        addLineSeparator(currentY); // Línea separadora
        currentY += 10;
      
        textDescription();
      
        // Iterar sobre las competencias
        this.userChampCompetences.forEach((competence, index) => {
          if (typeof competence === 'string') {
            // Para competencias tipo string, ajustamos el texto
            const competenceLines = pdf.splitTextToSize(`° ${competence}`, pageWidth - marginX * 2); // Dividimos el texto en líneas
            // La primera línea tendrá la viñeta
            pdf.text(competenceLines[0], marginX + 4, currentY - 3);  // Escribir la primera línea con la viñeta
            //currentY += 1;
      
            // Las líneas siguientes deben empezar debajo del texto y no debajo de la viñeta
            for (let i = 1; i < competenceLines.length; i++) {
              // Eliminamos la viñeta de las líneas siguientes
              pdf.text(competenceLines[i], marginX + 6, currentY);  // Añadimos una sangría para el resto de líneas
              currentY += 1;
            }
          } else {
            // Para competencias de tipo objeto, procesar 'Connaissances informatiques'
            pdf.text(`° ${competence.description}:`, marginX + 4, currentY - 3);
            currentY += 6;
            
            subTitreDeux();
            competence["Connaissances informatiques"]?.forEach(info => {
              textDescription();
              const infoLines = pdf.splitTextToSize(` - ${info}`, pageWidth - marginX * 2); // Dividimos el texto largo
      
              // Escribir la primera línea con la viñeta
              pdf.text(infoLines[0], marginX + 8, currentY);
              currentY += 6;
      
              // Las líneas siguientes deben empezar debajo del texto, no de la viñeta
              for (let i = 1; i < infoLines.length; i++) {
                // Eliminamos la viñeta de las líneas siguientes
                pdf.text(infoLines[i], marginX + 6, currentY); // Sangría a la derecha para las líneas adicionales
                currentY += 6;
              }
            });
          }
          currentY += 8;
        });
      }
      

    //Add formation academique
    const addFormationAcademique = () => {
      titre();
      pdf.text( $localize `Formation Académique`, marginX, currentY);
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
          pdf.text(` ${detail.centre}, ${detail.ville}`, marginX + 2, currentY + 6);
        });
        currentY += 16;
      });
      // Verificar si el espacio restante en la página es insuficiente
      sautPage();
    }

    //Add expérience professionnelle
    const addExperienceProfessionnelle = () => {
      titre();
      pdf.text( $localize `Expérience Professionnelle`, marginX, currentY);
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
      pdf.text( $localize `Autres Formations`, marginX, currentY);
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
      pdf.text( $localize `Engagement Social`, marginX, currentY);
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
          pdf.text(` ${detail.centre}, ${detail.ville}`, marginX + 2, currentY);
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
      pdf.text($localize `Date: ${new Date().toLocaleDateString()}`, pageWidth - marginX, pageHeight - 20, { align: 'right' });
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
