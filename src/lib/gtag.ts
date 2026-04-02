/**
 * GA4 イベントトラッキングユーティリティ
 * window.gtag を使用してカスタムイベントを送信する
 */

// GA4のgtag型定義
declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'js',
      targetOrAction: string | Date,
      params?: Record<string, string | number | boolean | undefined>
    ) => void;
  }
}

/** CTAの種類 */
export type CTAType =
  | 'phone'
  | 'web_booking'
  | 'hotpepper'
  | 'floating_phone'
  | 'floating_web';

/**
 * 汎用GA4イベント送信
 * @param action - イベントアクション名
 * @param category - イベントカテゴリ
 * @param label - イベントラベル（任意）
 * @param value - イベント値（任意）
 */
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

/**
 * CTAクリックのトラッキング
 * @param ctaType - CTAの種類（phone, web_booking, hotpepper, floating_phone, floating_web）
 * @param location - CTAの配置場所（header, reserve_section, floating, simulation等）
 */
export function trackCTAClick(ctaType: CTAType, location: string): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'cta_click', {
    event_category: 'CTA',
    event_label: `${ctaType}_${location}`,
    cta_type: ctaType,
    cta_location: location,
  });
}

/**
 * スクロール深度のトラッキング
 * @param percentage - スクロール割合（25, 50, 75, 100）
 */
export function trackScrollDepth(percentage: number): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'scroll_depth', {
    event_category: 'Engagement',
    event_label: `${percentage}%`,
    value: percentage,
  });
}

/**
 * メニュー選択のトラッキング（シミュレーションセクション用）
 * @param concernId - 選択されたお悩みのID
 * @param concernLabel - 選択されたお悩みのラベル
 */
export function trackMenuSelection(
  concernId: string,
  concernLabel: string
): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'menu_selection', {
    event_category: 'Simulation',
    event_label: concernLabel,
    concern_id: concernId,
  });
}
