// @Inject(PLATFORM_ID) private platformId on constructor
// Condicional : if (!isPlatformBrowser(this.platformId)) return

export function detectPlatform(): string | null {

  const userAgent = navigator.userAgent;
  if (userAgent.includes('Android')) {
    return 'Android';
  } else if (userAgent.includes('iPhone')) {
    return 'iPhone';
  } else {
    return 'Other';
  }
}
