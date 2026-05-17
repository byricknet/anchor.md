import type { TechStack } from "../types/schema"
import { cn } from "./utils"

export function TechIcon({ tech, className }: { tech: TechStack; className?: string }) {
  const cls = cn("shrink-0", className)

  switch (tech) {
    case "react":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" opacity="0.6"/>
          <ellipse cx="12" cy="12" rx="3.5" ry="10" stroke="#61DAFB" strokeWidth="1.2" fill="none" opacity="0.6" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="3.5" ry="10" stroke="#61DAFB" strokeWidth="1.2" fill="none" opacity="0.6" transform="rotate(-60 12 12)"/>
        </svg>
      )
    case "nextjs":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
          <path d="M17 17L10 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="9" cy="16" r="1" fill="white"/>
        </svg>
      )
    case "vue":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 21h7l3-6 3 6h7L12 2z" fill="#41B883"/>
          <path d="M12 2L2 21h7l3-6 3 6h7L12 2z" fill="url(#vue-g)" opacity="0.4"/>
          <path d="M12 8l-3 6h6l-3-6z" fill="#35495E"/>
        </svg>
      )
    case "sveltekit":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#FF3E00" strokeWidth="1.5"/>
          <path d="M8 16c0 1.5 1 2.5 2.5 2.5 1 0 1.8-.5 2.2-1.3M16 8c0-1.5-1-2.5-2.5-2.5-1 0-1.8.5-2.2 1.3M7 14.5c0 2.5 2 4.5 5 4.5 2.5 0 4.5-1.5 4.5-4M17 9.5c0-2.5-2-4.5-5-4.5-2.5 0-4.5 1.5-4.5 4" stroke="#FF3E00" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      )
    case "flutter":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <path d="M7 14l-3-3 8-8 3 3-8 8z" fill="#54C5F8"/>
          <path d="M12 19l-3-3 8-8 3 3-8 8z" fill="#40B6E0"/>
          <path d="M17 9l-3-3 4-4 3 3-4 4z" fill="#1389FD"/>
        </svg>
      )
    case "react-native":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="#61DAFB" strokeWidth="1.3"/>
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="7" ry="2.5" stroke="#61DAFB" strokeWidth="1" fill="none" opacity="0.5"/>
          <ellipse cx="12" cy="12" rx="2.5" ry="7" stroke="#61DAFB" strokeWidth="1" fill="none" opacity="0.5"/>
        </svg>
      )
    case "expo":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <path d="M12 3c-2 0-4 3-4 6s1 8 4 12c3-4 4-9 4-12s-2-6-4-6z" stroke="white" strokeWidth="1.3" fill="none"/>
          <circle cx="12" cy="8" r="1.5" fill="white"/>
        </svg>
      )
    case "node":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#83CD29" strokeWidth="1.3" fill="#83CD29" fillOpacity="0.1"/>
          <path d="M12 2v20m9-15H3" stroke="#83CD29" strokeWidth="1.3" opacity="0.4"/>
        </svg>
      )
    case "nest":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" stroke="#E0234E" strokeWidth="1.3" fill="#E0234E" fillOpacity="0.1"/>
          <path d="M12 6l3 4-3 4-3-4 3-4z" fill="#E0234E" opacity="0.6"/>
        </svg>
      )
    case "fastapi":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 12l10 10 10-10L12 2z" stroke="#009688" strokeWidth="1.3" fill="#009688" fillOpacity="0.1"/>
          <path d="M10 7v4h4M14 17v-4h-4" stroke="#009688" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    case "django":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" stroke="#092E20" strokeWidth="1.3" fill="#092E20" fillOpacity="0.2"/>
          <path d="M8 7v7h2.5M8 11h3" stroke="#44B78B" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="15" cy="9" r="1.5" fill="#44B78B"/>
        </svg>
      )
    case "go":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <path d="M5 14c0-3 1-5 3-6" stroke="#00ADD8" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M19 14c0-3-1-5-3-6" stroke="#00ADD8" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12" cy="15" r="3" stroke="#00ADD8" strokeWidth="1.5" fill="#00ADD8" fillOpacity="0.1"/>
        </svg>
      )
    case "supabase":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <path d="M11 2l-8 12h9l-1 8 8-12h-9l1-8z" fill="#3ECF8E"/>
        </svg>
      )
    case "postgresql":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <path d="M12 3c-2 0-4 .5-5 2-1 1.5-1 4 0 5.5s2 2 2 3.5c0 1-.5 2-1 2.5" stroke="#336791" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 3c2 0 4 .5 5 2 1 1.5 1 4 0 5.5s-2 2-2 3.5c0 1 .5 2 1 2.5" stroke="#336791" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12" cy="18" r="1" fill="#336791"/>
        </svg>
      )
    case "mongodb":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <path d="M12 2v20M9 6c0 3 1 6 3 9 2-3 3-6 3-9" stroke="#47A248" strokeWidth="1.3" strokeLinecap="round" fill="#47A248" fillOpacity="0.1"/>
        </svg>
      )
    case "firebase":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <path d="M5 18l3-12 4 6 4-6 3 12H5z" stroke="#FFCA28" strokeWidth="1.3" fill="#FFCA28" fillOpacity="0.15"/>
          <path d="M8 6l-3 12h14L16 6l-4 6-4-6z" fill="#FFCA28" opacity="0.3"/>
        </svg>
      )
    case "tailwind":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <path d="M12 3c-3 0-5 1.5-6 4.5 1.2-1.5 2.6-2 4.2-1.5.9.3 1.6 1 2.3 1.7 1.2 1.2 2.6 2.5 5.5 2.5 3 0 5-1.5 6-4.5-1.2 1.5-2.6 2-4.2 1.5-.9-.3-1.6-1-2.3-1.7C15.3 4.3 13.9 3 12 3z" fill="#38BDF8" opacity="0.8"/>
          <path d="M6 10.5c-3 0-5 1.5-6 4.5 1.2-1.5 2.6-2 4.2-1.5.9.3 1.6 1 2.3 1.7 1.2 1.2 2.6 2.5 5.5 2.5 3 0 5-1.5 6-4.5-1.2 1.5-2.6 2-4.2 1.5-.9-.3-1.6-1-2.3-1.7-1.2-1.2-2.6-2.5-5.5-2.5z" fill="#38BDF8" opacity="0.5"/>
        </svg>
      )
    case "docker":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <rect x="4" y="12" width="3" height="3" rx="0.5" fill="#2496ED"/>
          <rect x="8" y="12" width="3" height="3" rx="0.5" fill="#2496ED"/>
          <rect x="12" y="12" width="3" height="3" rx="0.5" fill="#2496ED"/>
          <rect x="8" y="8" width="3" height="3" rx="0.5" fill="#2496ED"/>
          <rect x="12" y="8" width="3" height="3" rx="0.5" fill="#2496ED"/>
          <rect x="12" y="4" width="3" height="3" rx="0.5" fill="#2496ED"/>
          <path d="M2 15h18l-1 3c-.5 1-1.5 2-3 2H6c-1.5 0-2.5-1-3-2l-1-3z" fill="#2496ED" opacity="0.15"/>
        </svg>
      )
    case "github-actions":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.3"/>
          <path d="M8 9v6M16 9v6M12 9v6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M8 12h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    case "jest":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L22 20H2L12 2z" stroke="#C21325" strokeWidth="1.3" fill="#C21325" fillOpacity="0.1"/>
          <path d="M12 8v5M12 15v1" stroke="#C21325" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    default:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <rect x="5" y="3" width="14" height="18" rx="2" stroke="white" strokeWidth="1.3" opacity="0.3"/>
          <path d="M9 9h6M9 13h4" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.3"/>
        </svg>
      )
  }
}
