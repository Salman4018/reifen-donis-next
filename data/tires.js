export const TIRE_CATEGORIES = [
  {
    slug: 'sommerreifen',
    title: 'Sommerreifen',
    intro: 'Sommerreifen bieten bei warmen Temperaturen optimale Fahrsicherheit, Grip und kurze Bremswege auf trockener und nasser Fahrbahn.',
    sections: [
      ['Warum Sommerreifen?', 'Sommerreifen werden bei Temperaturen über sieben Grad Celsius gefahren, meist von Ostern bis Oktober. Ihre harte Gummimischung bleibt bei Hitze stabil und unterstützt eine gute Kraftstoffeffizienz sowie eine lange Lebensdauer.'],
      ['Ihre Vorteile', 'Sommerreifen reduzieren Aquaplaning, sorgen für sichere Haftung und bringen bei trockener wie nasser Fahrbahn kurze Bremswege. Lassen Sie sich zu den passenden Reifen aus unserem umfangreichen Angebot beraten.'],
    ],
  },
  {
    slug: 'winterreifen',
    title: 'Winterreifen',
    intro: 'Winterreifen sind für Temperaturen unter sieben Grad Celsius, Eis, Schnee und nasse Fahrbahnen entwickelt.',
    sections: [
      ['Sicher durch die kalte Jahreszeit', 'Die weiche Gummimischung bleibt bei Minusgraden elastisch. Das grobe Profil und die vielen Lamellen verdrängen Schnee, Matsch und Nässe und verbessern die Bodenhaftung.'],
      ['Rechtzeitig wechseln', 'Ob beim Bremsen oder in der Kurve: Winterreifen geben Ihnen bei winterlichen Bedingungen mehr Sicherheit. Holen Sie sich rechtzeitig Ihre Reifen für die nächste Saison.'],
    ],
  },
  {
    slug: 'ganzjahresreifen',
    title: 'Ganzjahresreifen',
    intro: 'Ganzjahresreifen verbinden Eigenschaften von Sommer- und Winterreifen und können für bestimmte Einsatzprofile eine praktische Lösung sein.',
    sections: [
      ['Kompromiss oder das Beste aus zwei Welten?', 'Ganzjahresreifen sparen einen zweiten Reifensatz sowie Aufwand für Wechsel und Einlagerung. Profil und Gummimischung sind auf einen vielseitigen Einsatz bei unterschiedlichen Witterungsverhältnissen ausgelegt.'],
      ['Für wen eignen sie sich?', 'Ob Ganzjahresreifen passen, hängt von Wetter, Fahrleistung, Region und Fahrzeugnutzung ab. In schneesicheren Regionen oder bei häufigen langen Fahrten bleiben echte Winterreifen oft die bessere Wahl. Wir beraten Sie individuell.'],
    ],
  },
  {
    slug: 'rdks',
    title: 'RDKS',
    intro: 'Reifendruckkontrollsysteme informieren über den Luftdruck und sind seit November 2014 für neu zugelassene Pkw, SUVs und Wohnmobile vorgeschrieben.',
    sections: [
      ['Welche Vorteile bietet RDKS?', 'Optimaler Reifendruck verbessert Sicherheit, Verbrauch und Reifenlebensdauer. Das System warnt bei zu niedrigem Druck und kann damit helfen, Unfallrisiken und unnötigen Verschleiß zu vermeiden.'],
      ['Direktes und indirektes RDKS', 'Direkte Systeme messen Druck und Temperatur über Sensorventile. Indirekte Systeme verwenden die ABS-Sensoren und erkennen Abweichungen über die Raddrehzahl. Beide Varianten stellen beim Reifenwechsel besondere Anforderungen.'],
      ['Unser RDKS-Service', 'Wir stimmen Reifen und Ventile auf Ihr Fahrzeug ab, lernen Sensoren an und stellen das Kontrollsystem korrekt ein. Auch beim Aufbau eines zweiten Radsatzes unterstützen wir Sie.'],
    ],
  },
  {
    slug: 'eu-reifenlabel',
    title: 'EU-Reifenlabel',
    intro: 'Das EU-Reifenlabel liefert wichtige Informationen über die Eigenschaften eines neuen Reifens.',
    sections: [
      ['Dreifache Kennzeichnung', 'Das Label informiert über Kraftstoffeffizienz, externe Abrollgeräusche und Nasshaftung. Seit dem 1. Mai 2021 gelten die Vorgaben der EU-Verordnung 2020/740 mit aktualisierten Klassen und zusätzlichen Angaben.'],
      ['Kraftstoffeffizienz', 'Der Rollwiderstand beeinflusst den Kraftstoffverbrauch. Leicht laufende Reifen erreichen bessere Effizienzklassen und können dadurch Verbrauch und laufende Kosten reduzieren.'],
      ['Nasshaftung und Geräusch', 'Die Nasshaftung beschreibt den Bremsweg auf nasser Fahrbahn. Das externe Abrollgeräusch wird in Dezibel und mit einer A-bis-E-Klassifizierung angegeben.'],
    ],
  },
  {
    slug: 'offroad',
    title: 'Offroad',
    intro: 'SUVs und Geländefahrzeuge benötigen Reifen, die neben der Straße auf Schlamm, Sand, Steinen und unbefestigten Wegen sicher funktionieren.',
    sections: [
      ['Offroad-Reifen für jedes Gelände', 'Große Profilblöcke und eine starke Verbindung zum Untergrund ermöglichen die Kraftübertragung auf anspruchsvollen Fahrten. Unsere Spezialisten beraten zu Reifen für SUVs, Geländewagen und Nutzfahrzeuge.'],
      ['AT- und MT-Reifen', 'All-Terrain-Reifen bieten einen ausgewogenen Kompromiss zwischen Straße und leichtem Gelände. Mud-Terrain-Reifen sind grobstolliger und für überwiegend schlammige, nasse oder rutschige Untergründe ausgelegt.'],
      ['Persönliche Beratung', 'Bei der Auswahl zählen Einsatzzweck, Untergrund, Fahrleistung und Straßenanteil. Wir erklären Ihnen die Vor- und Nachteile der verschiedenen Profile und finden die passende Bereifung.'],
    ],
  },
];

export function getTireCategory(slug) {
  return TIRE_CATEGORIES.find((category) => category.slug === slug);
}
