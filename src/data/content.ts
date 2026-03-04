import { assets } from './assets';

export interface Template {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  badge?: string;
  category: string;
}

export interface Theme {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface SportsGame {
  id: string;
  team1: { name: string; logo: string; color: string };
  team2: { name: string; logo: string; color: string };
  date: string;
  time: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}

export const categories: Category[] = [
  { id: 'menus', name: 'Menus', color: 'var(--color-menus)' },
  { id: 'food-drink', name: 'Food & Drink', color: 'var(--color-food-drink)' },
  { id: 'events', name: 'Events', color: 'var(--color-events)' },
  { id: 'seasonal', name: 'Seasonal', color: 'var(--color-seasonal)' },
  { id: 'apps-games', name: 'Apps & Games', color: 'var(--color-apps-games)' },
  { id: 'social', name: 'Connect social media', color: 'var(--color-social)' },
];

export const trendingTemplates: Template[] = [
  {
    id: '1',
    title: 'Nightlife vibes',
    image: assets.templates.cocktail1,
    badge: 'New',
    category: 'food-drink',
  },
  {
    id: '2',
    title: 'Cocktail hour',
    image: assets.templates.cocktail2,
    badge: 'New',
    category: 'food-drink',
  },
  {
    id: '3',
    title: 'Happy hour',
    image: assets.templates.cocktail1,
    category: 'food-drink',
  },
];

export const popularThemes: Theme[] = [
  {
    id: '1',
    title: 'Craft beer selection',
    subtitle: "Display what's on tap",
    icon: assets.themes.beer,
  },
  {
    id: '2',
    title: 'Weekly menu',
    subtitle: 'Show the weekly menu',
    icon: assets.themes.menu,
  },
  {
    id: '3',
    title: 'Weekend brunch special',
    subtitle: 'Feature bottomless mimosas',
    icon: assets.themes.brunch,
  },
  {
    id: '4',
    title: 'Live music night',
    subtitle: 'Highlight local bands',
    icon: assets.themes.beer,
  },
];

export const upcomingGames: SportsGame[] = [
  {
    id: '1',
    team1: { name: 'NY Rangers', logo: assets.sports.rangers, color: '#ff8b9e' },
    team2: { name: 'Edmonton Oilers', logo: assets.sports.oilers, color: '#ffc8a5' },
    date: '27 FEBRUARY',
    time: '1:05 PM',
  },
  {
    id: '2',
    team1: { name: 'New York Mets', logo: assets.sports.mets, color: '#b2cfff' },
    team2: { name: 'Baltimore Orioles', logo: assets.sports.orioles, color: '#ffac8a' },
    date: '27 FEBRUARY',
    time: '1:05 PM',
  },
];

export const apps = [
  { id: 'rockbot', name: 'Rockbot', icon: assets.apps.rockbot },
  { id: 'instagram', name: 'Instagram', icon: assets.apps.instagram },
  { id: 'kahoot', name: 'Kahoot', icon: assets.apps.kahoot },
];

export const featuredContent = {
  title: 'Super Bowl LX',
  subtitle: 'Get ready for the biggest game of the year',
  image: assets.featured.superBowl,
  overlayImage: assets.featured.superBowlOverlay,
};
