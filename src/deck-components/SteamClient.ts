export interface Apps {
    /**
     * Adds a non-Steam game to the local Steam library.
     * @param appName The name of the game.
     * @param executablePath The path to the game executable.
     * @param directory The working directory for the game.
     * @param launchOptions Options to be passed when launching the game.
     */
    AddShortcut(appName: string, executablePath: string, directory: string, launchOptions: string): any;

    AddUserTagToApps: any;

    /**
     * Backups an app to the specified path.
     * @param appId The ID of the application to back up.
     * @param backupToPath The path to store the backup.
     */
    BackupFilesForApp(appId: number, backupToPath: string): any;

    /**
     * Opens the screenshot folder for a specific app.
     * @param appId The ID of the app to browse screenshots for.
     * @param param1 Additional parameter (exact usage may vary).
     */
    BrowseScreenshotForApp(appId: string, param1: number): any;

    /**
     * Opens the screenshot folder for a specific app.
     * @param appId The ID of the app to browse screenshots for.
     */
    BrowseScreenshotsForApp(appId: string): any;

    /**
     * Cancels the current backup process.
     */
    CancelBackup(): any;

    CancelGameAction: any;
    CancelLaunch: any;
    ClearAndSetUserTagsOnApp: any;

    /**
     * Clears the custom artwork for a given application.
     * @param appId The ID of the application to clear custom artwork for.
     * @param assetType 0 = Grid, 1 = Hero, 2 = Logo
     */
    ClearCustomArtworkForApp(appId: number, assetType: number): Promise<any>;

    ClearCustomLogoPositionForApp: any;
    ClearProton: any;
    ClearUserTagsOnApps: any;
    ContinueGameAction: any;
    CreateDesktopShortcutForApp: any;
    DownloadWorkshopItem: any;
    GetAchievementsInTimeRange: any;
    GetActiveGameActions: any;

    /**
     * Retrieves a list of available compatibility tools for a specific application.
     * @param appId The ID of the application to retrieve compatibility tools for.
     * @returns A Promise that resolves to an array of CompatibilityToolInfo objects.
     */
    GetAvailableCompatTools(appId: number): Promise<CompatibilityToolInfo[]>;

    GetBackupsInFolder: any;
    GetCachedAppDetails: any;
    GetCloudPendingRemoteOperations: any;
    GetConflictingFileTimestamps: any;
    GetDetailsForScreenshotUpload: any;
    GetDetailsForScreenshotUploads: any;
    GetDownloadedWorkshopItems: any;
    GetDurationControlInfo: any;
    GetFriendAchievementsForApp: any;
    GetFriendsWhoPlay: any;
    GetGameActionDetails: any;
    GetGameActionForApp: any;
    GetLaunchOptionsForApp: any;
    GetLibraryBootstrapData: any;
    GetMyAchievementsForApp: any;
    GetPlaytime: any;
    GetPrePurchasedApps: any;

    /**
     * Retrieves the resolution override for a specific application.
     * @param appId The ID of the application to retrieve the resolution override for.
     * @returns A Promise that resolves to a string of the resolution override.
     */
    GetResolutionOverrideForApp(appId: number): Promise<string>;

    GetScreenshotInfo: any;
    GetScreenshotsInTimeRange: any;
    GetShortcutData: any;
    GetShortcutDataForPath: any;
    GetSoundtrackDetails: any;

    GetStoreTagLocalization(tags: number[]): Promise<any>;

    GetSubscribedWorkshopItems: any;
    InstallFlatpakAppAndCreateShortcut: any;
    JoinAppContentBeta: any;
    JoinAppContentBetaByPassword: any;
    ListFlatpakApps: any;
    LoadEula: any;
    MarkEulaAccepted: any;
    MarkEulaRejected: any;
    OpenAppSettingsDialog: any;
    RaiseWindowForGame: any;

    /**
     * Registers a callback function to be called when achievement changes occur.
     * @param callback The callback function to be called.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForAchievementChanges(callback: () => void): Unregisterable | any;

    RegisterForAppBackupStatus: Unregisterable | any;

    /**
     * Registers a callback function to be called when app details change.
     * @param appId The ID of the application to monitor.
     * @param callback The callback function to be called.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForAppDetails(appId: number, callback: (appDetails: AppDetails) => void): Unregisterable | any;

    RegisterForAppOverviewChanges: Unregisterable | any;
    RegisterForDRMFailureResponse: Unregisterable | any;

    /**
     * Registers a callback function to be called when a game action ends.
     * @param callback The callback function to be called.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForGameActionEnd(callback: (param0: number) => void): Unregisterable | any;

    RegisterForGameActionShowError: Unregisterable | any;

    /**
     * Registers a callback function to be called when a game action UI is shown.
     * @param callback The callback function to be called.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForGameActionShowUI(callback: () => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when a game action starts.
     * @param callback The callback function to be called.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForGameActionStart(callback: (actionType: any, appId: any) => void): Unregisterable | any;

    RegisterForGameActionTaskChange(callback: (data: any) => void): Unregisterable | any;

    RegisterForGameActionUserRequest(callback: (param0: number, appId: string, action: string, requestedAction: string, appId2: string) => void): Unregisterable | any;

    RegisterForLocalizationChanges: Unregisterable | any;
    RegisterForPrePurchasedAppChanges: Unregisterable | any;
    RegisterForShowMarketingMessageDialog: Unregisterable | any;
    RegisterForWorkshopChanges: Unregisterable | any;
    RegisterForWorkshopItemDownloads: Unregisterable | any;

    RemoveShortcut(appId: number): any;

    RemoveUserTagFromApps: any;
    ReportLibraryAssetCacheMiss: any;
    ReportMarketingMessageDialogShown: any;
    RequestIconDataForApp: any;
    RequestLegacyCDKeysForApp: any;
    ResetHiddenState: any;

    RunGame(appId: string, param1: string, param2: number, param3: number): any;

    SaveAchievementProgressCache: any;
    ScanForInstalledNonSteamApps: any;
    SetAppAutoUpdateBehavior: any;
    SetAppBackgroundDownloadsBehavior: any;
    SetAppCurrentLanguage: any;
    SetAppHidden: any;

    SetAppLaunchOptions(appId: number, launchOptions: string): any;

    SetAppResolutionOverride: any;
    SetCachedAppDetails: any;
    SetControllerRumblePreference: any;

    /**
     * Sets the custom artwork for a given application.
     * @param appId The ID of the application to set custom artwork for.
     * @param base64Image Base64 encoded image.
     * @param imageType "jpeg" or "png".
     * @param assetType 0 = Grid, 1 = Hero, 2 = Logo.
     * @returns A Promise that resolves after the custom artwork is set.
     */
    SetCustomArtworkForApp(appId: number, base64Image: string, imageType: string, assetType: number): Promise<any>;

    SetCustomLogoPositionForApp: any;
    SetDLCEnabled: any;
    SetLocalScreenshotCaption: any;
    SetLocalScreenshotPrivacy: any;
    SetLocalScreenshotSpoiler: any;

    SetShortcutExe(appId: number, path: string): any;

    SetShortcutIcon: any;
    SetShortcutIsVR: any;

    SetShortcutLaunchOptions(appId: number, launchOptions: string): any;

    SetShortcutName(appId: number, shortcutName: string): any;

    SetShortcutStartDir(appId: number, directory: string): any;

    SetStreamingClientForApp: any;
    SetThirdPartyControllerConfiguration: any;
    ShowControllerConfigurator: any;
    ShowStore: any;

    /**
     * Specifies a compatibility tool by its name for a given application. If strToolName is an empty string, the specified application will no longer use a compatibility tool.
     * @param appId The ID of the application to specify compatibility tool for.
     * @param strToolName The name of the compatibility tool to specify.
     */
    SpecifyCompatTool(appId: number, strToolName: string): void;

    StreamGame: any;
    SubscribeWorkshopItem: any;

    TerminateApp(appId: string, param1: boolean): any;

    ToggleAllowDesktopConfiguration: any;
    ToggleAppFamilyBlockedState: any;
    ToggleAppSteamCloudEnabled: any;
    ToggleAppSteamCloudSyncOnSuspendEnabled: any;
    ToggleEnableDesktopTheatreForApp: any;
    ToggleEnableSteamOverlayForApp: any;
    ToggleOverrideResolutionForInternalDisplay: any;
    UninstallFlatpakApp: any;

    /**
     * Verifies the integrity of an app's files.
     * @param appId The ID of the app to verify.
     */
    VerifyApp(appId: number): any;
}

