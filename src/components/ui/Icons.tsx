import React from 'react';
import { useTranslation } from '@/i18n';
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
  Filter,
  Search,
  LogOut,
  ExternalLink,
  Calculator,
  LayoutList,
  Rss,
  FlaskConical,
  BookOpen,
  GraduationCap,
  ShoppingBag,
  User,
  Users,
  PlusCircle,
  MinusCircle,
  Pencil,
  Trash2,
  Check,
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  Lock,
  Copy,
  FileText,
  Download,
  Upload,
  Share2,
  Star,
  Heart,
  Bookmark,
  Settings,
  ShieldCheck,
  Sparkles,
  Loader2,
  Tag,
  MessageSquare,
  ArrowDownToLine,
  Wheat,
  Droplets,
  Hexagon,
  Droplet,
  Flame,
  Clock,
  Box,
  Wrench,
  Globe,
  LineChart,
  List,
  Image,
  Pizza,
  Puzzle,
  HelpCircle,
  Save,
  Activity,
  Sun,
  Snowflake,
  Thermometer,
  Lightbulb,
  Scale,
  BarChart3,
  Printer,
  Home,
  ArrowRightLeft,
  ArrowLeft,
  ArrowRight,
  ClipboardCheck,
  Sliders,
  Cloud,
  Globe2,
  LucideProps,
  Target,
  Crosshair,
  RotateCcw,
  Rocket,
  Moon,
  ChefHat,
  Sandwich,
  Cookie,
  Croissant,
  Milk,
  Egg,
  Candy,
  Beef,
  Grape,
  Leaf,
  GlassWater,
  Microwave,
  Waves,
  Microscope,
  History,
  Utensils,
  Triangle,
  RefreshCw,
  Timer,
  Layers,
  Move,
  Disc,
  ArrowDown,
  Soup,
  Calendar,
  Bell,
  LayoutGrid
} from 'lucide-react';

type CustomIconProps = React.SVGProps<SVGSVGElement>;

