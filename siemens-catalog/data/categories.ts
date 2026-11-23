import type { CategorySlug } from './types';

export interface Category {
  slug: CategorySlug;
  name: string;
  nameEn: string;
  description: string;
  icon: string;
  order: number;
  subcategories: { slug: string; name: string }[];
}

export const categories: Category[] = [
  {
    slug: 'plc',
    name: 'PLC و کنترلر',
    nameEn: 'PLC',
    order: 1,
    icon: 'cpu',
    description: 'کنترلرهای منطقی برنامه‌پذیر زیمنس و برندهای صنعتی',
    subcategories: [
      { slug: 's7-1200', name: 'سری S7-1200' },
      { slug: 's7-1500', name: 'سری S7-1500' },
      { slug: 's7-300-400', name: 'سری S7-300/400' },
      { slug: 'modules', name: 'ماژول‌های توسعه' },
    ],
  },
  {
    slug: 'hmi',
    name: 'HMI و نمایشگر',
    nameEn: 'HMI',
    order: 2,
    icon: 'monitor',
    description: 'پنل‌های اپراتوری و نمایشگرهای صنعتی',
    subcategories: [
      { slug: 'basic-panel', name: 'Basic Panel' },
      { slug: 'comfort-panel', name: 'Comfort Panel' },
      { slug: 'industrial-pc', name: 'PC صنعتی' },
    ],
  },
  {
    slug: 'drive-inverter',
    name: 'درایو و اینورتر',
    nameEn: 'Drives & Inverters',
    order: 3,
    icon: 'gauge',
    description: 'اینورتر و درایوهای AC تک‌فاز و سه‌فاز',
    subcategories: [
      { slug: 'sinamics-g120', name: 'SINAMICS G120' },
      { slug: 'sinamics-v20', name: 'SINAMICS V20' },
      { slug: 'soft-starter', name: 'سافت استارتر' },
    ],
  },
  {
    slug: 'industrial-network',
    name: 'تجهیزات شبکه صنعتی',
    nameEn: 'Industrial Network',
    order: 4,
    icon: 'network',
    description: 'سوئیچ، روتر و ماژول‌های ارتباطی صنعتی',
    subcategories: [
      { slug: 'switches', name: 'سوئیچ صنعتی' },
      { slug: 'access-point', name: 'اکسس پوینت' },
      { slug: 'media-converter', name: 'مدیا کانورتر' },
    ],
  },
  {
    slug: 'sensor',
    name: 'سنسور',
    nameEn: 'Sensors',
    order: 5,
    icon: 'radar',
    description: 'سنسورهای مجاورتی، نوری، فشار و دما',
    subcategories: [
      { slug: 'proximity', name: 'مجاورتی' },
      { slug: 'photoelectric', name: 'نوری' },
      { slug: 'pressure-temp', name: 'فشار و دما' },
    ],
  },
  {
    slug: 'power-supply',
    name: 'منبع تغذیه',
    nameEn: 'Power Supply',
    order: 6,
    icon: 'plug',
    description: 'منابع تغذیهٔ DIN-Rail و سوئیچینگ صنعتی',
    subcategories: [
      { slug: 'din-rail', name: 'DIN-Rail' },
      { slug: 'ups', name: 'UPS صنعتی' },
    ],
  },
  {
    slug: 'protection',
    name: 'کلید و تجهیزات حفاظتی',
    nameEn: 'Protection',
    order: 7,
    icon: 'shield',
    description: 'کلید مینیاتوری، کنتاکتور، رله و حفاظت',
    subcategories: [
      { slug: 'mcb', name: 'کلید مینیاتوری' },
      { slug: 'contactor', name: 'کنتاکتور و رله' },
      { slug: 'surge', name: 'محافظ برق' },
    ],
  },
];
