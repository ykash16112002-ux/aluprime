export type PageTab = 'home' | 'catalog' | 'projects' | 'tech' | 'calculator' | 'about' | 'contacts';

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  accent: string;
  badge: string;
  svgType: 'panoramic' | 'storefront' | 'frameless' | 'balcony';
  imageUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: 'residence' | 'penthouse' | 'commercial';
  categoryLabel: string;
  year: string;
  area: string;
  glassFormula: string;
  profileBrand: string;
  description: string;
  highlights: string[];
  svgTheme: 'modern-villa' | 'penthouse-terrace' | 'boutique-facade';
  imageUrl?: string;
}

export interface CalculatorState {
  type: string;
  profile: string;
  glassType: string;
  width: number;
  height: number;
  leaves: number;
  withInstallation: boolean;
  withSmartTint: boolean;
}

export interface ConsultationForm {
  name: string;
  phone: string;
  comment?: string;
  serviceType?: string;
  preferredTime?: string;
}
