"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { alpha } from "@mui/material/styles";

import { SocialLinks } from "@/components";

// Match SectionCard look
const NAV_BG = "#E9EEF7";
const NAV_BG_GRADIENT = `linear-gradient(180deg, ${alpha(
  "#FFFFFF",
  0.9,
)}, ${alpha("#DCE6F7", 0.9)})`;
const NAV_BORDER = `1px solid ${alpha("#0B1220", 0.12)}`;
const NAV_SHADOW = `0 8px 30px ${alpha("#000", 0.18)}`;

const DRAWER_BG = "#0B1220";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export default function NavBar() {
  const pathname = usePathname();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (isDesktop) setOpen(false);
  }, [isDesktop]);

  const DesktopLinks = (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Box
            key={item.href}
            component={Link}
            href={item.href}
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                px: 1.5,
                py: 1,
                borderRadius: 2,
                fontWeight: 800,
                fontSize: 14,
                color: active ? "white" : "#0F172A",
                backgroundColor: active ? "#0F172A" : alpha("#0B1220", 0.06),
                border: `1px solid ${alpha("#0B1220", active ? 0 : 0.08)}`,
                "&:hover": {
                  backgroundColor: active ? "#0F172A" : alpha("#0B1220", 0.1),
                },
              }}
            >
              {item.label}
            </Box>
          </Box>
        );
      })}

      <SocialLinks
        className="ml-2"
        iconClassName="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-black/5 text-[#334155] transition hover:bg-black/10 hover:text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-black/10"
      />
    </Box>
  );

  const DrawerContent = (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: DRAWER_BG,
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
      role="presentation"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          Menu
        </Typography>

        <IconButton
          aria-label="Close menu"
          onClick={() => setOpen((v) => !v)}
          sx={{
            color: "white",
            borderRadius: 2,
            backgroundColor: "rgba(255,255,255,0.10)",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.14)" },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.10)" }} />

      <List sx={{ px: 1.5, py: 2 }}>
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <ListItemButton
              key={item.href}
              component={Link}
              href={item.href}
              onClick={() => setOpen(false)}
              sx={{
                borderRadius: 2,
                my: 0.5,
                px: 2,
                py: 1.5,
                backgroundColor: active
                  ? "rgba(255,255,255,0.10)"
                  : "transparent",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.10)" },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontSize: 20, fontWeight: 800 }}
              />
            </ListItemButton>
          );
        })}
      </List>

      <Box sx={{ flex: 1 }} />

      <Divider sx={{ borderColor: "rgba(255,255,255,0.10)" }} />

      <Box sx={{ p: 2 }}>
        <SocialLinks
          className="flex w-full justify-between"
          iconClassName="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        zIndex: (t) => t.zIndex.drawer + 1,
        backgroundColor: NAV_BG,
        backgroundImage: NAV_BG_GRADIENT,
        borderBottom: NAV_BORDER,
        boxShadow: NAV_SHADOW,
        backdropFilter: "none",
        color: "#0F172A",

        // iOS notch / safe area
        pt: "env(safe-area-inset-top)",
      }}
    >
      <Toolbar
        sx={{
          mx: "auto",
          width: "100%",
          maxWidth: 1100,
          px: 2,
          py: 0.75,
        }}
      >
        <Box
          component={Link}
          href="/"
          style={{ textDecoration: "none" }}
          sx={{
            px: 1.5,
            py: 1,
            borderRadius: 2,
            fontWeight: 900,
            color: "white",
            backgroundColor: "#0F172A",
            boxShadow: "0 1px 6px rgba(0,0,0,0.12)",
            "&:hover": { filter: "brightness(1.08)" },
          }}
        >
          Martin Garcia
        </Box>

        <Box sx={{ flex: 1 }} />

        {isDesktop ? (
          DesktopLinks
        ) : (
          <IconButton
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            sx={{
              color: "#0F172A",
              borderRadius: 2,
              backgroundColor: alpha("#0B1220", 0.06),
              "&:hover": { backgroundColor: alpha("#0B1220", 0.1) },
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          variant="temporary"
          ModalProps={{
            // ✅ stops MUI from adding body padding-right
            disableScrollLock: true,
            // optional: keepMounted usually not needed
            keepMounted: false,
          }}
          PaperProps={{
            sx: {
              width: "100%",
              maxWidth: "100vw",
              height: "100dvh",
              backgroundColor: DRAWER_BG,
              overflowX: "hidden",
            },
          }}
          BackdropProps={{ sx: { backgroundColor: "rgba(0,0,0,0.35)" } }}
        >
          {DrawerContent}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
