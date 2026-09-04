"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Heart,
  Home,
  Luggage,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Sparkles,
  Sun,
  Users,
  X,
} from "lucide-react";

type Faction = "antu" | "kuyen";

interface FactionTheme {
  primary: string;
  activeBackground: string;
  activeBorder: string;
  activeText: string;
  pillBackground: string;
  pillBorder: string;
  pillText: string;
  shadow: string;
}

interface NavigationItem {
  name: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
}

const themes: Record<Faction, FactionTheme> = {
  antu: {
    primary: "#fb923c",
    activeBackground: "rgba(249, 115, 22, 0.09)",
    activeBorder: "rgba(249, 115, 22, 0.38)",
    activeText: "#fdba74",
    pillBackground: "rgba(249, 115, 22, 0.1)",
    pillBorder: "rgba(249, 115, 22, 0.3)",
    pillText: "#fdba74",
    shadow:
      "0 0 50px rgba(249, 115, 22, 0.1), 0 20px 50px rgba(0, 0, 0, 0.35)",
  },

  kuyen: {
    primary: "#6366f1",
    activeBackground: "rgba(99, 102, 241, 0.12)",
    activeBorder: "rgba(99, 102, 241, 0.35)",
    activeText: "#a5b4fc",
    pillBackground: "rgba(99, 102, 241, 0.1)",
    pillBorder: "rgba(99, 102, 241, 0.3)",
    pillText: "#a5b4fc",
    shadow:
      "0 0 50px rgba(99, 102, 241, 0.12), 0 20px 50px rgba(0, 0, 0, 0.35)",
  },
};

/**
 * Configuración temporal autocontenida.
 *
 * Más adelante puedes reemplazar estos valores por los datos
 * de NextAuth, un provider o la respuesta de tu backend.
 */
const sidebarConfig = {
  faction: "antu" as Faction,

  user: {
    name: "Juan Vásquez",
  },

  unreadMessages: 3,
};

const navigation: NavigationItem[] = [
  {
    name: "Inicio",
    href: "/antu-kuyen",
    icon: Home,
  },
  {
    name: "Explorar",
    href: "/antu-kuyen/explore",
    icon: Compass,
  },
  {
    name: "Destinos",
    href: "/antu-kuyen/destiny",
    icon: MapPin,
  },
  {
    name: "Experiencias",
    href: "/antu-kuyen/experiences",
    icon: Sparkles,
  },
  {
    name: "Comunidades",
    href: "/antu-kuyen/communities",
    icon: Users,
  },
  {
    name: "Mis viajes",
    href: "/antu-kuyen/mis-viajes",
    icon: Luggage,
  },
  {
    name: "Favoritos",
    href: "/antu-kuyen/favoritos",
    icon: Heart,
  },
  {
    name: "Mensajes",
    href: "/antu-kuyen/mensajes",
    icon: MessageCircle,
    badge: sidebarConfig.unreadMessages,
  },
];

function isRouteActive(pathname: string, href: string) {
  return pathname === href;
}

interface SidebarPanelProps {
  collapsed: boolean;
  mobile?: boolean;
  onToggleCollapsed?: () => void;
  onNavigate?: () => void;
}

