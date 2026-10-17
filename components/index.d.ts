import type * as React from 'react';

/** Action control. One `primary` per view; labels come from the fixed CTA vocabulary. Renders an `<a>` when `href` is set. */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'inverse' | 'onDark';
  /** Height in px. 48 is the hero size (16px bold). Ignored by `link`. */
  size?: 32 | 40 | 48;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): React.ReactElement;

/** Fixed category tag. `gold` only for bullion, never beside blue. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> { tone?: 'neutral' | 'accent' | 'gold'; children?: React.ReactNode }
export declare function Badge(props: BadgeProps): React.ReactElement;

/** State that can change: a dot plus a word. */
export interface StatusChipProps extends React.HTMLAttributes<HTMLSpanElement> { tone?: 'neutral' | 'info' | 'success' | 'pending' | 'danger'; children?: React.ReactNode }
export declare function StatusChip(props: StatusChipProps): React.ReactElement;

/** A bordered panel. `footer` renders an ETA.CardFooter below the body: the place for a source line, a credit or a date of record. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> { footer?: React.ReactNode; children?: React.ReactNode }
export declare function Card(props: CardProps): React.ReactElement;
/** The hairline-topped footer of a Card, in the mono source style. */
export interface CardFooterProps extends React.HTMLAttributes<HTMLElement> { children?: React.ReactNode }
export declare function CardFooter(props: CardFooterProps): React.ReactElement;

/** One verified figure. Omit `value` to show the bracketed placeholder; `source` is always shown, as the card's footer. */
export interface StatTileProps extends React.HTMLAttributes<HTMLDivElement> { value?: React.ReactNode; label: React.ReactNode; source?: string }
export declare function StatTile(props: StatTileProps): React.ReactElement;
/** A row of two to four StatTiles. */
export interface StatRowProps { children?: React.ReactNode; className?: string }
export declare function StatRow(props: StatRowProps): React.ReactElement;

/** One of ETA's three offerings. Use ServiceRow to render the set. */
export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> { number: '01' | '02' | '03'; title: React.ReactNode; level?: 2 | 3 | 4; children?: React.ReactNode }
export declare function ServiceCard(props: ServiceCardProps): React.ReactElement;
export interface ServiceItem { title: string; description: string }
/** Always exactly three cards numbered 01 to 03; without `items` (or with any count but three) it renders the canonical offerings. */
export interface ServiceRowProps { items?: [ServiceItem, ServiceItem, ServiceItem]; level?: 2 | 3 | 4; className?: string }
export declare function ServiceRow(props: ServiceRowProps): React.ReactElement;
export declare const SERVICES: ReadonlyArray<{ number: string; title: string; description: string }>;

/** Uppercase tracked label above a heading. `slide` is the 24px slide-label size. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLElement> { as?: keyof JSX.IntrinsicElements; size?: 'default' | 'slide'; children?: React.ReactNode }
export declare function Eyebrow(props: EyebrowProps): React.ReactElement;

/** Opens a section: eyebrow, an argument headline ending in a period, optional lead. */
export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> { eyebrow?: React.ReactNode; title: React.ReactNode; lead?: React.ReactNode; level?: 1 | 2 | 3; align?: 'start' | 'center' }
export declare function SectionHeading(props: SectionHeadingProps): React.ReactElement;

/** The proposed ETA logo, drawn from tokens so it follows the theme. Match `tone` to the ground. */
export interface LogoProps extends React.SVGAttributes<SVGSVGElement> {
  variant?: 'horizontal' | 'stacked' | 'mark' | 'wordmark';
  /** color: paper/surface/card · reversed: band-dark or photo · mono / monoReversed: one ink · onAccent: on an accent fill · gold: ceremonial, band-dark only */
  tone?: 'color' | 'reversed' | 'mono' | 'monoReversed' | 'onAccent' | 'gold';
  /** CSS width; height follows. Defaults: 200 (lockups), 48 (mark). Minimums: horizontal 160, stacked 72, mark 16. */
  width?: number | string;
  /** Accessible name; defaults to "ET Advisory". */
  title?: string;
}
export declare function Logo(props: LogoProps): React.ReactElement;

declare global {
  interface Window {
    ETA: {
      Button: typeof Button; Badge: typeof Badge; StatusChip: typeof StatusChip; Card: typeof Card; CardFooter: typeof CardFooter; StatTile: typeof StatTile; StatRow: typeof StatRow;
      ServiceCard: typeof ServiceCard; ServiceRow: typeof ServiceRow; Eyebrow: typeof Eyebrow; SectionHeading: typeof SectionHeading; Logo: typeof Logo; SERVICES: typeof SERVICES;
    };
  }
}
