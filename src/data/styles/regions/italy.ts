import { DoughStyle } from '../../../types/dough';

export const italianStyles: DoughStyle[] = [
  {
    id: "napoli-stg",
    name: "Neapolitan (AVPN)",
    origin_tags: ["Pizza", "Italy", "STG/TSG Status", "High Heat"],
    description: "The classic Verace Pizza Napoletana, strictly codified by the AVPN. Soft, pliable, and foldable, with a distinct cornicione and slight charring.",
    history_context: "Officially recognized as a Traditional Speciality Guaranteed (TSG) product by the EU. Its methods are protected to preserve the authentic Neapolitan tradition.",
    base_formula: [
      { name: "Flour (Tipo 00)", percentage: 100 },
      { name: "Water", percentage: 58.5 },
      { name: "Salt", percentage: 2.75 },
      { name: "Yeast (Fresh)", percentage: 0.2 }
    ],
    specs: {
      hydration: { ideal: 58.5, min: 55.5, max: 62.5 },
      oven_temp: { ideal: 457.5, min: 430, max: 485 },
      flour_w: "W280-320",
      fermentation_total_time: "24h",
      difficulty: "Hard"
    },
    process: [
      {
        order: 1,
        phase: 'Mix',
        title: 'Initial Mixing',
        duration: '20 min',
        action_text: "Dissolve salt in water, add yeast, then gradually add flour. Mix until smooth and soft.",
        science_text: "Salt inhibits yeast initially; dissolving it first ensures even distribution. Gradual flour addition controls hydration and gluten formation."
      },
      {
        order: 2,
        phase: 'Bulk',
        title: 'Puntata (First Rise)',
        duration: '8-12h',
        temperature: '22°C',
        action_text: "Cover the dough mass in an airtight container. Let it rest at controlled room temperature.",
        science_text: "Primary fermentation develops organic acids (flavor) and strengthens gluten structure via network alignment."
      },
      {
        order: 3,
        phase: 'Ball',
        title: 'Appretto (Second Rise)',
        duration: '4-6h',
        temperature: '22°C',
        action_text: "Divide into 250g balls. Place in dough boxes. Allow to relax and rise again.",
        science_text: "Relaxation phase. Gluten network reorganizes to allow extensibility (extensibility > elasticity) during manual stretching."
      },
      {
        order: 4,
        phase: 'Bake',
        title: 'Wood-Fired Bake',
        duration: '60-90s',
        temperature: '457°C',
        action_text: "Bake in a dome oven. Rotate frequently for even charring.",
        science_text: "Violent oven spring. The 'Leopard Spotting' occurs due to rapid Maillard reaction on raised micro-bubbles on the cornicione."
      }
    ],
    source_reference: "AVPN International Regulations (Disciplinare 2024)",
    last_updated: "2024-05-15"
  }
];
