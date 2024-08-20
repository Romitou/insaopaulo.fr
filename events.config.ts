const moreInfoToCome = 'Plus d\'informations concernant cet événement sont à venir.'

const foodSale = {
  name: 'Stand nourriture',
  content: 'Vous êtes conviés à nous rejoindre à chaque pause devant l\'arche orange pour déguster tous les mets préparés par nos aristos préférés !' // UNDEFINED
}

const morningBreak = {
  start: '09:30',
  end: '09:45'
}

const mealBreak = {
  start: '11:15',
  end: '11:30'
}

const endBreak = {
  start: '16:30',
  end: '16:45'
}

const defaultBreak = [morningBreak, mealBreak, endBreak].map(breakPeriod => {
  return {
    id: 'food',
    ...breakPeriod,
    ...foodSale
  }
})

const chasseACourre = {
  id: 'chasse',
  start: '14:00',
  end: '15:00',
  name: 'Chasse à courre',
  content: 'Participez à la grande chasse à courre royale ! Suivez les indices et trouvez l’aristocrate à tête de cerf qui se cache dans l’INSA pour remporter un super cadeau !'
}

export const events = [
  {
    day: '2024-03-11',
    events: [
      {
        id: 'campagne',
        start: '11:15',
        name: 'Sortie vidéo de campagne',
        content: 'Rendez-vous le lundi 11 mars à 11h15 précises sur notre site afin de découvrir la vidéo de campagne INS\'Aristocrate !'
      },
      ...defaultBreak,
      chasseACourre,
      {
        id: 'rap',
        start: '20:00',
        name: 'Sortie clip',
        content: 'Rendez-vous le lundi 11 mars à 20h00 précises sur notre site afin de découvrir le clip INS\'Aristocrate !'
      },
      {
        id: 'ouverture',
        start: '19:30',
        end: '22:30',
        name: 'Soirée d\'ouverture',
        content: 'Venez profiter d\'un petite soirée d\'ouverture (de 19h30 à 22h30 au foyer du Mad) en petit comité en guise de mise en bouche pour cette semaine de campagne pleine d\'activités de qualité. Au programme de cette soirée : Mario kart, création de masques pour le bal de mercredi soir, piano et initiation à la danse Rock.'
      }
    ]
  },
  {
    day: '2024-03-12',
    events: [
      ...defaultBreak,
      chasseACourre,
      {
        id: 'baf',
        start: '19:30',
        end: '23:00',
        name: 'BAF',
        content: moreInfoToCome // UNDEFINED
      }
    ]
  },
  {
    day: '2024-03-13',
    events: [
      ...defaultBreak,
      chasseACourre,
      {
        id: 'bal',
        start: '20:00',
        end: '23:00',
        name: 'Soirée commune',
        content: 'Venez profiter d\'une petite soirée (au foyer du Madrillet de 20h à 23h) commune aux 2 intés, dans la joie et la bonne humeur. Plusieurs petites activités préparées par les 2 intés sont au programme pour vous garantir une bonne soirée. De plus, vous aurez l\'occasion de déguster des mets préparés avec soin par les 2 intés. On vous attend avec vos plus beaux déguisements !'
      },
    ]
  },
  {
    day: '2024-03-14',
    events: [
      ...defaultBreak.filter(br => br.start != '16:30'),
      {
        id: 'tms',
        start: '16:00',
        end: '18:45',
        name: 'TMS',
        content: moreInfoToCome // UNDEFINED
      },
      {
        id: 'bar',
        start: '20:30',
        end: '23:45',
        name: 'Soirée bar',
        content: moreInfoToCome // UNDEFINED
      }
    ]
  }
]

export const videos = [
  {
    id: 'videoCampagne',
    name: 'Vidéo de campagne',
    cdnLink: 'https://media.insaristocrate.fr/insaristocrate-campagne-1080.mp4',
    youtube: 'https://youtu.be/cZfprKDNtIE',
    showDate: 1710152100000
  },
  {
    id: 'clip',
    name: 'Rap d\'inté',
    cdnLink: 'https://media.insaristocrate.fr/insaristocrate-rap-1080.mp4',
    youtube: 'https://youtu.be/cMXRHP2fr3Q',
    showDate: 1710183600000,
  }
]