function SidebarPanel({
  collapsed,
  mobile = false,
  onToggleCollapsed,
  onNavigate,
}: SidebarPanelProps) {
  const pathname = usePathname();

  const faction = sidebarConfig.faction;
  const user = sidebarConfig.user;

  const theme = themes[faction];
  const isAntu = faction === "antu";

  const userInitials = user.name
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  return (
    <div
      className="flex mt-10 h-200 w-full select-none flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-slate-950/75 backdrop-blur-2xl"
      style={{
        boxShadow: theme.shadow,
      }}
    >
      {/* Header */}
      <div className="border-b border-white/6 px-4 pb-4 pt-5">
        <div
          className={`flex items-center ${collapsed ? "justify-center" : "gap-3"
            }`}
        >
          <div
            className="flex size-9 shrink-0 items-center justify-center rounded-xl"
            style={{
              backdropFilter: "blur(18px)",
              background:
                "radial-gradient(circle at 65% 35%, #f97316 0%, #4f46e5 75%)",
              boxShadow:
                "0 0 20px rgba(249, 115, 22, 0.25), 0 0 28px rgba(79, 70, 229, 0.2)",
            }}
          >
            <img src="/icons/antukuyen-header-32x32.png" alt="antukuyen" />
          </div>

          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-base font-semibold tracking-tight text-white">
                Antü
                <span className="text-indigo-400">·</span>
                Küyen
              </p>

              <p className="text-[11px] text-slate-500">
                Explora nuevos destinos
              </p>
            </div>
          )}

          {mobile && (
            <button
              type="button"
              onClick={onNavigate}
              className="ml-auto flex size-9 items-center justify-center rounded-xl text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="Cerrar menú"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <div
          className={`mt-4 flex ${collapsed ? "justify-center" : "justify-start"
            }`}
        >
          <div
            className={`inline-flex items-center rounded-full ${collapsed ? "size-8 justify-center" : "gap-2 px-3 py-1.5"
              }`}
            style={{
              border: `1px solid ${theme.pillBorder}`,
              background: theme.pillBackground,
            }}
          >
            {isAntu ? (
              <Sun
                size={collapsed ? 15 : 13}
                style={{ color: theme.primary }}
              />
            ) : (
              <Moon
                size={collapsed ? 15 : 13}
                style={{ color: theme.primary }}
              />
            )}

            {!collapsed && (
              <span
                className="whitespace-nowrap text-xs font-medium"
                style={{ color: theme.pillText }}
              >
                Facción {isAntu ? "Antü" : "Küyen"}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Navegación */}
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = isRouteActive(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              title={collapsed ? item.name : undefined}
              aria-current={active ? "page" : undefined}
              className={`
      group relative flex h-11 items-center overflow-hidden
      rounded-[14px] border transition-all duration-200
      ${collapsed
                  ? "justify-center px-2"
                  : "gap-3 px-3"
                }
      ${active
                  ? ""
                  : "border-transparent text-slate-500 hover:bg-white/4 hover:text-slate-300"
                }
    `}
              style={
                active
                  ? {
                    background:
                      faction === "antu"
                        ? "linear-gradient(90deg, rgba(249,115,22,0.10) 0%, rgba(65,38,36,0.48) 100%)"
                        : "linear-gradient(90deg, rgba(99,102,241,0.10) 0%, rgba(35,37,70,0.48) 100%)",
                    borderColor: theme.activeBorder,
                    color: theme.activeText,
                    boxShadow:
                      faction === "antu"
                        ? "inset 0 0 18px rgba(249,115,22,0.025), 0 0 8px rgba(249,115,22,0.04)"
                        : "inset 0 0 18px rgba(99,102,241,0.025), 0 0 8px rgba(99,102,241,0.04)",
                  }
                  : undefined
              }
            >
              {active && (
                <span
                  className="
          absolute -left-px top-1/2
          h-5 w-0.75
          -translate-y-1/2
          rounded-r-full
        "
                  style={{
                    background: theme.primary,
                    boxShadow: `0 0 7px ${theme.primary}`,
                  }}
                />
              )}

              <Icon
                size={18}
                className="shrink-0"
                strokeWidth={active ? 2.1 : 1.7}
              />

              {!collapsed && (
                <>
                  <span
                    className={`whitespace-nowrap text-sm ${active ? "font-semibold" : "font-medium"
                      }`}
                  >
                    {item.name}
                  </span>

                  {!!item.badge && item.badge > 0 && (
                    <span
                      className="
              ml-auto flex min-w-5 items-center justify-center
              rounded-full px-1.5 py-0.5
              text-[10px] font-semibold text-white
            "
                      style={{
                        background: theme.primary,
                      }}
                    >
                      {item.badge > 99 ? "99+" : item.badge}
                    </span>
                  )}
                </>
              )}

              {collapsed && !!item.badge && item.badge > 0 && (
                <span
                  className="absolute right-2 top-2 size-2 rounded-full"
                  style={{
                    background: theme.primary,
                    boxShadow: `0 0 8px ${theme.primary}`,
                  }}
                />
              )}
            </Link>);
        })}
      </nav>

      {/* Usuario */}
      <div className="border-t border-white/6 px-3 pb-3 pt-3">
        <div
          className={`flex items-center rounded-xl bg-white/3 p-2 ${collapsed ? "justify-center" : "gap-3"
            }`}
        >
          <div
            className="flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
            style={{
              background: isAntu
                ? "linear-gradient(135deg, #f97316, #ea580c)"
                : "linear-gradient(135deg, #6366f1, #4338ca)",
              boxShadow: `0 0 16px ${theme.activeBackground}`,
            }}
          >
            {userInitials}
          </div>

          {!collapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">
                {user.name}
              </p>

              <p
                className="truncate text-xs"
                style={{
                  color: theme.pillText,
                }}
              >
                {isAntu ? "☀ Facción Antü" : "☾ Facción Küyen"}
              </p>
            </div>
          )}
        </div>

        {!mobile && (
          <button
            type="button"
            onClick={onToggleCollapsed}
            className={`mt-2 flex w-full items-center rounded-xl py-2 text-xs text-slate-500 transition-colors hover:bg-white/4 hover:text-slate-300 ${collapsed ? "justify-center" : "justify-center gap-2"
              }`}
            aria-label={collapsed ? "Expandir sidebar" : "Colapsar sidebar"}
          >
            {collapsed ? (
              <PanelLeftOpen size={16} />
            ) : (
              <>
                <PanelLeftClose size={16} />
                <span>Colapsar menú</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Sidebar desktop */}
      <aside
        className={`sticky top-0 hidden h-screen shrink-0 p-3 transition-[width] duration-300 md:block ${collapsed ? "w-26" : "w-74"
          }`}
      >
        <SidebarPanel
          collapsed={collapsed}
          onToggleCollapsed={() => setCollapsed((current) => !current)}
        />
      </aside>

      {/* Botón móvil */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-40 flex size-11 items-center justify-center rounded-xl border border-white/10 bg-slate-950/80 text-white shadow-xl backdrop-blur-xl md:hidden"
        aria-label="Abrir menú"
      >
        <Menu size={20} />
      </button>

      {/* Sidebar móvil */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-label="Cerrar menú"
          />

          <aside className="relative h-full w-[min(86vw,320px)] p-3">
            <SidebarPanel
              collapsed={false}
              mobile
              onNavigate={() => setMobileOpen(false)}
            />
          </aside>
        </div>
      )}
    </>
  );
}