export interface TencentTranslatorAPIConfig {
  SecretId: string;
  SecretKey: string;
  ProjectId: string;
}

export interface XunfeiTranslatorAPIConfig {
  api_key: string;
  apiSecret: string;
  app_id: string;
}

export interface CaiyunTranslatorAPIConfig {
  token: string;
}

export interface BaiduTranslatorConfig {
  gtk: string;
  cookie: string;
  UA: string;
  token: string;
}

export interface BaiduTranslatorAPIConfig {
  APPID: string;
  KEY: string;
  tts: boolean;
}

export interface BaiduPayload {
  from: string;
  to: string;
  query: string;
  transtype: string;
  simple_means_flag: number;
  sign: string;
  token: string;
  domain: string;
}

export interface NiutransAPIConfig {
  APIKEY: string;
}

export interface NiutransPayload {
  from: string; 
  to: string; 
  apikey: string; 
  dictNo?: string; 
  memoryNo?: string
}

export interface CacheIdentity {
  src: string;
  srcLang: string;
  destLang: string;
}

export interface Payload {
  success: boolean;
  level: TranslateLevel;
  src: string;
  dest: string;
  srcLang: string;
  destLang: string;
  provider: {
    uid: number;
    name: string;
  };
}

export interface FilterConfig {
  banPrefixs: string[]; // 前缀过滤
  banWords: string[]; // 词汇过滤
  apis: string[]; // 违禁词汇过滤api
  regs: string[]; // 正则表达式
  removeSpaceLangs: string[]; // 需要移除空格的语言
}

export interface FilterResult {
  type: FilterType; // 遇到日志原封不动转发，遇到违禁词block
  text: string;
}

export enum FilterType {
  "PROXY",
  "PASS",
  "BLOCK",
}

export enum TranslateLevel {
  "AI",
  "USER",
  "VERIFIED",
}
