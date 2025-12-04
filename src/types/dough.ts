export type Region = 'Italy' | 'Americas' | 'Europe' | 'Global';
export type Category = 'Pizza' | 'Bread' | 'Enriched' | 'Flatbread';

export interface DoughStyle {
  id: string;
  name: string;
  
  // Facetas de Navegação Inteligente
  region: Region;
  subRegion: string; // ex: Naples, New York
  category: Category;
  tags: string[]; // ex: ["High Heat", "Sourdough", "STG", "Direct Method"]
  
  description: string; // Resumo curto para o card
  history_context: string; // História completa para a página de detalhes
  
  // Dados para a UI "Atlas Científico" (Gauges e Relógios)
  specs: {
    hydration: { ideal: number; min: number; max: number };
    ovenTemp: { ideal: number; min: number; max: number }; // Celsius
    fermentationTime: string; // ex: "24h"
    difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  };

  // Nível 2.5 - Ciência Profunda (O "Porquê")
  scientificProfile: {
    flourRheology: string; // Explicação técnica da farinha (W, P/L)
    processScience: string; // O "Segredo" químico/físico deste estilo
  };

  // Timeline Didática (Passo a Passo com Ciência)
  process: Array<{
    phase: 'Mix' | 'Bulk' | 'Ball' | 'Bake';
    title: string;
    duration: string;
    action: string; // O QUE fazer
    science: string; // O PORQUÊ fazer (Didático)
  }>;

  // Referências para Validação
  references: string[]; 
}
