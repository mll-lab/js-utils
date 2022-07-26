/**
 * Detects if a mobile device is used
 */
export function isMobileDevice(): boolean {
  const userAgent =
    typeof window.navigator === 'undefined' ? '' : navigator.userAgent;

  return Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
    ),
  );
}
