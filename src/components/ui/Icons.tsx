import React from 'react';
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
  LucideProps
} from 'lucide-react';

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
export const PencilIcon = Pencil;
export const TrashIcon = Trash2;
export const CheckIcon = Check;
export const CheckCircleIcon = CheckCircle;
export const ExclamationCircleIcon = AlertCircle;
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
export const SparklesIcon = Sparkles;
export const SpinnerIcon = Loader2;
export const TagIcon = Tag;
export const ChatBubbleLeftEllipsisIcon = MessageSquare;
export const ArrowDownTrayIcon = ArrowDownToLine;

// --- Ingredients & Science ---
export const FlourIcon = Wheat;
export const WaterIcon = Droplets;
export const SaltIcon = Hexagon;
export const OilIcon = Droplet;
export const YeastIcon = Activity; // Using Activity as placeholder for Yeast/Action
export const FireIcon = Flame;
export const ClockIcon = Clock;
export const CubeIcon = Box;
export const WrenchScrewdriverIcon = Wrench;
export const GlobeAltIcon = Globe;
export const InsightsIcon = LineChart;
export const ListBulletIcon = List;
export const PhotoIcon = Image;
export const PizzaSliceIcon = Pizza;
export const PuzzlePieceIcon = Puzzle;
export const QuestionMarkCircleIcon = HelpCircle;
export const SaveIcon = Save;

export const FermentationIcon = Activity;
export const SunIcon = Sun;
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
