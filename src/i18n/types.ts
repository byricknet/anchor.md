export interface Translations {
  nav: {
    identity: string
    environment: string
    infrastructure: string
    review: string
    subtitle: string
  }
  identity: {
    title: string
    projectName: string
    projectNamePlaceholder: string
    selectVibe: string
    vibes: {
      speedrun: string
      speedrunDesc: string
      balanced: string
      balancedDesc: string
      strictTdd: string
      strictTddDesc: string
      enterprise: string
      enterpriseDesc: string
    }
    nextStep: string
  }
  domain: {
    title: string
    subtitle: string
    frontend: string
    frontendDesc: string
    mobile: string
    mobileDesc: string
    fullstack: string
    fullstackDesc: string
    backend: string
    backendDesc: string
    selected: string
    back: string
    next: string
  }
  ecosystem: {
    title: string
    subtitle: string
    back: string
    next: string
  }
  cicd: {
    title: string
    subtitle: string
    customInstructions: string
    customInstructionsPlaceholder: string
    back: string
    done: string
  }
  preview: {
    label: string
    copy: string
    download: string
    emptyTitle: string
    emptySubtitle: string
  }
  topbar: {
    lightMode: string
    darkMode: string
    help: string
    settings: string
  }
}
