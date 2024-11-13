import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf-component',
  standalone: true,
  imports: [],
  templateUrl: './pdf-component.component.html',
  styleUrl: './pdf-component.component.css'
})
export class PdfComponentComponent {
  userCoordonees = {
    "name":"Terry Diaz, Osmany",
    "adresse":"5668, 7 avenue",
    "ville":"Montréal",
    "province":"Québec",
    "CP":"H1Y 2N7",
    "telephone":"(514) 962-5239",
    "email":"hablandoenserio@yahoo.com"
  }

  userChampCompetences = [
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
    { "Connaissances informatiques":
      [
        "Langage: Java, JavaScript, HTML, CSS, PHP, C#, C++",
        "Technologies : Angular, Spring, Vue, Express, Node, .Net, Git, Jira, Figma, CISCO",
        "Bases de données: Mongo DB, MySQL, SQL",
        "Microsoft Office: Word, Outlook, Excel, PowerPoint, Teams, Access",
        "Système opératif: Windows, Linux, Mac"
      ]
    }  
  ]  
  
  userFormationAcademique = [
    {
      "diplome": "AEC Développement de sites Web transactionnels", // Nombre del diploma
      "formationDetails": [
        {
          "formation": "intensive (975 heures)",
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
          "formation": "continue (1410 heures)",
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
          "formation": "régulière (1450 heures)",
          "centre": "Collège De Maisonneuve",
          "ville": "Montréal"
        }
      ],
      "annee": "En cours"
    },
    {
      "diplome": "AEC Programmation objet orientée et technologies WEB",
      "formationDetails": [
        {
          "formation": "intensive (975 heures)",
          "centre": "Collège Herzing",
          "ville": "Montréal"
        }
      ],
      "annee": "2010 - 2012"
    }
  ];
  

  userExperienceProfessionelles = [
    {
      "poste":"Opérateur logistique",
      "compagnie":"Gastier / Ganotec",
      "detailDuPoste":[
        "Gérer la logistique d’entreposage pour de matériaux dangereux et non dangereux",
        "Manipuler une base de données",
        "Maintenir à jour la documentation ainsi que les archives",
        "Respecter et porter des améliorations de la norme ISO 9000"
      ],
      "annee":"2017 - cours"
    },
    {
      "poste":"Stagiaire",
      "compagnie":"Mouvement Desjardins",
      "detailDuPoste":[
        "Analyser de billets dans Jira et participer dans les Scrum",
        "Développer et analyser des applications frontend",
        "Travailler en équipe sur le principe d’entraide pour finir un Spring dans un délais établi"
      ],
      "annee":"sept. - oct. 2017"
    },
    {
      "poste":"Travailleur autonome",
      "compagnie":"",
      "detailDuPoste":[
        "Configurer et mettre en place de petit et de moyen réseau informatique",
        "Installer des composants et de logiciels informatiques",
        "Optimiser des postes de travail"
      ],
      "annee":"2013 - en cours"
    }
  ]

  userAutresFormation = [
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
  ]

  userEngementsSociaux = [
    {
      "role": "Bénévolat",
      "formationDetails": [
        {
          "centre": "Centre de soir Massé",
          "ville": "Montréal"
        }
      ],
      "annee": "2016 - 2017"
    }
  ]
}