export interface Auth {
    GetLocalHostname(): Promise<string>;

    GetMachineID(): Promise<ArrayBuffer>;

    GetRefreshInfo(): Promise<AuthRefreshInfo>;

    GetSteamGuardData: any;

    IsSecureComputer(): Promise<boolean>;

    SetLoginToken: any;
    SetSteamGuardData: any;
    StartSignInFromCache: any;
}

export interface Broadcast {
    ApproveViewerRequest: any;
    InviteToWatch: any;
    RegisterForBroadcastStatus: Unregisterable | any;
    RegisterForViewerRequests: Unregisterable | any;
    RejectViewerRequest: any;
    StopBroadcasting: any;
}

export interface Browser {
    BIsDirectHWNDBrowser: any;
    BIsPopupWindow: any;
    BIsVROverlayBrowser: any;
    ClearAllBrowsingData: any;
    ClearHistory: any;
    CloseDevTools: any;
    GetBrowserID: Promise<number>;
    GetSteamBrowserID: Promise<number>; // 16-bit unsigned integer?
    GoBack: any;
    GoForward: any;
    HideCursorUntilMouseEvent: any;
    InspectElement: any;
    NotifyUserActivation: any;
    OpenDevTools: any;
    OpenURLForNavigation: any;
    RegisterForGestureEvents: Unregisterable | any;
    RegisterForOpenNewTab: Unregisterable | any;
    SetShouldExitSteamOnBrowserClosed: any;
    SetTouchGesturesToCancel: any;
    StartDownload: any;
}

export interface BrowserView {
    Create: any;
    CreatePopup: any;
    Destroy: any;
    PostMessageToParent: any;
}

export interface ClientNotifications {
    DisplayClientNotification: any;
    OnRespondToClientNotification: any;
}

export interface Cloud {
    ResolveAppSyncConflict: any;
    RetryAppSync: any;
}

export interface CommunityItems {
    DownloadItemAsset: any;
    GetItemAssetPath: any;
    RemoveDownloadedItemAsset: any;
}

export interface Console {
    ExecCommand(command: string): void;

    GetAutocompleteSuggestions(command: string): Promise<string[]>;

    RegisterForSpewOutput(callback: (spewOutput: SpewOutput) => void): Unregisterable | any;
}

export interface Customization {
    GenerateLocalStartupMoviesThumbnails: any;
    GetDownloadedStartupMovies: any;
    GetLocalStartupMovies: any;
}

export interface Downloads {
    EnableAllDownloads: any;
    MoveAppUpdateDown: any;
    MoveAppUpdateUp: any;
    PauseAppUpdate: any;
    QueueAppUpdate: any;

    RegisterForDownloadItems(callback: (isDownloading: boolean, downloadItems: DownloadItem[]) => void): Unregisterable | any;

    RegisterForDownloadOverview(callback: (downloadOverview: DownloadOverview) => void): Unregisterable | any;

    RemoveFromDownloadList: any;
    ResumeAppUpdate: any;
    SetLaunchOnUpdateComplete: any;
    SetQueueIndex: any;
    SuspendDownloadThrottling: any;
    SuspendLanPeerContent: any;
}

export interface FamilySharing {
    AuthorizeLocalDevice: any;
    DeauthorizeLocalDevice: any;
    RequestFamilySharingAuthorization: any;
    UpdateAuthorizedBorrower: any;
}

export interface Features {
    SteamInitsPopups: any;
}

export interface FriendSettings {
    GetEnabledFeatures: any;
    RegisterForSettingsChanged: any;
    SetFriendSettings: any;
}

export interface Friends {
    AddFriend: any;
    GetCoplayData: any;
    InviteUserToCurrentGame: any;
    InviteUserToGame: any;
    InviteUserToLobby: any;
    InviteUserToRemotePlayTogetherCurrentGame: any;
    RegisterForVoiceChatStatus: any;
    RemoveFriend: any;
}

