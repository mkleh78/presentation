import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Präsentationen',
      locales: {
        root: {
          label: 'Deutsch',
          lang: 'de',
        },
      },
      sidebar: [
        {
          label: 'Business & Entrepreneurship',
          items: [
            { label: '100M Offers', slug: 'business/100m-offers' },
            { label: 'Million Dollar Weekend', slug: 'business/million-dollar-weekend' },
            { label: 'MDW Implementation Guide', slug: 'business/mdw-implementation-guide' },
            { label: 'Buyback Principle', slug: 'business/buyback' },
            { label: 'Sam Parr', slug: 'business/sam-parr' },
            { label: 'Business Model Canvas', slug: 'business/bmc' },
            { label: 'Just Options Business Concept', slug: 'business/just-options-business-concept' },
          ],
        },
        {
          label: 'Finanzen & Märkte',
          items: [
            { label: 'Dalio Forces', slug: 'finanzen/dalio-forces' },
            { label: 'Market Indicators', slug: 'finanzen/market-indicators' },
            { label: 'Market Indicators v2', slug: 'finanzen/market-indicators-v2' },
            { label: 'Bitcoin Charts', slug: 'finanzen/bitcoin-charts' },
            { label: 'Financial Wellbeing Vergleich', slug: 'finanzen/financial-wellbeing-comparison' },
            { label: 'Financial Wellbeing PPP', slug: 'finanzen/financial-wellbeing-ppp' },
            { label: 'Stellschrauben', slug: 'finanzen/stellschrauben' },
            { label: 'Consolidated Needs Chart', slug: 'finanzen/consolidated-needs-chart' },
          ],
        },
        {
          label: 'Optionshandel',
          items: [
            { label: 'Optionen Grundbegriffe', slug: 'optionen/grundbegriffe' },
            { label: 'Optionen Übersicht', slug: 'optionen/uebersicht' },
            { label: 'Options (EN)', slug: 'optionen/options-en' },
            { label: 'Options Strategies Basics', slug: 'optionen/strategies-basics' },
            { label: 'Weiterführende Strategien', slug: 'optionen/weiterfuehrende-strategien' },
            { label: 'Profis Strategien', slug: 'optionen/profis-strategien' },
            { label: 'Option Pricing', slug: 'optionen/option-pricing' },
            { label: 'LEAPS', slug: 'optionen/leaps' },
            { label: 'Time Value', slug: 'optionen/time-value' },
            { label: 'Volatility', slug: 'optionen/volatility' },
            { label: 'Volatility v2', slug: 'optionen/volatility-v2' },
            { label: 'Options Trader Pro', slug: 'optionen/trader-pro' },
            { label: 'TOC Enhanced', slug: 'optionen/toc-enhanced' },
          ],
        },
        {
          label: 'Persönliche Entwicklung',
          items: [
            { label: 'Atomic Habits', slug: 'entwicklung/atomic-habits' },
            { label: 'Seven Habits', slug: 'entwicklung/seven-habits' },
            { label: 'Clear Thinking', slug: 'entwicklung/clear-thinking' },
            { label: 'Essentialismus', slug: 'entwicklung/essentialismus' },
            { label: 'Effortless', slug: 'entwicklung/effortless' },
            { label: 'Breath', slug: 'entwicklung/breath' },
            { label: 'Oxygen Advantage', slug: 'entwicklung/oxygen-advantage' },
            { label: 'Slow Productivity', slug: 'entwicklung/slow-productivity' },
          ],
        },
        {
          label: 'Lernen & Produktivität',
          items: [
            { label: 'Make It Stick', slug: 'lernen/make-it-stick' },
            { label: 'Mind for Numbers', slug: 'lernen/mind-numbers' },
            { label: 'Smart Notes', slug: 'lernen/smart-notes' },
            { label: 'Timeboxing', slug: 'lernen/timeboxing' },
          ],
        },
        {
          label: 'Technologie',
          items: [
            { label: 'KI Trends 2025', slug: 'technologie/ki-trends-2025' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
});
