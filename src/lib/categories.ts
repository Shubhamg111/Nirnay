// Single source of truth for sections and categories.
// Import this anywhere a page needs to render a badge, filter, or nav link
// instead of re-declaring category-to-color maps per page.

export const SECTIONS = {
  finance: { label: 'Finance', color: 'text-brass', accent: 'brass' },
  tech: { label: 'Tech', color: 'text-pine', accent: 'pine' },
  gadgets: { label: 'Gadgets', color: 'text-crimson', accent: 'crimson' },
} as const;

export type Section = keyof typeof SECTIONS;

export const CATEGORIES_BY_SECTION: Record<Section, string[]> = {
  finance: ['NEPSE Basics', 'Mutual Funds', 'Personal Finance', 'Real Estate', 'Case Studies'],
  tech: ['Software', 'AI Tools', 'Programming', 'Internet & Apps'],
  gadgets: ['Reviews', 'Buying Guides', 'Comparisons'],
};

export const ALL_CATEGORIES = Object.values(CATEGORIES_BY_SECTION).flat();

// Every category maps back to its section's color, so a single badge lookup works
// regardless of which of the three content areas a post belongs to.
export function sectionOf(category: string): Section {
  for (const [section, categories] of Object.entries(CATEGORIES_BY_SECTION)) {
    if (categories.includes(category)) return section as Section;
  }
  return 'finance';
}

export function categoryColorClass(category: string): string {
  return SECTIONS[sectionOf(category)].color;
}


export const POSTS_PER_PAGE = 9;