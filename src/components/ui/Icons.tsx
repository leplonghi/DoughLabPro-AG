// Force rebuild
import React from 'react';

function createIcon(path: React.ReactNode) {
  return (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      {path}
    </svg>
  );
}

// --- Navigation & Layout ---
export const Bars3Icon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />);
export const CloseIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />);
export const ChevronDownIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />);
export const ChevronRightIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />);
export const BarsArrowDownIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />);
export const BarsArrowUpIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 3m0 0L21 6.75M17.25 3v13.5" />);
export const FunnelIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />);

export const ArrowRightOnRectangleIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />);
export const ArrowTopRightOnSquareIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />);

// --- Core Features ---
export const CalculatorIcon = createIcon(
  <>
    <rect width="16" height="20" x="4" y="2" rx="2" />
    <line x1="8" x2="16" y1="6" y2="6" />
    <line x1="16" x2="16" y1="14" y2="18" />
    <path d="M16 10h.01" />
    <path d="M12 10h.01" />
    <path d="M8 10h.01" />
    <path d="M12 14h.01" />
    <path d="M8 14h.01" />
    <path d="M12 18h.01" />
    <path d="M8 18h.01" />
  </>
);
export const BatchesIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.5h-8.01a1.5 1.5 0 01-1.5-1.5V5.25a1.5 1.5 0 011.5-1.5h8.01a1.5 1.5 0 011.5 1.5v12.75a1.5 1.5 0 01-1.125 1.125z" />);
export const FeedIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />);
export const BeakerIcon = createIcon(
  <>
    <path d="M4.5 3h15" />
    <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
    <path d="M6 14h12" />
  </>
);
export const BookOpenIcon = createIcon(
  <>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </>
);
export const AcademicCapIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-.062.062a53.321 53.321 0 01-2.183 2.183l.062-.062" />);
export const ShoppingBagIcon = createIcon(
  <>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </>
);
export const UserCircleIcon = createIcon(
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
  />
);
export const UsersIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.952a4.5 4.5 0 014.5 0m-4.5 0a4.5 4.5 0 00-4.5 0m9 0a9.094 9.094 0 00-3.742-.479 3 3 0 00-4.682 2.72M12 12.75a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" />);

// --- Actions & Status ---
export const PlusCircleIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />);
export const MinusCircleIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />);
export const PencilIcon = createIcon(
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
  />
);
export const TrashIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />);
export const CheckIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />);
export const CheckCircleIcon = createIcon(
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  />
);
export const ExclamationCircleIcon = createIcon(
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
  />
);
export const InfoIcon = createIcon(
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  />
);
export const LockClosedIcon = createIcon(
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
  />
);
export const DocumentDuplicateIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />);
export const DocumentTextIcon = createIcon(
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  />
);
export const DownloadIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />);
export const UploadIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />);
export const ShareIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 100-2.186m0 2.186c-.18.324-.283.696-.283 1.093s.103.77.283 1.093m0-2.186l-9.566-5.314" />);
export const ExternalLinkIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />);
export const StarIcon = createIcon(
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321 1.004l-4.125 3.633a.563.563 0 00-.162.632l1.245 5.271a.563.563 0 01-.84.622l-4.738-2.736a.563.563 0 00-.652 0l-4.738 2.736a.563.563 0 01-.84-.622l1.245-5.271a.563.563 0 00-.162-.632l-4.125-3.633a.563.563 0 01.321-1.004l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
  />
);
export const SolidStarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);
export const HeartIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />);
export const BookmarkSquareIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />);
export const SettingsIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-1.008 1.11-1.212l2.152-.811c.21-.079.433-.141.654-.185a.825.825 0 01.884.668l.092.461c.22.428.497.834.811 1.212m-13.483 0c.09.542.56 1.008 1.11 1.212l2.152.811c.21.079.433-.141.654-.185a.825.825 0 00.884-.668l.092-.461c.22-.428.497.834.811-1.212M3.939 10.343c-.542-.09-1.008-.56-1.212-1.11L1.916 7.08c-.079-.21-.141-.433-.185-.654a.825.825 0 01.668-.884l.461-.092c.428-.22.834-.497 1.212-.811m13.483 0c.542.09 1.008.56 1.212 1.11l.811 2.152c.079.21.141.433.185.654a.825.825 0 01-.668.884l-.461.092c-.428-.22-.834-.497-1.212-.811M3.939 13.657c-.542.09-1.008.56-1.212 1.11l-.811 2.152c-.079.21-.141.433-.185.654a.825.825 0 00.668.884l.461.092c.428.22.834.497 1.212.811m13.483 0c.542-.09 1.008-.56 1.212-1.11l.811-2.152c.079-.21-.141-.433.185-.654a.825.825 0 00-.668-.884l-.461-.092c-.428-.22-.834-.497-1.212-.811M12 15a3 3 0 100-6 3 3 0 000 6z" />);
export const ShieldCheckIcon = createIcon(<path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071 0 11.97 11.97 0 00-5.454 3.114A11.953 11.953 0 002.32 12a11.953 11.953 0 005.119 6.6 11.971 11.971 0 005.454 3.114.75.75 0 001.071 0 11.97 11.97 0 005.454-3.114A11.953 11.953 0 0021.68 12a11.953 11.953 0 00-5.119-6.6 11.97 11.97 0 00-5.454-3.114zM12 1.5c.995 0 1.958.212 2.864.611a.75.75 0 01-.611 1.368 10.435 10.435 0 00-4.507 0 .75.75 0 01-.611-1.368A10.473 10.473 0 0112 1.5zm-3.668 2.622a.75.75 0 01.932-.932 10.42 10.42 0 004.472 0 .75.75 0 01.932.932 10.42 10.42 0 01-6.336 0zM12 7.5a.75.75 0 01.75.75v3.69l1.72 1.72a.75.75 0 11-1.06 1.06l-2.25-2.25a.75.75 0 01-.22-.53V8.25a.75.75 0 01.75-.75z" clipRule="evenodd" />);
export const SparklesIcon = createIcon(
  <>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M9 5H5" />
    <path d="M3 5h2" />
    <path d="M5 7V3" />
  </>
);
export const SpinnerIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.182-3.182m0-4.991v4.99" />);



export const TagIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.582 9.582a2.25 2.25 0 003.182 0l4.318-4.318a2.25 2.25 0 000-3.182L11.16 3.66A2.25 2.25 0 009.568 3z" />);
export const ChatBubbleLeftEllipsisIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-2.53-.423l-3.358 1.122a.75.75 0 01-.97-1.028l1.39-3.821A9.75 9.75 0 013 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />);
export const ArrowDownTrayIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />);