const DoughLabIconBase: React.FC<CustomIconProps & { viewBox?: string }> = ({
  children,
  viewBox = '0 0 24 24',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = 1.85,
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap={strokeLinecap}
    strokeLinejoin={strokeLinejoin}
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

const DoughLabCalculatorIcon: React.FC<CustomIconProps> = (props) => (
  <DoughLabIconBase {...props}>
    <rect x="4.5" y="3.5" width="15" height="17" rx="3.5" />
    <path d="M8 7.5h8" />
    <path d="M8 10.5h3" />
    <path d="M13 10.5h3" />
    <path d="M8 13.5h3" />
    <path d="M13 13.5h3" />
    <path d="M8 16.5h8" />
    <circle cx="16.1" cy="7.5" r="0.75" fill="currentColor" stroke="none" />
  </DoughLabIconBase>
);

const DoughLabBatchIcon: React.FC<CustomIconProps> = (props) => (
  <DoughLabIconBase {...props}>
    <path d="M7 6.5h10" />
    <path d="M6.25 6.5 4.5 9v8a2.5 2.5 0 0 0 2.5 2.5h10A2.5 2.5 0 0 0 19.5 17V9l-1.75-2.5" />
    <path d="M8 11.5h8" />
    <path d="M8 14.5h5.5" />
    <path d="M9 3.75h6" />
  </DoughLabIconBase>
);

const DoughLabLabIcon: React.FC<CustomIconProps> = (props) => (
  <DoughLabIconBase {...props}>
    <path d="M9 3.75v4.1l-3.7 6.65A3.6 3.6 0 0 0 8.45 20h7.1a3.6 3.6 0 0 0 3.15-5.5L15 7.85v-4.1" />
    <path d="M8.2 8.7h7.6" />
    <path d="M8 14.5c1.15-.8 2.25-1.2 3.35-1.2 1.7 0 2.7.95 4.65.95.6 0 1.22-.1 1.9-.38" />
    <circle cx="10.2" cy="10.7" r="0.85" fill="currentColor" stroke="none" />
    <circle cx="14.2" cy="11.8" r="0.65" fill="currentColor" stroke="none" />
  </DoughLabIconBase>
);

const DoughLabBookIcon: React.FC<CustomIconProps> = (props) => (
  <DoughLabIconBase {...props}>
    <path d="M6 5.25h4.75c1.5 0 2.55.42 3.25 1.2.7-.78 1.75-1.2 3.25-1.2H18a1.5 1.5 0 0 1 1.5 1.5v10.5a.75.75 0 0 1-1.08.68c-.78-.38-1.62-.57-2.52-.57H14c-1.18 0-2.14.96-2.14 2.14V8.1c0-1.58-1.28-2.85-2.86-2.85H6A1.5 1.5 0 0 0 4.5 6.75v10.5a.75.75 0 0 0 1.08.68c.78-.38 1.62-.57 2.52-.57H10c.8 0 1.53.2 2.14.56" />
    <path d="M12 8.25v11.1" />
  </DoughLabIconBase>
);

const DoughLabStudyIcon: React.FC<CustomIconProps> = (props) => (
  <DoughLabIconBase {...props}>
    <path d="M5.5 8.25 12 5l6.5 3.25L12 11.5 5.5 8.25Z" />
    <path d="M7.25 10.35v4.1c0 1.05 2.1 2.3 4.75 2.3s4.75-1.25 4.75-2.3v-4.1" />
    <path d="M18.5 9.2v4.05" />
    <circle cx="18.5" cy="15.8" r="1" fill="currentColor" stroke="none" />
  </DoughLabIconBase>
);

const DoughLabCommunityIcon: React.FC<CustomIconProps> = (props) => (
  <DoughLabIconBase {...props}>
    <circle cx="9" cy="9" r="2.5" />
    <circle cx="15.25" cy="8.25" r="2.05" />
    <path d="M4.75 18c.55-2.45 2.52-4 4.95-4h1.05c2.43 0 4.4 1.55 4.95 4" />
    <path d="M15.25 13.25h.7c1.68 0 3.1 1.08 3.55 2.75" />
  </DoughLabIconBase>
);

const DoughLabUtilityIcon: React.FC<CustomIconProps> = (props) => (
  <DoughLabIconBase {...props}>
    <path d="M14.25 4.75a3.25 3.25 0 0 0-3.08 4.28L6.4 13.8a1.95 1.95 0 1 0 2.76 2.76l4.77-4.77a3.25 3.25 0 1 0 .32-7.04Z" />
    <path d="m13 10.75.95.95" />
    <path d="m7.55 15.45 1 1" />
  </DoughLabIconBase>
);

const DoughLabHeatIcon: React.FC<CustomIconProps> = (props) => (
  <DoughLabIconBase {...props}>
    <path d="M6 16.75c.9-3.15 3.05-5.75 6-7.5 2.95 1.75 5.1 4.35 6 7.5" />
    <path d="M8.5 18.75h7" />
    <path d="M10 7.5c0-1 .5-1.85 1.5-2.75" />
    <path d="M14 7.5c0-1 .5-1.85 1.5-2.75" />
    <path d="M12 6.75c0-1 .45-1.85 1.25-2.75" />
  </DoughLabIconBase>
);

const DoughLabSignalIcon: React.FC<CustomIconProps> = (props) => (
  <DoughLabIconBase {...props}>
    <circle cx="12" cy="12" r="2.25" />
    <path d="M12 4.75v2.1" />
    <path d="M19.25 12h-2.1" />
    <path d="M12 19.25v-2.1" />
    <path d="M4.75 12h2.1" />
    <path d="m17.15 6.85-1.5 1.5" />
    <path d="m6.85 17.15 1.5-1.5" />
    <path d="m17.15 17.15-1.5-1.5" />
    <path d="m6.85 6.85 1.5 1.5" />
  </DoughLabIconBase>
);

const DoughLabAssistantIcon: React.FC<CustomIconProps> = (props) => (
  <DoughLabIconBase {...props}>
    <rect x="5" y="6" width="14" height="10.5" rx="4.8" />
    <path d="M8.25 19.25 10.2 16.5" />
    <path d="M15.75 19.25 13.8 16.5" />
    <circle cx="9.5" cy="11.25" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="11.25" r="0.8" fill="currentColor" stroke="none" />
    <path d="M9 14c.85.55 1.85.82 3 .82 1.15 0 2.15-.27 3-.82" />
    <path d="M12 6V4.5" />
  </DoughLabIconBase>
);

const DoughLabProBadgeIcon: React.FC<CustomIconProps> = (props) => (
  <DoughLabIconBase {...props}>
    <path d="M12 4.5 18.25 7v4.9c0 3.25-2.37 6.18-6.25 7.6-3.88-1.42-6.25-4.35-6.25-7.6V7L12 4.5Z" />
    <path d="M9.25 11.85 11.1 13.7 14.9 9.9" />
    <path d="M8.25 7.8h7.5" />
  </DoughLabIconBase>
);

const DoughLabComposeIcon: React.FC<CustomIconProps> = (props) => (
  <DoughLabIconBase {...props}>
    <path d="M6 17.75h4.2l8.05-8.05a2.15 2.15 0 1 0-3.05-3.05L7.15 14.7 6 17.75Z" />
    <path d="M13.8 8.05 16.95 11.2" />
    <path d="M6.75 6.25h5.5" />
    <path d="M6.75 9.75h3.75" />
  </DoughLabIconBase>
);

// --- Navigation & Layout ---
export const Bars3Icon = Menu;
export const CloseIcon = X;
export const ChevronDownIcon = ChevronDown;
export const ChevronUpIcon = ChevronUp;
export const ChevronRightIcon = ChevronRight;
export const BarsArrowDownIcon = ArrowDownWideNarrow;
export const BarsArrowUpIcon = ArrowUpWideNarrow;
export const FunnelIcon = Filter;
export const MagnifyingGlassIcon = Search;

export const ArrowRightOnRectangleIcon = LogOut;
export const ArrowTopRightOnSquareIcon = ExternalLink;

// --- Core Features ---
export const CalculatorIcon = DoughLabCalculatorIcon;
export const BatchesIcon = DoughLabBatchIcon;
export const FeedIcon = Rss;
export const BeakerIcon = DoughLabLabIcon;
export const BookOpenIcon = DoughLabBookIcon;
export const AcademicCapIcon = DoughLabStudyIcon;
export const ShoppingBagIcon = ShoppingBag;
export const UserCircleIcon = User;
export const UsersIcon = DoughLabCommunityIcon;

// --- Actions & Status ---
export const PlusCircleIcon = PlusCircle;
export const MinusCircleIcon = MinusCircle;
export const PencilIcon = Pencil;
export const TrashIcon = Trash2;
export const CheckIcon = Check;
export const CheckCircleIcon = CheckCircle;
export const ExclamationCircleIcon = AlertCircle;
export const AlertTriangleIcon = AlertTriangle;
export const InfoIcon = Info;
export const LockClosedIcon = Lock;
export const DocumentDuplicateIcon = Copy;
export const DocumentTextIcon = FileText;
export const DownloadIcon = Download;
export const UploadIcon = Upload;
export const ShareIcon = Share2;
export const ExternalLinkIcon = ExternalLink;
export const StarIcon = Star;
export const SolidStarIcon = (props: any) => <Star fill="currentColor" {...props} />;
export const HeartIcon = Heart;
export const BookmarkSquareIcon = Bookmark;
export const SettingsIcon = Settings;
export const ShieldCheckIcon = ShieldCheck;
export const SparklesIcon = DoughLabSignalIcon;
export const SignalIcon = DoughLabSignalIcon;
export const AssistantIcon = DoughLabAssistantIcon;
export const ProBadgeIcon = DoughLabProBadgeIcon;
export const ComposeIcon = DoughLabComposeIcon;
export const SpinnerIcon = Loader2;
export const TagIcon = Tag;
export const ChatBubbleLeftEllipsisIcon = MessageSquare;
export const ArrowDownTrayIcon = ArrowDownToLine;

// --- Ingredients & Science ---
export const FlourIcon = Wheat;
export const WaterIcon = Droplets;
export const SaltIcon = Hexagon;
export const OilIcon = Droplet;
export const SugarIcon = Candy;
export const MilkIcon = Milk;
export const EggIcon = Egg;
export const CheeseIcon = Triangle; // Wedge shape for cheese
export const MeatIcon = Beef;
export const FruitIcon = Grape;
export const VegetableIcon = Leaf;
export const YeastIcon = Microscope; // Better than Activity for Yeast science
export const FireIcon = DoughLabHeatIcon;
export const OvenIcon = Microwave; // Lucide's closest to an oven/microwave box
export const ClockIcon = Clock;
export const CubeIcon = Box;
export const WrenchScrewdriverIcon = DoughLabUtilityIcon;
export const GlobeAltIcon = Globe;
export const InsightsIcon = LineChart;
export const ListBulletIcon = List;
export const PhotoIcon = Image;
export const PizzaSliceIcon = Pizza;
export const BreadIcon = Sandwich;
export const PastryIcon = Croissant;
export const CookieIcon = Cookie;
export const PuzzlePieceIcon = Puzzle;
export const QuestionMarkCircleIcon = HelpCircle;
export const SaveIcon = Save;
export const ChefHatIcon = ChefHat;
export const UtensilsIcon = Utensils;
export const HistoryIcon = History;

export const FermentationIcon = Waves; // Representing activity/tides of fermentation
export const MixingIcon = RefreshCw;
export const KneadingIcon = Move;
export const ShapingIcon = Layers;
export const CoolingIcon = Snowflake;
export const FlatbreadIcon = Disc;
export const TimerIcon = Timer;
export const ArrowDownIcon = ArrowDown;
export const BowlIcon = Soup; // Closest to a mixing bowl or soup dish
export const CalendarIcon = Calendar;
export const BellIcon = Bell;
export const SolidBellIcon = (props: any) => <Bell fill="currentColor" {...props} />;
export const LayoutGridIcon = LayoutGrid;

export const SunIcon = Sun;
export const SnowIcon = Snowflake;
export const ThermometerIcon = Thermometer;
export const LightBulbIcon = Lightbulb;
export const WeightIcon = Scale;
export const ChartBarIcon = BarChart3;
export const FlaskIcon = FlaskConical;
export const PrinterIcon = Printer;
export const ScaleIcon = Scale;
export const HomeIcon = Home;

export const ArrowsRightLeftIcon = ArrowRightLeft;
export const ArrowLeftIcon = ArrowLeft;
export const ArrowRightIcon = ArrowRight;

export const ClipboardDocumentCheckIcon = ClipboardCheck;

export const AdjustmentsIcon = Sliders;
export const CloudIcon = Cloud;
export const GlobeAmericasIcon = Globe2;
export const TargetIcon = Target;
export const CrosshairIcon = Crosshair;
export const RotateCcwIcon = RotateCcw;
export const RocketIcon = Rocket;
export const MoonIcon = Moon;

export const GoogleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="48px"
    height="48px"
    {...props}
  >
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    />
    <path
      fill="#FF3D00"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    />
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C43.021,36.251,44,30.651,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    />
  </svg>
);