export interface GameNotes {
    DeleteImage: any;
    DeleteNotes: any;
    GetNotes: any;
    GetNotesMetadata: any;
    GetNumNotes: any;
    GetQuota: any;
    IterateNotes: any;
    ResolveSyncConflicts: any;
    SaveNotes: any;
    SyncToClient: any;
    SyncToServer: any;
    UploadImage: any;
}

export interface GameSessions {
    RegisterForAchievementNotification(callback: (achievementNotification: AchievementNotification) => void): Unregisterable | any;

    RegisterForAppLifetimeNotifications(callback: (appLifetimeNotification: AppLifetimeNotification) => void): Unregisterable | any;

    RegisterForScreenshotNotification(callback: (screenshotNotification: ScreenshotNotification) => void): Unregisterable | any;
}

export interface Input {
    BIsSteamController: any;
    BSupportsControllerLEDColor: any;
    CalibrateControllerIMU: any;
    CalibrateControllerJoystick: any;
    CalibrateControllerTrackpads: any;
    CancelGyroSWCalibration: any;
    ClearSelectedConfigForApp: any;
    CloseDesktopConfigurator: any;
    ControllerKeyboardSendText: any;
    ControllerKeyboardSetKeyState: any;
    DeauthorizeControllerAccount: any;
    DecrementCloudedControllerConfigsCounter: any;
    DeletePersonalControllerConfiguration: any;
    DuplicateControllerConfigurationSourceMode: any;
    EndControllerDeviceSupportFlow: any;
    ExportCurrentControllerConfiguration: any;
    ForceConfiguratorFocus: any;
    ForceSimpleHapticEvent: any;
    FreeControllerConfig: any;
    GetConfigForAppAndController: any;
    GetControllerMappingString: any;
    GetSteamControllerDongleState: any;
    GetTouchMenuIconsForApp: any;
    GetXboxDriverInstallState: any;
    IdentifyController: any;
    InitControllerSounds: any;
    InitializeControllerPersonalizationSettings: any;
    ModalKeyboardDismissed: any;
    OpenDesktopConfigurator: any;
    PreviewConfiguForAppAndController: any;
    PreviewControllerLEDColor: any;
    QueryControllerConfigsForApp: any;
    RegisterForActiveControllerChanges: any;
    RegisterForConfigSelectionChanges: any;
    RegisterForControllerAccountChanges: any;
    RegisterForControllerAnalogInputMessages: any;
    RegisterForControllerCommandMessages: any;
    RegisterForControllerConfigCloudStateChanges: any;
    RegisterForControllerConfigInfoMessages: any;

    RegisterForControllerInputMessages(callback: () => void): any;

    RegisterForControllerListChanges: any;
    RegisterForControllerStateChanges: any;
    RegisterForGameKeyboardMessages: any;
    RegisterForRemotePlayConfigChanges: any;
    RegisterForShowControllerLayoutPreviewMessages: any;
    RegisterForTouchMenuInputMessages: any;
    RegisterForTouchMenuMessages: any;
    RegisterForUIVisualization: any;
    RegisterForUnboundControllerListChanges: any;
    RegisterForUserDismissKeyboardMessages: any;
    RegisterForUserKeyboardMessages: any;
    RequestGyroActive: any;
    RequestRemotePlayControllerConfigs: any;
    ResetControllerBindings: any;
    ResolveCloudedControllerConfigConflict: any;
    RestoreControllerPersonalizationSettings: any;
    SaveControllerCalibration: any;
    SaveControllerPersonalizationSettings: any;
    SaveControllerSounds: any;
    SaveEditingControllerConfiguration: any;
    SetActiveControllerAccount: any;
    SetControllerConfigurationModeShiftBinding: any;
    SetControllerHapticSetting: any;
    SetControllerMappingString: any;
    SetControllerNintendoLayoutSetting: any;
    SetControllerPersonalizationName: any;
    SetControllerPersonalizationSetting: any;
    SetControllerPersonalizationSettingFloat: any;
    SetControllerRumbleSetting: any;
    SetCursorActionset: any;
    SetEditingControllerConfigurationActionSet: any;
    SetEditingControllerConfigurationInputActivator: any;
    SetEditingControllerConfigurationInputActivatorEnabled: any;
    SetEditingControllerConfigurationInputBinding: any;
    SetEditingControllerConfigurationMiscSetting: any;
    SetEditingControllerConfigurationSourceMode: any;
    SetGamepadKeyboardText: any;
    SetKeyboardActionset: any;

    SetMousePosition(x: number, y: number): any;

    SetSelectedConfigForApp: any;
    SetSteamControllerDonglePairingMode: any;
    SetVirtualMenuKeySelected: any;
    SetWebBrowserActionset: any;
    SetXboxDriverInstallState: any;
    ShowControllerSettings: any;
    StandaloneKeyboardDismissed: any;
    StartControllerDeviceSupportFlow: any;
    StartEditingControllerConfigurationForAppIDAndControllerIndex: any;
    StartGyroSWCalibration: any;
    StopEditingControllerConfiguration: any;
    SwapControllerModeInputBindings: any;
    SwapControllerOrder: any;
    SyncCloudedControllerConfigs: any;
    TriggerHapticPulse: any;
    TriggerSimpleHapticEvent: any;
    UnregisterForControllerStateChanges: any;
    UnregisterForUIVisualization: any;
    UploadChangesForCloudedControllerConfigs: any;
}

export interface InstallFolder {
    AddInstallFolder: any;
    BrowseFilesInFolder: any;
    CancelMove: any;

    /**
     * Retrieves a list of install folders.
     * @returns A Promise that resolves to an array of InstallFolder objects.
     */
    GetInstallFolders(): Promise<InstallFolder[]>;

    GetPotentialFolders: any;
    MoveInstallFolderForApp: any;
    RefreshFolders: any;
    RegisterForInstallFolderChanges: Unregisterable | any;
    RegisterForMoveContentProgress: Unregisterable | any;
    RegisterForRepairFolderFinished: Unregisterable | any;
    RemoveInstallFolder: any;
    RepairInstallFolder: any;
    SetDefaultInstallFolder: any;
    SetFolderLabel: any;
}

