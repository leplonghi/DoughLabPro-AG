import React, { useState } from 'react';
import { useTranslation } from '@/i18n';
import AppPageLayout from '@/components/ui/AppPageLayout';
import AppSurface from '@/components/ui/AppSurface';

const DesignSystemPage: React.FC = () => {
  const { t } = useTranslation(['common']);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors = [
    {
      name: 'dlp-primary-DEFAULT',
      value: '#43b05d',
      desc: 'Primary brand color - used for CTAs and active states'
    },
    {
      name: 'dlp-primary-hover',
      value: '#2f8b49',
      desc: 'Darker shade for hover states'
    },
    {
      name: 'dlp-primary-light',
      value: '#DCFCE7',
      desc: 'Light background for success/positive contexts'
    },
    {
      name: 'dlp-primary-green',
      value: '#43b05d',
      desc: 'Alias for primary green variant'
    },
    {
      name: 'dlp-primary-dark',
      value: '#194a2d',
      desc: 'Darkest shade for emphasis'
    },
    {
      name: 'dlp-primary-lime',
      value: '#8DE0A1',
      desc: 'Lighter green for secondary use'
    }
  ];

  const semanticColors = [
    { name: 'Success', value: '#43b05d', desc: 'Positive actions' },
    { name: 'Warning', value: '#F59E0B', desc: 'Caution and alerts' },
    { name: 'Error', value: '#EF4444', desc: 'Errors and destructive actions' },
    { name: 'Border', value: '#D7E9DB', desc: 'Border and divider elements' }
  ];

  const textColors = [
    { name: 'text-primary', value: '#0D1B12', desc: 'Main text' },
    { name: 'text-secondary', value: '#23372B', desc: 'Secondary text' },
    { name: 'text-tertiary', value: '#2D4436', desc: 'Tertiary text' },
    { name: 'text-muted', value: '#385141', desc: 'Muted text' }
  ];

  const bgColors = [
    { name: 'bg-DEFAULT', value: '#F5FBF4', desc: 'Page background' },
    { name: 'bg-soft', value: '#EEF7EF', desc: 'Soft background' },
    { name: 'bg-card', value: '#FFFFFFF2', desc: 'Card/surface background' },
    { name: 'bg-muted', value: '#F2F8F2', desc: 'Muted background' },
    { name: 'bg-surface', value: '#FFFFFFF2', desc: 'Surface background' }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const ColorSwatch: React.FC<{ name: string; value: string; desc: string }> = ({ name, value, desc }) => (
    <div
      className="p-4 rounded-lg bg-dlp-bg-card border border-dlp-border cursor-pointer hover:shadow-dlp-md transition-shadow"
      onClick={() => copyToClipboard(value)}
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-12 h-12 rounded-md border border-dlp-border"
          style={{ backgroundColor: value }}
        />
        <div className="flex-1">
          <p className="font-medium text-dlp-text-primary text-sm">{name}</p>
          <p className="text-xs text-dlp-text-muted">{value}</p>
        </div>
      </div>
      <p className="text-xs text-dlp-text-secondary mb-2">{desc}</p>
      {copiedColor === value && (
        <p className="text-xs text-dlp-primary font-medium">✓ Copied</p>
      )}
    </div>
  );

  return (
    <AppPageLayout width="content" density="default">
      <div className="space-y-12 py-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-heading font-bold text-dlp-text-primary mb-2">
            Design System
          </h1>
          <p className="text-dlp-text-secondary">
            DoughLab Pro visual and component standards. Click colors to copy hex values.
          </p>
        </div>

        {/* Primary Colors */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-dlp-text-primary mb-4">
            Primary Color System
          </h2>
          <p className="text-dlp-text-secondary mb-6 text-sm">
            The consolidated dlp-primary palette with all variants for consistent UI design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {colors.map((color) => (
              <ColorSwatch key={color.name} {...color} />
            ))}
          </div>
        </section>

        {/* Semantic Colors */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-dlp-text-primary mb-4">
            Semantic Colors
          </h2>
          <p className="text-dlp-text-secondary mb-6 text-sm">
            Contextual colors for status, warnings, and errors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {semanticColors.map((color) => (
              <ColorSwatch key={color.name} {...color} />
            ))}
          </div>
        </section>

        {/* Text Colors */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-dlp-text-primary mb-4">
            Text Colors
          </h2>
          <p className="text-dlp-text-secondary mb-6 text-sm">
            Text color hierarchy for readable content.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {textColors.map((color) => (
              <ColorSwatch key={color.name} {...color} />
            ))}
          </div>
        </section>

        {/* Background Colors */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-dlp-text-primary mb-4">
            Background Colors
          </h2>
          <p className="text-dlp-text-secondary mb-6 text-sm">
            Background palette for surfaces and layers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bgColors.map((color) => (
              <ColorSwatch key={color.name} {...color} />
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="border-t border-dlp-border pt-12">
          <h2 className="text-2xl font-heading font-bold text-dlp-text-primary mb-6">
            Typography
          </h2>

          <div className="space-y-8">
            {/* Font Families */}
            <div>
              <h3 className="text-lg font-semibold text-dlp-text-primary mb-4">Font Families</h3>
              <div className="space-y-3">
                <AppSurface className="p-4">
                  <p className="font-sans text-sm text-dlp-text-secondary mb-2">Manrope (sans-serif)</p>
                  <p className="font-sans text-lg text-dlp-text-primary">
                    The quick brown fox jumps over the lazy dog
                  </p>
                </AppSurface>
                <AppSurface className="p-4">
                  <p className="font-sans text-sm text-dlp-text-secondary mb-2">Outfit (heading-serif)</p>
                  <p className="font-heading text-lg text-dlp-text-primary font-bold">
                    The quick brown fox jumps over the lazy dog
                  </p>
                </AppSurface>
              </div>
            </div>

            {/* Font Sizes */}
            <div>
              <h3 className="text-lg font-semibold text-dlp-text-primary mb-4">Font Sizes</h3>
              <div className="space-y-2">
                <AppSurface className="p-4">
                  <p className="text-xs text-dlp-text-secondary mb-1">xs - Text Extra Small</p>
                  <p className="text-xs text-dlp-text-primary">The quick brown fox</p>
                </AppSurface>
                <AppSurface className="p-4">
                  <p className="text-xs text-dlp-text-secondary mb-1">sm - Text Small</p>
                  <p className="text-sm text-dlp-text-primary">The quick brown fox</p>
                </AppSurface>
                <AppSurface className="p-4">
                  <p className="text-xs text-dlp-text-secondary mb-1">base - Text Base</p>
                  <p className="text-base text-dlp-text-primary">The quick brown fox</p>
                </AppSurface>
                <AppSurface className="p-4">
                  <p className="text-xs text-dlp-text-secondary mb-1">lg - Text Large</p>
                  <p className="text-lg text-dlp-text-primary">The quick brown fox</p>
                </AppSurface>
                <AppSurface className="p-4">
                  <p className="text-xs text-dlp-text-secondary mb-1">xl - Text Extra Large</p>
                  <p className="text-xl text-dlp-text-primary">The quick brown fox</p>
                </AppSurface>
                <AppSurface className="p-4">
                  <p className="text-xs text-dlp-text-secondary mb-1">2xl - Text 2XL</p>
                  <p className="text-2xl text-dlp-text-primary font-heading">The quick brown fox</p>
                </AppSurface>
              </div>
            </div>

            {/* Font Weights */}
            <div>
              <h3 className="text-lg font-semibold text-dlp-text-primary mb-4">Font Weights</h3>
              <div className="space-y-2">
                <AppSurface className="p-4">
                  <p className="font-normal text-dlp-text-primary">Normal weight (400)</p>
                </AppSurface>
                <AppSurface className="p-4">
                  <p className="font-medium text-dlp-text-primary">Medium weight (500)</p>
                </AppSurface>
                <AppSurface className="p-4">
                  <p className="font-semibold text-dlp-text-primary">Semibold weight (600)</p>
                </AppSurface>
                <AppSurface className="p-4">
                  <p className="font-bold text-dlp-text-primary">Bold weight (700)</p>
                </AppSurface>
              </div>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="border-t border-dlp-border pt-12">
          <h2 className="text-2xl font-heading font-bold text-dlp-text-primary mb-6">
            Components
          </h2>

          <div className="space-y-8">
            {/* Buttons */}
            <div>
              <h3 className="text-lg font-semibold text-dlp-text-primary mb-4">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-2 rounded-lg bg-dlp-primary text-white font-medium hover:bg-dlp-primary-hover transition-colors">
                  Primary Button
                </button>
                <button className="px-6 py-2 rounded-lg bg-dlp-bg-soft text-dlp-text-primary font-medium border border-dlp-border hover:bg-dlp-bg-muted transition-colors">
                  Secondary Button
                </button>
                <button className="px-6 py-2 rounded-lg text-dlp-primary font-medium hover:bg-dlp-primary-light transition-colors">
                  Ghost Button
                </button>
                <button disabled className="px-6 py-2 rounded-lg bg-slate-200 text-slate-500 font-medium cursor-not-allowed">
                  Disabled Button
                </button>
              </div>
            </div>

            {/* Cards */}
            <div>
              <h3 className="text-lg font-semibold text-dlp-text-primary mb-4">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AppSurface className="p-6">
                  <h4 className="text-lg font-semibold text-dlp-text-primary mb-2">
                    Default Card
                  </h4>
                  <p className="text-dlp-text-secondary text-sm">
                    Standard card surface with padding and subtle border.
                  </p>
                </AppSurface>
                <AppSurface className="p-6 border-2 border-dlp-primary">
                  <h4 className="text-lg font-semibold text-dlp-text-primary mb-2">
                    Accent Card
                  </h4>
                  <p className="text-dlp-text-secondary text-sm">
                    Card with accent border for emphasis.
                  </p>
                </AppSurface>
              </div>
            </div>

            {/* Inputs */}
            <div>
              <h3 className="text-lg font-semibold text-dlp-text-primary mb-4">Form Inputs</h3>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-dlp-text-primary mb-2">
                    Text Input
                  </label>
                  <input
                    type="text"
                    placeholder="Enter text..."
                    className="w-full px-4 py-2 rounded-lg border border-dlp-border bg-dlp-bg-card text-dlp-text-primary placeholder-dlp-text-muted focus:outline-none focus:ring-2 focus:ring-dlp-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dlp-text-primary mb-2">
                    Textarea
                  </label>
                  <textarea
                    placeholder="Enter multiple lines..."
                    className="w-full px-4 py-2 rounded-lg border border-dlp-border bg-dlp-bg-card text-dlp-text-primary placeholder-dlp-text-muted focus:outline-none focus:ring-2 focus:ring-dlp-primary"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div>
              <h3 className="text-lg font-semibold text-dlp-text-primary mb-4">Alert States</h3>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-dlp-primary-light border border-dlp-primary text-dlp-text-primary">
                  ✓ Success message or positive feedback
                </div>
                <div className="p-4 rounded-lg bg-yellow-50 border border-dlp-warning text-dlp-text-primary">
                  ⚠ Warning message or caution notice
                </div>
                <div className="p-4 rounded-lg bg-red-50 border border-dlp-error text-dlp-text-primary">
                  ✕ Error message or destructive action
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing and Shadows */}
        <section className="border-t border-dlp-border pt-12">
          <h2 className="text-2xl font-heading font-bold text-dlp-text-primary mb-6">
            Spacing & Shadows
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Spacing */}
            <div>
              <h3 className="text-lg font-semibold text-dlp-text-primary mb-4">Spacing Scale</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-2 bg-dlp-primary rounded"></div>
                  <p className="text-sm text-dlp-text-secondary">4px (0.25rem)</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 bg-dlp-primary rounded"></div>
                  <p className="text-sm text-dlp-text-secondary">8px (0.5rem)</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 bg-dlp-primary rounded"></div>
                  <p className="text-sm text-dlp-text-secondary">12px (0.75rem)</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 bg-dlp-primary rounded"></div>
                  <p className="text-sm text-dlp-text-secondary">16px (1rem)</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 bg-dlp-primary rounded"></div>
                  <p className="text-sm text-dlp-text-secondary">24px (1.5rem)</p>
                </div>
              </div>
            </div>

            {/* Shadows */}
            <div>
              <h3 className="text-lg font-semibold text-dlp-text-primary mb-4">Shadow System</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg shadow-dlp-sm bg-dlp-bg-card text-dlp-text-secondary text-sm">
                  Shadow SM - Subtle elevation
                </div>
                <div className="p-4 rounded-lg shadow-dlp-md bg-dlp-bg-card text-dlp-text-secondary text-sm">
                  Shadow MD - Medium elevation
                </div>
                <div className="p-4 rounded-lg shadow-dlp-lg bg-dlp-bg-card text-dlp-text-secondary text-sm">
                  Shadow LG - Prominent elevation
                </div>
                <div className="p-4 rounded-lg shadow-dlp-xl bg-dlp-bg-card text-dlp-text-secondary text-sm">
                  Shadow XL - Maximum elevation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animations */}
        <section className="border-t border-dlp-border pt-12">
          <h2 className="text-2xl font-heading font-bold text-dlp-text-primary mb-6">
            Animations
          </h2>
          <p className="text-dlp-text-secondary mb-6 text-sm">
            Predefined animations for consistent motion design.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border border-dlp-border rounded-lg">
              <p className="text-sm font-medium text-dlp-text-primary mb-4">slide-up (0.5s)</p>
              <div className="h-16 flex items-center justify-center">
                <div className="animate-slide-up w-8 h-8 bg-dlp-primary rounded"></div>
              </div>
            </div>

            <div className="p-4 border border-dlp-border rounded-lg">
              <p className="text-sm font-medium text-dlp-text-primary mb-4">fade-in (0.4s)</p>
              <div className="h-16 flex items-center justify-center">
                <div className="animate-fade-in w-8 h-8 bg-dlp-primary rounded"></div>
              </div>
            </div>

            <div className="p-4 border border-dlp-border rounded-lg">
              <p className="text-sm font-medium text-dlp-text-primary mb-4">bounce (1s, infinite)</p>
              <div className="h-16 flex items-center justify-center">
                <div className="animate-bounce w-8 h-8 bg-dlp-primary rounded"></div>
              </div>
            </div>

            <div className="p-4 border border-dlp-border rounded-lg">
              <p className="text-sm font-medium text-dlp-text-primary mb-4">pulse (2s, infinite)</p>
              <div className="h-16 flex items-center justify-center">
                <div className="animate-pulse w-8 h-8 bg-dlp-primary rounded"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-dlp-border pt-12 text-center text-dlp-text-muted text-sm">
          <p>Design System Reference • Last Updated: 2026-04-10</p>
          <p className="mt-2">This page consolidates all design tokens and components for DoughLab Pro.</p>
        </div>
      </div>
    </AppPageLayout>
  );
};

export default DesignSystemPage;