// --- Ingredients & Science ---
export const FlourIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4" />);
export const WaterIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M12 2a4 4 0 0 0-4 4c0 2.21 4 6 4 6s4-3.79 4-6a4 4 0 0 0-4-4z" />);
export const SaltIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />);
export const OilIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l.375 1.5a1.5 1.5 0 001.44 1.25h13.37a1.5 1.5 0 001.44-1.25l.375-1.5m-17.25 0a2.625 2.625 0 115.25 0m-5.25 0h5.25" />);
export const YeastIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.21 1.02l-1.355 2.712a2.25 2.25 0 00-.21 1.02v5.714" />);
export const FireIcon = createIcon(
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.011.535-5.461a6 6 0 0 1 3.465 9.461 6 6 0 1 1-5.5 1.5"
  />
);
export const ClockIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />);
export const CubeIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9.75l-9-5.25" />);
export const WrenchScrewdriverIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />);
export const GlobeAltIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0112 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253m0 0c1.393-2.986 4.403-5.228 7.843-5.228s6.45 2.242 7.843 5.228z" />);
export const InsightsIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.517L21.75 6M3.75 21h18" />);
export const ListBulletIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />);
export const PhotoIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />);
export const PizzaSliceIcon = createIcon(
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15 11h.01 M19 13h.01 M17 17h.01 M13 15h.01 M11 19h.01 M7 21l14-14a2 2 0 0 0-2.83-2.83L4.17 18.17a2 2 0 0 0 2.83 2.83Z"
  />
);
export const PuzzlePieceIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V6.75zM19.5 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H20.25a.75.75 0 01-.75-.75V12zM15 15.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H15.75a.75.75 0 01-.75-.75V15.75zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />);
export const QuestionMarkCircleIcon = createIcon(<path fillRule="evenodd" d="M9.879 7.519c0 .783.636 1.419 1.419 1.419s1.419-.636 1.419-1.419a1.419 1.419 0 00-1.419-1.419c-.783 0-1.419.636-1.419 1.419zm2.838 3.038a.75.75 0 00-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" clipRule="evenodd" />);
export const SaveIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />);
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

export const FermentationIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />);
export const SunIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />);
export const LightBulbIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-4.5 6.01 6.01 0 00-1.5-4.5 6.01 6.01 0 00-1.5 4.5 6.01 6.01 0 001.5 4.5zM12 18v2.25m0 0v2.25m0-2.25h.008v.008H12v-.008z" />);
export const WeightIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />);
export const ChartBarIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />);
export const FlaskIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.21 1.02l-1.355 2.712a2.25 2.25 0 00-.21 1.02v5.714" />);
export const PrinterIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 001.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />);
export const ScaleIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />);
export const HomeIcon = createIcon(<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />);

export const ArrowsRightLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>
);

export const ClipboardDocumentCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 4.5h-7.5a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 008.25 22.5h7.5A2.25 2.25 0 0018 20.25V6.75A2.25 2.25 0 0015.75 4.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 2.25h6" />
  </svg>
);