export interface Installs {
    CancelInstall: any;
    ContinueInstall: any;
    GetInstallManagerInfo: any;
    OpenInstallBackup: any;
    OpenInstallWizard: any;
    OpenUninstallWizard: any;
    RegisterForShowConfirmUninstall: Unregisterable | any;
    RegisterForShowFailedUninstall: Unregisterable | any;

    RegisterForShowInstallWizard(callback: (data: InstallWizardInfo) => void): Unregisterable | any;

    RegisterForShowRegisterCDKey: any;
    SetAppList: any;
    SetCreateShortcuts: any;
    SetInstallFolder: any;
}

export interface Messaging {
    RegisterForMessages(accountName: string, callback: (param0: any) => void): Unregisterable | any;

    PostMessage(): void;
}

export interface Music {
    DecreaseVolume: any;
    IncreaseVolume: any;
    PlayEntry: any;
    PlayNext: any;
    PlayPrevious: any;
    RegisterForMusicPlaybackChanges: Unregisterable | any;
    RegisterForMusicPlaybackPosition: Unregisterable | any;
    SetPlaybackPosition: any;
    SetPlayingRepeatStatus: any;
    SetPlayingShuffled: any;
    SetVolume: any;
    ToggleMuteVolume: any;
    TogglePlayPause: any;
}

export interface Notifications {
    RegisterForNotifications(callback: (param0: number, param1: number, param2: ArrayBuffer) => void): Unregisterable | any;
}

export interface VRDevice {
    BIsConnected: any;
    RegisterForDeviceConnectivityChange: Unregisterable | any;
}

export interface DeviceProperties {
    GetBoolDeviceProperty: any;
    GetDoubleDeviceProperty: any;
    GetFloatDeviceProperty: any;
    GetInt32DeviceProperty: any;
    GetStringDeviceProperty: any;
    RegisterForDevicePropertyChange: Unregisterable | any;
}

export interface Keyboard {
    SendText: any;
}

export interface VROverlay {
    ShowDashboard: any;
}

export interface OpenVR {
    Device: VRDevice;
    DeviceProperties: DeviceProperties;
    GetWebSecret: any;
    HideKeyboard: any;
    InstallVR: any;
    Keyboard: Keyboard;
    QuitAllVR: any;
    RegisterForInstallDialog: Unregisterable | any;
    RegisterStartupErrors: Unregisterable | any;
    RegisterForVRHardwareDetected: Unregisterable | any;
    RegisterForVRModeChange: Unregisterable | any;
    SendKeyboardDone: any;
    SetOverlayInteractionAffordance: any;
    ShowKeyboard: any;
    StartVR: any;
    TriggerOverlayHapticEffect: any;
    VROverlay: VROverlay;
}

export interface Overlay {
    DestroyGamePadUIDesktopConfiguratorWindow: any;
    GetOverlayBrowserInfo: any;
    HandleGameWebCallback: any;
    HandleProtocolForOverlayBrowser: any;
    RegisterForActiveOverlayRequests: Unregisterable | any;
    RegisterForMicroTxnAuth: Unregisterable | any;
    RegisterForMicroTxnAuthDismiss: Unregisterable | any;
    RegisterForNotificationPositionChanged: Unregisterable | any;
    RegisterForOverlayActivated: Unregisterable | any;
    RegisterForOverlayBrowserProtocols: Unregisterable | any;
    RegisterOverlayBrowserInfoChanged: Unregisterable | any;
    SetOverlayState: any;
}

export interface Parental {
    LockParentalLock: any;
    RegisterForParentalLockStatus: Unregisterable | any;
    UnlockParentalLock: any;
}

export interface RemotePlay {
    BCanAcceptInviteForGame: any;
    BCanCreateInviteForGame: any;
    BCanHostIsolatedGameAudio: any;
    BEnabled: any;
    BRemotePlayTogetherGuestOnPhoneOrTablet: any;
    BRemotePlayTogetherGuestSupported: any;
    CancelInviteAndSession: any;
    CancelInviteAndSessionWithGuestID: any;
    CloseGroup: any;
    CreateGroup: any;
    CreateInviteAndSession: any;
    CreateInviteAndSessionWithGuestID: any;
    GetClientStreamingBitrate: any;
    GetClientStreamingQuality: any;
    GetControllerType: any;
    GetGameSystemVolume: any;
    GetPerUserInputSettings: any;
    GetPerUserInputSettingsWithGuestID: any;
    IdentifyController: any;
    InstallAudioDriver: any;
    InstallInputDriver: any;
    MoveControllerToSlot: any;
    RegisterForAudioDriverPrompt: Unregisterable | any;
    RegisterForBitrateOverride: Unregisterable | any;
    RegisterForControllerIndexSet: Unregisterable | any;
    RegisterForDevicesChanges: Unregisterable | any;
    RegisterForGroupCreated: Unregisterable | any;
    RegisterForGroupDisbanded: Unregisterable | any;
    RegisterForInputDriverPrompt: Unregisterable | any;
    RegisterForInputDriverRestartNotice: Unregisterable | any;
    RegisterForInputUsed: Unregisterable | any;
    RegisterForInviteResult: Unregisterable | any;
    RegisterForNetworkUtilizationUpdate: Unregisterable | any;
    RegisterForPlaceholderStateChanged: Unregisterable | any;
    RegisterForPlayerInputSettingsChanged: Unregisterable | any;
    RegisterForQualityOverride: Unregisterable | any;
    RegisterForRemoteClientLaunchFailed: Unregisterable | any;
    RegisterForRemoteClientStarted: Unregisterable | any;
    RegisterForRemoteClientStopped: Unregisterable | any;

    RegisterForSettingsChanges(callback: (steamSettings: any) => void): Unregisterable | any;

    SetClientStreamingBitrate: any;
    SetClientStreamingQuality: any;
    SetGameSystemVolume: any;
    SetPerUserControllerInputEnabled: any;
    SetPerUserControllerInputEnabledWithGuestID: any;
    SetPerUserKeyboardInputEnabled: any;
    SetPerUserKeyboardInputEnabledWithGuestID: any;
    SetPerUserMouseInputEnabled: any;
    SetPerUserMouseInputEnabledWithGuestID: any;
    SetRemoteDeviceAuthorized: any;
    SetRemoteDevicePIN: any;
    SetRemotePlayEnabled: any;
    SetStreamingClientConfig: any;
    SetStreamingClientConfigEnabled: any;
    SetStreamingDesktopToRemotePlayTogetherEnabled: any;
    SetStreamingP2PScope: any;
    SetStreamingServerConfig: any;
    SetStreamingServerConfigEnabled: any;
    StopStreamingClient: any;
    StopStreamingSession: any;
    StopStreamingSessionAndSuspendDevice: any;
    UnlockH264: any;
    UnpairRemoteDevices: any;
}

