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
  LayoutGrid,
  Compass,
  Zap,
  DollarSign,
  Cog,
  MapPin
} from 'lucide-react';

// --- Navigation & Layout ---
export const MapPinIcon = MapPin;
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
export const CalculatorIcon = Calculator;
export const BatchesIcon = LayoutList;
export const FeedIcon = Rss;
export const BeakerIcon = FlaskConical;
export const BookOpenIcon = BookOpen;
export const AcademicCapIcon = GraduationCap;
export const ShoppingBagIcon = ShoppingBag;
export const UserCircleIcon = User;
export const UsersIcon = Users;

// --- Actions & Status ---
export const PlusCircleIcon = PlusCircle;
export const MinusCircleIcon = MinusCircle;
export const PencilIcon = (props: any) => <Pencil {...premiumIconProps} {...props} />;
export const TrashIcon = (props: any) => <Trash2 {...premiumIconProps} {...props} />;
export const CheckIcon = (props: any) => <Check {...premiumIconProps} {...props} />;
export const CheckCircleIcon = (props: any) => <CheckCircle {...premiumIconProps} {...props} />;
export const ExclamationCircleIcon = (props: any) => <AlertCircle {...premiumIconProps} {...props} />;
export const AlertTriangleIcon = (props: any) => <AlertTriangle {...premiumIconProps} {...props} />;
export const InfoIcon = (props: any) => <Info {...premiumIconProps} {...props} />;
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
export const SettingsIcon = (props: any) => <Settings {...premiumIconProps} {...props} />;
export const ShieldCheckIcon = ShieldCheck;
export const SparklesIcon = Sparkles;
export const SpinnerIcon = Loader2;
export const TagIcon = Tag;
export const ChatBubbleLeftEllipsisIcon = MessageSquare;
export const ArrowDownTrayIcon = ArrowDownToLine;

// --- Ingredients & Science (Premium 2D Minimalist Style) ---
const premiumIconProps = { strokeWidth: 1.5, className: "w-full h-full" };

export const FlourIcon = (props: any) => <Wheat {...premiumIconProps} {...props} />;
export const WaterIcon = (props: any) => <Droplets {...premiumIconProps} {...props} />;
export const SaltIcon = (props: any) => <Hexagon {...premiumIconProps} {...props} />;
export const OilIcon = (props: any) => <Droplet {...premiumIconProps} {...props} />;
export const SugarIcon = (props: any) => <Candy {...premiumIconProps} {...props} />;
export const MilkIcon = (props: any) => <Milk {...premiumIconProps} {...props} />;
export const EggIcon = (props: any) => <Egg {...premiumIconProps} {...props} />;
export const CheeseIcon = (props: any) => <Triangle {...premiumIconProps} {...props} />;
export const MeatIcon = (props: any) => <Beef {...premiumIconProps} {...props} />;
export const FruitIcon = (props: any) => <Grape {...premiumIconProps} {...props} />;
export const VegetableIcon = (props: any) => <Leaf {...premiumIconProps} {...props} />;
export const YeastIcon = (props: any) => <Microscope {...premiumIconProps} {...props} />;
export const FireIcon = (props: any) => <Flame {...premiumIconProps} {...props} />;
export const OvenIcon = (props: any) => <Microwave {...premiumIconProps} {...props} />;
export const ClockIcon = (props: any) => <Clock {...premiumIconProps} {...props} />;
export const CubeIcon = (props: any) => <Box {...premiumIconProps} {...props} />;
export const WrenchScrewdriverIcon = (props: any) => <Wrench {...premiumIconProps} {...props} />;
export const GlobeAltIcon = (props: any) => <Globe {...premiumIconProps} {...props} />;
export const InsightsIcon = (props: any) => <LineChart {...premiumIconProps} {...props} />;
export const ListBulletIcon = (props: any) => <List {...premiumIconProps} {...props} />;
export const PhotoIcon = (props: any) => <Image {...premiumIconProps} {...props} />;
export const PizzaSliceIcon = (props: any) => <Pizza {...premiumIconProps} {...props} />;
export const BreadIcon = (props: any) => <Sandwich {...premiumIconProps} {...props} />;
export const PastryIcon = (props: any) => <Croissant {...premiumIconProps} {...props} />;
export const CookieIcon = (props: any) => <Cookie {...premiumIconProps} {...props} />;
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
export const CompassIcon = (props: any) => <Compass {...premiumIconProps} {...props} />;
export const ZapIcon = (props: any) => <Zap {...premiumIconProps} {...props} />;
export const CurrencyDollarIcon = (props: any) => <DollarSign {...premiumIconProps} {...props} />;
export const CogIcon = (props: any) => <Cog {...premiumIconProps} {...props} />;

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
