import Logger from '../logger';
import { Export, findModuleExport } from '../webpack';

export enum SideMenu {
  None,
  Main,
  QuickAccess,
}

export enum QuickAccessTab {
  Notifications,
  RemotePlayTogetherControls,
  VoiceChat,
  Friends,
  Settings,
  Perf,
  Help,
  Music,
  Decky = 999,
}

export enum DisplayStatus {
  Invalid = 0,
  Launching = 1,
  Uninstalling = 2,
  Installing = 3,
  Running = 4,
  Validating = 5,
  Updating = 6,
  Downloading = 7,
  Synchronizing = 8,
  ReadyToInstall = 9,
  ReadyToPreload = 10,
  ReadyToLaunch = 11,
  RegionRestricted = 12,
  PresaleOnly = 13,
  InvalidPlatform = 14,
  PreloadComplete = 16,
  BorrowerLocked = 17,
  UpdatePaused = 18,
  UpdateQueued = 19,
  UpdateRequired = 20,
  UpdateDisabled = 21,
  DownloadPaused = 22,
  DownloadQueued = 23,
  DownloadRequired = 24,
  DownloadDisabled = 25,
  LicensePending = 26,
  LicenseExpired = 27,
  AvailForFree = 28,
  AvailToBorrow = 29,
  AvailGuestPass = 30,
  Purchase = 31,
  Unavailable = 32,
  NotLaunchable = 33,
  CloudError = 34,
  CloudOutOfDate = 35,
  Terminating = 36,
}

export type AppOverview = {
  appid: string;
  display_name: string;
  display_status: DisplayStatus;
  sort_as: string;
};

export interface MenuStore {
  OpenSideMenu(sideMenu: SideMenu): void;
  OpenQuickAccessMenu(quickAccessTab?: QuickAccessTab): void;
  OpenMainMenu(): void;
}

export interface WindowRouter {
  BrowserWindow: Window;
  MenuStore: MenuStore;
  Navigate(path: string): void;
  NavigateToChat(): void;
  NavigateToSteamWeb(url: string): void;
  NavigateBack(): void;
}

export interface WindowStore {
  GamepadUIMainWindowInstance?: WindowRouter; // Current
  SteamUIWindows: WindowRouter[];
  OverlayWindows: WindowRouter[]; // Used by desktop GamepadUI
}

export interface Router {
  WindowStore?: WindowStore;
  /** @deprecated use {@link Navigation} instead */
  CloseSideMenus(): void;
  /** @deprecated use {@link Navigation} instead */
  Navigate(path: string): void;
  /** @deprecated use {@link Navigation} instead */
  NavigateToAppProperties(): void;
  /** @deprecated use {@link Navigation} instead */
  NavigateToExternalWeb(url: string): void;
  /** @deprecated use {@link Navigation} instead */
  NavigateToInvites(): void;
  /** @deprecated use {@link Navigation} instead */
  NavigateToChat(): void;
  /** @deprecated use {@link Navigation} instead */
  NavigateToLibraryTab(): void;
  /** @deprecated use {@link Navigation} instead */
  NavigateToLayoutPreview(e: unknown): void;
  /** @deprecated use {@link Navigation} instead */
  OpenPowerMenu(unknown?: any): void;
  get RunningApps(): AppOverview[];
  get MainRunningApp(): AppOverview | undefined;
}

export const Router = findModuleExport((e: Export) => e.Navigate && e.NavigationManager) as Router;

export interface Navigation {
  Navigate(path: string): void;
  NavigateBack(): void;
  NavigateToAppProperties(): void;
  NavigateToExternalWeb(url: string): void;
  NavigateToInvites(): void;
  NavigateToChat(): void;
  NavigateToLibraryTab(): void;
  NavigateToLayoutPreview(e: unknown): void;
  NavigateToSteamWeb(url: string): void;
  OpenSideMenu(sideMenu: SideMenu): void;
  OpenQuickAccessMenu(quickAccessTab?: QuickAccessTab): void;
  OpenMainMenu(): void;
  OpenPowerMenu(unknown?: any): void;
  CloseSideMenus(): void;
}

export let Navigation = {} as Navigation;

const logger = new Logger("Navigation");

try {
  function createNavigationFunction(fncName: string, handler?: (win: any) => any) {
    return (...args: any) => {
      let win: WindowRouter | undefined;
      try {
        win = window.SteamUIStore.GetFocusedWindowInstance();
      } catch (e) {
        logger.warn("Navigation interface failed to call GetFocusedWindowInstance", e);
      }
      if (!win) {
        logger.warn("Navigation interface could not find any focused window. Falling back to GamepadUIMainWindowInstance");
        win = Router.WindowStore?.GamepadUIMainWindowInstance;
      }

      if (win) {
        try {
          const thisObj = handler && handler(win);
          (thisObj || win)[fncName](...args);
        } catch (e) {
          logger.error("Navigation handler failed", e);
        }
      } else {
        logger.error("Navigation interface could not find a window to navigate");
      }
    }
  }
  const newNavigation = {
    Navigate: createNavigationFunction("Navigate"),
    NavigateBack: createNavigationFunction("NavigateBack"),
    NavigateToAppProperties: createNavigationFunction("AppProperties", win => win.Navigator),
    NavigateToExternalWeb: createNavigationFunction("ExternalWeb", win => win.Navigator),
    NavigateToInvites: createNavigationFunction("Invites", win => win.Navigator),
    NavigateToChat: createNavigationFunction("Chat", win => win.Navigator),
    NavigateToLibraryTab: createNavigationFunction("LibraryTab", win => win.Navigator),
    NavigateToLayoutPreview: Router.NavigateToLayoutPreview?.bind(Router),
    NavigateToSteamWeb: createNavigationFunction("NavigateToSteamWeb"),
    OpenSideMenu: createNavigationFunction("OpenSideMenu", win => win.MenuStore),
    OpenQuickAccessMenu: createNavigationFunction("OpenQuickAccessMenu", win => win.MenuStore),
    OpenMainMenu: createNavigationFunction("OpenMainMenu", win => win.MenuStore),
    CloseSideMenus: createNavigationFunction("CloseSideMenus", win => win.MenuStore),
    OpenPowerMenu: Router.OpenPowerMenu?.bind(Router),
  } as Navigation;

  Object.assign(Navigation, newNavigation);
} catch (e) {
  logger.error('Error initializing Navigation interface', e);
}