export interface Screenshots {
    DeleteLocalScreenshot: any;

    GetAllAppsLocalScreenshots(): Promise<Screenshot[]>;

    GetAllAppsLocalScreenshotsCount: any;
    GetAllAppsLocalScreenshotsRange: any;

    GetAllLocalScreenshots(): Promise<Screenshot[]>;

    GetGameWithLocalScreenshots: any;

    GetLastScreenshotTaken(): Promise<Screenshot>;

    GetLocalScreenshot: any;
    GetLocalScreenshotCount: any;
    GetNumGamesWithLocalScreenshots: any;
    ShowScreenshotInSystemViewer: any;
    ShowScreenshotOnDisk: any;
    UploadLocalScreenshot: any;
}

export interface ServerBrowser {
    AddFavoriteServer: any;
    AddFavoriteServersByIP: any;
    CancelServerQuery: any;
    ConnectToServer: any;
    CreateFriendGameInfoDialog: any;
    CreateServerGameInfoDialog: any;
    DestroyGameInfoDialog: any;
    DestroyServerListRequest: any;
    GetMultiplayerGames: any;
    GetServerListPreferences: any;
    PingServer: any;
    RegisterForFavorites: any;
    RegisterForFriendGamePlayed: any;
    RegisterForGameInfoDialogs: any;
    RegisterForPlayerDetails: any;
    RegisterForServerInfo: any;
    RemoveFavoriteServer: any;
    RemoveHistoryServer: any;
    RequestPlayerDetails: any;
    SetServerListPreferences: any;
}

export interface Settings {
    AddClientBeta: any;
    ClearAllHTTPCaches: any;
    ClearDownloadCache: any;
    GetAccountSettings: any;
    GetAppUsesP2PVoice: any;
    GetAvailableLanguages: any;
    GetAvailableTimeZones: any;
    GetCurrentLanguage: any;

    GetGlobalCompatTools(): Promise<CompatibilityToolInfo[]>;

    GetMonitorInfo: any;
    GetOOBETestMode: any;
    GetRegisteredSteamDeck: any;
    GetTimeZone: any;
    GetWindowed: any;
    IgnoreSteamDeckRewards: any;
    OpenWindowsMicSettings: any;
    RegisterForMicVolumeUpdates: Unregisterable | any;
    RegisterForSettingsArrayChanges: Unregisterable | any;
    RegisterForSettingsChanges: Unregisterable | any;
    RegisterForTimeZoneChange: Unregisterable | any;
    ReinitMicSettings: any;
    RequestDeviceAuthInfo: any;
    SelectClientBeta: any;

    SetCefRemoteDebuggingEnabled(value: boolean): any;

    SetCurrentLanguage: any;
    SetEnableSoftProcessKill: any;
    SetEnableTestUpdaters: any;
    SetForceOOBE: any;
    SetHostname: any;
    SetMicTestMode: any;
    SetOOBETestMode: any;
    SetOverrideBrowserComposerMode: any;
    SetPreferredMonitor: any;
    SetRegisteredSteamDeck: any;
    SetSaveAccountCredentials: any;
    SetSetting: any;
    SetShowMobxDevTools: any;
    SetSteamPlayEnabled: any;
    SetTimeZone: any;
    SetUseNintendoButtonLayout: any;
    SetWindowed: any;
    SpecifyGlobalCompatTool: any;
    ToggleSteamInstall: any;
}

export interface SharedConnection {
    AllocateSharedConnection: any;
    Close: any;
    RegisterOnBinaryMessageReceived: Unregisterable | any;
    RegisterOnLogonInfoChanged: Unregisterable | any;
    RegisterOnMessageReceived: Unregisterable | any;
    SendMsg: any;
    SendMsgAndAwaitBinaryResponse: any;
    SubscribeToClientServiceMethod: any;
    SubscribeToEMsg: any;
}

export interface Stats {
    RecordActivationEvent: any;
    RecordDisplayEvent: any;
}

export interface SteamChina {
    GetCustomLauncherAppID: any;
}

export interface Storage {
    DeleteKey: any;
    GetJSON: any;
    GetString: any;
    SetObject: any;
    SetString: any;
}

export interface Streaming {
    AcceptStreamingEULA: any;
    CancelStreamGame: any;
    RegisterForStreamingClientFinished: Unregisterable | any;
    RegisterForStreamingClientLaunchProgress: Unregisterable | any;
    RegisterForStreamingClientStarted: Unregisterable | any;
    RegisterForStreamingLaunchComplete: Unregisterable | any;
    RegisterForStreamingShowEula: Unregisterable | any;
    RegisterForStreamingShowIntro: Unregisterable | any;
    RegisterForStreamingShowLaunchOptions: Unregisterable | any;
    StreamingContinueStreamGame: any;
    StreamingSetLaunchOption: any;
}

export interface Audio {
    ClearDefaultDeviceOverride: any;
    GetApps: any;
    GetDevices: any;
    RegisterForAppAdded: Unregisterable | any;
    RegisterForAppRemoved: Unregisterable | any;
    RegisterForAppVolumeChanged: Unregisterable | any;
    RegisterForDeviceAdded: Unregisterable | any;
    RegisterForDeviceRemoved: Unregisterable | any;
    RegisterForDeviceVolumeChanged: Unregisterable | any;
    RegisterForServiceConnectionStateChanges: Unregisterable | any;
    RegisterForVolumeButtonPressed: Unregisterable | any;
    SetAppVolume: any;
    SetDefaultDeviceOverride: any;
    SetDeviceVolume: any;
}

export interface Devkit {
    DeveloperModeChanged: any;
    RegisterForPairingPrompt: Unregisterable | any;
    RespondToPairingPrompt: any;
    SetPairing: any;
}

export interface Display {
    EnableUnderscan: any;

    RegisterForBrightnessChanges(callback: (brightness: number) => void): Unregisterable | any;

