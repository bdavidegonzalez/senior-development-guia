export interface NavigationLink {
  label: string;
  id: string;
  badge?: string;
  badgeClass?: string;
}

export interface NavigationSection {
  section: string;
  links: NavigationLink[];
}

export interface RoadmapItem {
  step: number;
  title: string;
  desc: string;
  icon: string;
}

export interface ContentSection {
  title: string;
  content?: string;
  roadmap?: RoadmapItem[];
  highlight?: string;
  code?: string;
}

export interface PageContent {
  title: string;
  subtitle: string;
  sections: ContentSection[];
}

export type SiteContent = Record<string, PageContent>;
