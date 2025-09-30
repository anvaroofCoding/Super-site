import {
  Building,
  Camera,
  BarChartIcon as ChartNoAxesCombined,
  CreditCard,
  FileCheck2,
  Film,
  Info,
  MapPin,
  Hand,
  Phone,
  ScanFace,
  Send,
  ShieldIcon as ShieldUser,
  Sparkles,
  Users,
  UsersRound,
  X,
  Youtube,
} from "lucide-react";

export const MENU_ITEMS = [
  {
    label: "Xarita",
    href: "/metro-xaritasis",
    icon: MapPin,
  },
  {
    label: "To'lovlar",
    href: "",
    dropdown: true,
    icon: CreditCard,
    dropdownItems: [
      { label: "To'lov turlari", href: "/tolov-turi", icon: CreditCard },
      { label: "ATTO kartalari", href: "/atto-kartalari", icon: CreditCard },
      {
        label: "ATTO mobil ilovasi",
        href: "/atto-mobile-ilovasi",
        icon: Phone,
      },
      { label: "PalmPay", href: "/pay", icon: Hand },
      { label: "FacePay", href: "/FacePay", icon: ScanFace },
    ],
  },
  {
    label: "Yo'lovchilar",
    href: "",
    dropdown: true,
    icon: Users,
    dropdownItems: [
      {
        label: "Metropolitenidan foydalanish qoidalari",
        href: "/Metrodab-foydalanish-qoidalari",
        icon: Info,
      },
      { label: "Davlat ramzlari", href: "/davlat-ramzlari", icon: Sparkles },
      { label: "Murojaatlar", href: "/murojaatlar", icon: Phone },
      {
        label: "Yo'lovchilar statistikasi",
        href: "/metro-statistikasi",
        icon: ChartNoAxesCombined,
      },
    ],
  },
  {
    label: "Axborot xizmati",
    href: "",
    dropdown: true,
    icon: ShieldUser,
    dropdownItems: [
      { label: "Yangiliklar", href: "/yangiliklar", icon: Info },
      { label: "Mediateka", href: "/mediateka", icon: Film },
    ],
  },
  {
    label: "Metro haqida",
    href: "",
    dropdown: true,
    icon: Building,
    dropdownItems: [
      { label: "Tashkilot haqida", href: "/metro-tarixi", icon: Building },
      { label: "Rahbariyat", href: "/Raxbariyat", icon: Users },
      {
        label: "Tarkibiy tuzilmalar",
        href: "/tarkibiy-bolinmalar",
        icon: Building,
      },
      { label: "Bo'sh ish o'rinlari", href: "/bosh-ish-orinlari", icon: Users },
    ],
  },
  {
    label: "Gender tenglik",
    href: "",
    dropdown: true,
    icon: UsersRound,
    dropdownItems: [
      { label: "Umumiy ma'lumot", href: "umumiy-malumot", icon: Info },
      {
        label: "Yurtimizda gender tenglik",
        href: "/country-gender",
        icon: UsersRound,
      },
      {
        label: "Me'yoriy hujjatlar",
        href: "/meyoriy-xujjatlar",
        icon: FileCheck2,
      },
    ],
  },
  {
    label: "Bog'lanish",
    href: "",
    dropdown: true,
    icon: Phone,
    dropdownItems: [{ label: "Aloqa", href: "/contact", icon: Phone }],
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Send,
    href: "https://t.me/toshkent_metro",
    name: "Telegram",
    color: "hover:text-blue-400 hover:bg-blue-400/10",
  },
  {
    icon: Camera,
    href: "https://instagram.com/toshkent_metro",
    name: "Instagram",
    color: "hover:text-pink-400 hover:bg-pink-400/10",
  },
  {
    icon: X,
    href: "https://twitter.com/toshkent_metro",
    name: "Twitter",
    color: "hover:text-sky-400 hover:bg-sky-400/10",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/toshkent_metro",
    name: "YouTube",
    color: "hover:text-red-500 hover:bg-red-500/10",
  },
];