    SetBrightness(brightness: number): any;

    SetUnderscanLevel: any;
}

export interface WirelessNetwork {
    Forget: any;
    SetAutoconnect: any;
}

export interface NetworkDevice {
    Connect: any;
    Disconnect: any;
    WirelessNetwork: WirelessNetwork;
}

export interface Network {
    Device: NetworkDevice;
    ForceRefresh: any;
    ForceTestConnectivity: any;
    GetProxyInfo: any;
    RegisterForAppSummaryUpdate: Unregisterable | any;
    RegisterForConnectionStateUpdate: Unregisterable | any;
    RegisterForConnectivityTestChanges: Unregisterable | any;
    RegisterForDeviceChanges: Unregisterable | any;
    SetFakeLocalSystemState: any;
    SetProxyInfo: any;
    SetWifiEnabled: any;
    StartScanningForNetworks: any;
    StopScanningForNetworks: any;
}

export interface Report {
    GenerateSystemReport: any;
    Submit: any;
}

export interface BlockDevice {
    Format: any;
    Unmount: any;
}

export interface Drive {
    Eject: any;
}

export interface SystemStorage {
    BlockDevice: BlockDevice;
    Drive: Drive;
    RegisterForStateChanges: Unregisterable | any;
    TrimAll: any;
}

export interface SystemUI {
    CloseGameWindow: any;
    GetGameWindowsInfo: any;
    RegisterForFocusChangeEvents: Unregisterable | any;
    RegisterForOverlayGameWindowFocusChanged: Unregisterable | any;

    RegisterForSystemKeyEvents(callback: (event: any) => void): Unregisterable | any;
}

export interface System {
    Audio: Audio;
    Devkit: Devkit;
    Display: Display;
    ExitFakeCaptivePortal: any;
    FactoryReset: any;
    FormatStorage: any;
    GetLegacyAmpControlEnabled: any;
    GetOSType: any;
    GetSystemInfo: any;
    IsDeckFactoryImage: any;
    Network: Network;
    NotifyGameOverlayStateChanged: any;
    OpenFileDialog: any;
    OpenLocalDirectoryInSystemExplorer: any;
    RebootToAlternateSystemPartition: any;
    RebootToFactoryTestImage: any;

    RegisterForAirplaneModeChanges(callback: (param0: any) => void): Unregisterable | any;

    RegisterForBatteryStateChanges: Unregisterable | any;
    RegisterForFormatStorageProgress: Unregisterable | any;

    RegisterForOnResumeFromSuspend(callback: () => void): Unregisterable | any;

    RegisterForOnSuspendRequest(callback: () => void): Unregisterable | any;

    RegisterForSettingsChanges: Unregisterable | any;
    Report: Report;
    RestartPC: any;
    SetAirplaneMode: any;
    SetLegacyAmpControl: any;

    ShutdownPC(): any;

    SteamRuntimeSystemInfo: any;
    Storage: SystemStorage;
    SuspendPC: any;
    SwitchToDesktop: any;
    UI: SystemUI;
    UpdateSettings: any;
}

export interface UI {
    EnsureMainWindowCreated: any;
    ExitBigPictureMode: any;
    GetDesiredSteamUIWindows: any;
    GetOSEndOfLifeInfo: any;
    GetUIMode: any;
    NotifyAppInitialized: any;
    RegisterDesiredSteamUIWindowsChanged: Unregisterable | any;
    RegisterForKioskModeResetSignal: Unregisterable | any;
    RegisterForUIModeChanged: Unregisterable | any;
    ResetErrorCondition: any;
    SetUIMode: any;
}

export interface URL {
    ExecuteSteamURL: any;
    GetSteamURLList: any;
    GetWebSessionID: any;
    RegisterForRunSteamURL: Unregisterable | any;
    RegisterForSteamURLChanges: Unregisterable | any;
}

export interface Updates {
    ApplyUpdates: any;
    CheckForUpdates: any;
    GetCurrentOSBranch: any;
    RegisterForUpdateStateChanges: Unregisterable | any;
    SelectOSBranch: any;
}

export interface User {
    AuthorizeMicrotxn: any;
    CancelLogin: any;
    CancelMicrotxn: any;
    CancelShutdown: any;
    ChangeUser: any;
    Connect: any;
    FlipToLogin: any;
    ForceShutdown: any;
    ForgetPassword: any;
    GetIPCountry: any;
    GetLoginProgress: any;
    GetLoginUsers: any;
    GoOffline: any;
    GoOnline: any;
    OptOutOfSurvey: any;
    PrepareForSystemSuspend: any;
    Reconnect: any;
    RegisterForConnectionAttemptsThrottled: Unregisterable | any;

    RegisterForCurrentUserChanges(callback: (data: any) => void): Unregisterable | any;

    RegisterForLoginStateChange(callback: (username: string) => void): Unregisterable | any;

    RegisterForPrepareForSystemSuspendProgress(callback: (data: any) => void): Unregisterable | any;

    RegisterForResumeSuspendedGamesProgress: Unregisterable | any;

    RegisterForShutdownDone(callback: () => void): Unregisterable | any;

    RegisterForShutdownFailed: Unregisterable | any;

    /**
     * Register a function to be executed when a shutdown start is detected.
     * @param callback The function to be executed on shutdown start.
     */
    RegisterForShutdownStart(callback: () => void): Unregisterable | any;

    RegisterForShutdownState: Unregisterable | any;
    RemoveUser: any;
    RequestSupportSystemReport: any;
    ResumeSuspendedGames: any;
    RunSurvey: any;
    SendSurvey: any;
    SetAsyncNotificationEnabled: any;
    SetLoginCredentials: any;
    SetOOBEComplete: any;
    ShouldShowUserChooser: any;
    SignOutAndRestart: any;
    StartLogin: any;
    StartOffline: any;

    /**
     * Restarts the Steam client.
     */
    StartRestart(): any;

    StartShutdown(flag: boolean): any;
}

