"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react";

import { useIsMobile } from "./use-mobile";
import { cn } from "./utils";
import { Button } from "./button";
import { Input } from "./input";
import { Separator } from "./separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./sheet";
import { Skeleton } from "./skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

const SidebarContext = React.createContext(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;

  const setOpen = React.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;

      if (setOpenProp) setOpenProp(openState);
      else _setOpen(openState);

      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [open, setOpenProp]
  );

  const toggleSidebar = React.useCallback(
    () => (isMobile ? setOpenMobile((v) => !v) : setOpen((v) => !v)),
    [isMobile, setOpen, setOpenMobile]
  );

  React.useEffect(() => {
    const handler = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toggleSidebar]);

  const state = open ? "expanded" : "collapsed";

  return (
    <SidebarContext.Provider
      value={{
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }}
    >
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={{
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style,
          }}
          className={cn(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", className)}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-mobile="true"
          className="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
          style={{ "--sidebar-width": SIDEBAR_WIDTH_MOBILE }}
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Mobile sidebar</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className="group peer text-sidebar-foreground hidden md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
    >
      <div
        data-slot="sidebar-gap"
        className={cn(
          "relative w-(--sidebar-width) transition-[width] duration-200",
          "group-data-[collapsible=offcanvas]:w-0",
          className
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "fixed inset-y-0 z-10 hidden md:flex h-svh w-(--sidebar-width) transition-all",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r",
          className
        )}
        {...props}
      >
        <div
          data-slot="sidebar-inner"
          className={cn(
            "bg-sidebar flex h-full w-full flex-col",
            variant === "floating" && "rounded-lg border shadow-sm"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function SidebarTrigger({ className, onClick, ...props }) {
  const { toggleSidebar } = useSidebar();
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(e) => {
        if (onClick) onClick(e);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}

function SidebarRail({ className, ...props }) {
  const { toggleSidebar } = useSidebar();
  return (
    <button
      data-slot="sidebar-rail"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 transition-all sm:flex",
        className
      )}
      onClick={toggleSidebar}
      {...props}
    />
  );
}

function SidebarInset({ className, ...props }) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn("bg-background flex w-full flex-1 flex-col", className)}
      {...props}
    />
  );
}

function SidebarInput({ className, ...props }) {
  return <Input className={cn("bg-background h-8 w-full", className)} {...props} />;
}

function SidebarHeader({ className, ...props }) {
  return <div className={cn("flex flex-col gap-2 p-2", className)} {...props} />;
}

function SidebarFooter({ className, ...props }) {
  return <div className={cn("flex flex-col gap-2 p-2", className)} {...props} />;
}

function SidebarSeparator({ className, ...props }) {
  return <Separator className={cn("mx-2", className)} {...props} />;
}

function SidebarContent({ className, ...props }) {
  return (
    <div className={cn("flex flex-1 flex-col gap-2 overflow-auto", className)} {...props} />
  );
}

function SidebarGroup({ className, ...props }) {
  return <div className={cn("flex flex-col p-2", className)} {...props} />;
}

function SidebarGroupLabel({ className, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp className={cn("h-8 px-2 text-xs font-medium", className)} {...props} />
  );
}

function SidebarGroupAction({ className, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn("absolute right-3 top-3 w-5", className)} {...props} />
  );
}

function SidebarGroupContent({ className, ...props }) {
  return <div className={cn("w-full text-sm", className)} {...props} />;
}

function SidebarMenu({ className, ...props }) {
  return <ul className={cn("flex flex-col gap-1", className)} {...props} />;
}

function SidebarMenuItem({ className, ...props }) {
  return <li className={cn("relative", className)} {...props} />;
}

const sidebarMenuButtonVariants = cva("peer/menu-button flex w-full items-center gap-2 p-2", {});

function SidebarMenuButton({
  tooltip,
  className,
  ...props
}) {
  const Comp = "button";
  const { isMobile, state } = useSidebar();
  const button = (
    <Comp className={cn(sidebarMenuButtonVariants(), className)} {...props} />
  );

  if (!tooltip) return button;
  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="right" hidden={state !== "collapsed" || isMobile}>
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
}

function SidebarMenuBadge({ className, ...props }) {
  return <div className={cn("absolute right-1", className)} {...props} />;
}

function SidebarMenuSkeleton({ className, showIcon = false, ...props }) {
  const width = `${Math.floor(Math.random() * 40) + 50}%`;

  return (
    <div className={cn("flex h-8 items-center gap-2 px-2", className)} {...props}>
      {showIcon && <Skeleton className="size-4" />}
      <Skeleton style={{ width }} className="h-4 flex-1" />
    </div>
  );
}

function SidebarMenuSub({ className, ...props }) {
  return <ul className={cn("border-l px-2", className)} {...props} />;
}

function SidebarMenuSubItem({ className, ...props }) {
  return <li className={cn("relative", className)} {...props} />;
}

function SidebarMenuSubButton({
  className,
  ...props
}) {
  return (
    <a className={cn("flex h-7 px-2 text-sm", className)} {...props} />
  );
}

export {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarRail,
  SidebarInset,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarInput,
  useSidebar,
};
