import Cookies from 'js-cookie'

const LanguageKey = 'language'

/**
 * 获取语言
 * @returns language
 */
export function getLanguage(): string | undefined {
  return Cookies.get(LanguageKey)
}

/**
 * 设置语言
 * @returns language
 */
export function setLanguage(token: string): string | undefined {
  return Cookies.set(LanguageKey, token)
}

/**
 * 移除语言
 */
export function removeLanguage(): void {
  Cookies.remove(LanguageKey)
}