export interface WebChat {
    BSuppressPopupsInRestore: any;
    GetCurrentUserAccountID: any;
    GetLocalAvatarBase64: any;
    GetLocalPersonaName: any;
    GetOverlayChatBrowserInfo: any;
    GetPrivateConnectString: any;
    GetPushToTalkEnabled: any;
    GetSignIntoFriendsOnStart: any;
    GetUIMode: any;
    GetWebChatLanguage: any;
    OnGroupChatUserStateChange: any;
    OpenURLInClient: any;
    RegisterForComputerActiveStateChange: Unregisterable | any;
    RegisterForFriendPostMessage: Unregisterable | any;
    RegisterForMouseXButtonDown: Unregisterable | any;
    RegisterForPushToTalkStateChange: Unregisterable | any;
    RegisterForUIModeChange: Unregisterable | any;
    RegisterForVRModeChange: Unregisterable | any;
    RegisterOverlayChatBrowserInfoChanged: Unregisterable | any;
    SetActiveClanChatIDs: any;
    SetNumChatsWithUnreadPriorityMessages: any;
    SetPersonaName: any;
    SetPushToMuteEnabled: any;
    SetPushToTalkEnabled: any;
    SetPushToTalkHotKey: any;
    SetPushToTalkMouseButton: any;
    SetVoiceChatActive: any;
    SetVoiceChatStatus: any;
    ShowChatRoomGroupDialog: any;
    ShowFriendChatDialog: any;
    UnregisterForMouseXButtonDown: any;
}

export interface WebUITransport {
    GetTransportInfo: any;
}

export interface Window {
    BringToFront: any;
    Close: any;
    DefaultMonitorHasFullscreenWindow: any;
    FlashWindow: any;
    GamescopeBlur: any;
    GetDefaultMonitorDimensions: any;
    GetMousePositionDetails: any;
    GetWindowDimensions: any;
    GetWindowRestoreDetails: any;
    HideWindow: any;
    IsWindowMaximized: any;
    IsWindowMinimized: any;
    MarkLastFocused: any;
    Minimize: any;
    MoveTo: any;
    MoveToLocation: any;
    PositionWindowRelative: any;
    ProcessShuttingDown: any;
    ResizeTo: any;
    RestoreWindowSizeAndPosition: any;
    SetAutoDisplayScale: any;
    SetComposition: any;
    SetHideOnClose: any;
    SetKeyFocus: any;
    SetManualDisplayScaleFactor: any;
    SetMaxSize: any;
    SetMinSize: any;
    SetModal: any;
    SetResizeGrip: any;
    SetWindowIcon: any;
    ShowWindow: any;
    StopFlashWindow: any;
    ToggleFullscreen: any;
    ToggleMaximize: any;
}

export interface SteamClient {
    Apps: Apps;
    Auth: Auth;
    Broadcast: Broadcast;
    Browser: Browser;
    BrowserView: BrowserView;
    ClientNotifications: ClientNotifications;
    Cloud: Cloud;
    CommunityItems: CommunityItems;
    Console: Console;
    Customization: Customization;
    Downloads: Downloads;
    FamilySharing: FamilySharing;
    Features: Features;
    FriendSettings: FriendSettings;
    Friends: Friends;
    GameNotes: GameNotes;
    GameSessions: GameSessions;
    Input: Input;
    InstallFolder: InstallFolder;
    Installs: Installs;
    MachineStorage: Storage;
    Messaging: Messaging;
    Music: Music;
    Notifications: Notifications;
    OpenVR: OpenVR;
    Overlay: Overlay;
    Parental: Parental;
    RegisterIFrameNavigatedCallback: any;
    RemotePlay: RemotePlay;
    RoamingStorage: Storage;
    Screenshots: Screenshots;
    ServerBrowser: ServerBrowser;
    Settings: Settings;
    SharedConnection: SharedConnection;
    Stats: Stats;
    SteamChina: SteamChina;
    Storage: Storage;
    Streaming: Streaming;
    System: System;
    UI: UI;
    URL: URL;
    Updates: Updates;
    User: User;
    WebChat: WebChat;
    WebUITransport: WebUITransport;
    Window: Window;
}

export interface SteamShortcut {
    appid: number;
    data: {
        bIsApplication: boolean;
        strAppName: string;
        strExePath: string;
        strArguments: string;
        strShortcutPath: string;
        strSortAs: string;
    };
}

/**
 * @prop unAppID is not properly set by Steam for non-steam game shortcuts, so it defaults to 0 for them
 */
export interface AppLifetimeNotification {
    unAppID: number;
    nInstanceID: number;
    bRunning: boolean;
}

export type AppAchievements = {
    nAchieved: number;
    nTotal: number;
    vecAchievedHidden: any[];
    vecHighlight: any[];
    vecUnachieved: any[];
};

export type AppLanguages = {
    strDisplayName: string;
    strShortName: string;
};

export type LogoPinPositions = 'BottomLeft' | 'UpperLeft' | 'CenterCenter' | 'UpperCenter' | 'BottomCenter';

export interface LogoPosition {
    pinnedPosition: LogoPinPositions;
    nWidthPct: number;
    nHeightPct: number;
}

export interface AppDetails {
    achievements: AppAchievements;
    bCanMoveInstallFolder: boolean;
    bCloudAvailable: boolean;
    bCloudEnabledForAccount: boolean;
    bCloudEnabledForApp: boolean;
    bCloudSyncOnSuspendAvailable: boolean;
    bCloudSyncOnSuspendEnabled: boolean;
    bCommunityMarketPresence: boolean;
    bEnableAllowDesktopConfiguration: boolean;
    bFreeRemovableLicense: boolean;
    bHasAllLegacyCDKeys: boolean;
    bHasAnyLocalContent: boolean;
    bHasLockedPrivateBetas: boolean;
    bIsExcludedFromSharing: boolean;
    bIsSubscribedTo: boolean;
    bOverlayEnabled: boolean;
    bOverrideInternalResolution: boolean;
    bRequiresLegacyCDKey: boolean;
    bShortcutIsVR: boolean;
    bShowCDKeyInMenus: boolean;
    bShowControllerConfig: boolean;
    bSupportsCDKeyCopyToClipboard: boolean;
    bVRGameTheatreEnabled: boolean;
    bWorkshopVisible: boolean;
    eAppOwnershipFlags: number;
    eAutoUpdateValue: number;
    eBackgroundDownloads: number;
    eCloudSync: number;
    eControllerRumblePreference: number;
    eDisplayStatus: number;
    eEnableThirdPartyControllerConfiguration: number;
    eSteamInputControllerMask: number;
    iInstallFolder: number;
    lDiskUsageBytes: number;
    lDlcUsageBytes: number;
    nBuildID: number;
    nCompatToolPriority: number;
    nPlaytimeForever: number;
    nScreenshots: number;
    rtLastTimePlayed: number;
    rtLastUpdated: number;
    rtPurchased: number;
    selectedLanguage: {
        strDisplayName: string;
        strShortName: string;
    };
    strCloudBytesAvailable: string;
    strCloudBytesUsed: string;
    strCompatToolDisplayName: string;
    strCompatToolName: string;
    strDeveloperName: string;
    strDeveloperURL: string;
    strDisplayName: string;
    strExternalSubscriptionURL: string;
    strFlatpakAppID: string;
    strHomepageURL: string;
    strLaunchOptions: string;
    strManualURL: string;
    strOwnerSteamID: string;
    strResolutionOverride: string;
    strSelectedBeta: string;
    strShortcutExe: string;
    strShortcutLaunchOptions: string;
    strShortcutStartDir: string;
    strSteamDeckBlogURL: string;
    unAppID: number;
    vecBetas: any[];
    vecDLC: any[];
    vecDeckCompatTestResults: any[];
    vecLanguages: AppLanguages[];
    vecLegacyCDKeys: any[];
    vecMusicAlbums: any[];
    vecPlatforms: string[];
    vecScreenShots: any[];
    libraryAssets?: {
        logoPosition?: LogoPosition;
    };
}

export interface SteamAppOverview {
    display_name: string;
    gameid: string;
    appid: number;
    icon_hash: string;
    third_party_mod?: boolean;
    selected_clientid?: string;
    BIsModOrShortcut: () => boolean;
    BIsShortcut: () => boolean;
}

/**
 * Represents information about a compatibility tool.
 */
export interface CompatibilityToolInfo {
    /** Name of the compatibility tool. */
    strToolName: string;
    /** Display name of the compatibility tool. */
    strDisplayName: string;
}


/**
 * Represents information about an installed application.
 */
export interface AppInfo {
    /** ID of the application. */
    nAppID: number;
    /** Name of the application. */
    strAppName: string;
    /** Sorting information for the application. */
    strSortAs: string;
    /** Last played time in Unix Epoch time format. */
    rtLastPlayed: number;
    /** Size of used storage by the application. */
    strUsedSize: string;
    /** Size of DLC storage used by the application. */
    strDLCSize: string;
    /** Size of workshop storage used by the application. */
    strWorkshopSize: string;
    /** Size of staged storage used by the application. */
    strStagedSize: string;
}

/**
 * Represents information about an installation folder.
 */
export interface InstallFolder {
    /** Index of the folder. */
    nFolderIndex: number;
    /** Path of the folder. */
    strFolderPath: string;
    /** User label for the folder. */
    strUserLabel: string;
    /** Name of the drive where the folder is located. */
    strDriveName: string;
    /** Total capacity of the folder. */
    strCapacity: string;
    /** Available free space in the folder. */
    strFreeSpace: string;
    /** Used space in the folder. */
    strUsedSize: string;
    /** Size of DLC storage used in the folder. */
    strDLCSize: string;
    /** Size of workshop storage used in the folder. */
    strWorkshopSize: string;
    /** Size of staged storage used in the folder. */
    strStagedSize: string;
    /** Indicates if the folder is set as the default installation folder. */
    bIsDefaultFolder: boolean;
    /** Indicates if the folder is currently mounted. */
    bIsMounted: boolean;
    /** Indicates if the folder is on a fixed drive. */
    bIsFixed: boolean;
    /** List of applications installed in the folder. */
    vecApps: AppInfo[];
}

export interface AchievementNotification {
    achievement: AppAchievements,
    nCurrentProgress: number,
    nMaxProgress: number,
    unAppID: number
}

export interface ScreenshotNotification {
    details: Screenshot,
    hScreenshot: number,
    strOperation: string,
    unAppID: number,
}

export interface Screenshot {
    bSpoilers: boolean,
    bUploaded: boolean,
    ePrivacy: number,
    hHandle: number,
    nAppID: number,
    nCreated: number,
    nHeight: number,
    nWidth: number,
    strCaption: "",
    strUrl: string,
    ugcHandle: string
}

export interface DownloadItem {
    active: boolean,
    appid: number,
    buildid: number,
    completed: boolean,
    completed_time: number,
    deferred_time: number,
    downloaded_bytes: number,
    launch_on_completion: boolean,
    paused: boolean,
    queue_index: number,
    target_buildid: number,
    total_bytes: number,
    update_error: string,
    update_result: number,
    update_type_info: UpdateTypeInfo[]
}

export interface UpdateTypeInfo {
    completed_update: boolean,
    downloaded_bytes: number,
    has_update: boolean,
    total_bytes: number
}

export interface DownloadOverview {
    lan_peer_hostname: string,
    paused: boolean,
    throttling_suspended: boolean,
    update_appid: number,
    update_bytes_downloaded: number,
    update_bytes_processed: number,
    update_bytes_staged: number,
    update_bytes_to_download: number,
    update_bytes_to_process: number,
    update_bytes_to_stage: number,
    update_disc_bytes_per_second: number,
    update_is_install: boolean,
    update_is_prefetch_estimate: boolean,
    update_is_shader: boolean,
    update_is_upload: boolean,
    update_is_workshop: boolean,
    update_network_bytes_per_second: number,
    update_peak_network_bytes_per_second: number,
    update_seconds_remaining: number,
    update_start_time: number,
    update_state: "None" | "Starting" | "Updating" | "Stopping"
}

export interface InstallWizardInfo {
    bCanChangeInstallFolder: boolean,
    bIsRetailInstall: boolean,
    currentAppID: number,
    eAppError: number,
    eInstallState: number,
    errorDetail: string,
    iInstallFolder: number,
    iUnmountedFolder: number,
    nDiskSpaceAvailable: number,
    nDiskSpaceRequired: number,
    rgAppIDs: number[],
}

export interface SpewOutput {
    spew: string;
    spew_type: string;
}

export interface AuthRefreshInfo {
    reason: number;
    account_name: string;
    login_id_token: string;
}


export interface Unregisterable {
    /**
     * Unregister the callback.
     */
    unregister(): void;
}