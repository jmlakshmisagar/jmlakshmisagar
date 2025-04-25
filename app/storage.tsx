'use client';

export const STORAGE_KEYS = {
  VISITED_LINKS: 'visited_links',
  THEME: 'theme_preference',
  LAST_SECTION: 'last_section',
  CACHE_VERSION: 'cache_version',
  OFFLINE_DATA: 'offline_data'
};

class Storage {
  static isAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  static set(key: string, value: any): void {
    if (!this.isAvailable()) {
      this.fallbackStorage.set(key, value);
      return;
    }
    
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
      this.broadcastChange(key, serializedValue);
    } catch (error) {
      console.error('Storage set error:', error);
      this.fallbackStorage.set(key, value);
    }
  }

  static get(key: string): any {
    if (!this.isAvailable()) {
      return this.fallbackStorage.get(key);
    }
    
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Storage get error:', error);
      return this.fallbackStorage.get(key);
    }
  }

  static remove(key: string): void {
    if (!this.isAvailable()) {
      this.fallbackStorage.delete(key);
      return;
    }
    
    try {
      localStorage.removeItem(key);
      this.broadcastChange(key, null);
    } catch (error) {
      console.error('Storage remove error:', error);
    }
  }

  static clear(): void {
    if (!this.isAvailable()) {
      this.fallbackStorage.clear();
      return;
    }
    
    try {
      localStorage.clear();
      this.broadcastChange('clear', null);
    } catch (error) {
      console.error('Storage clear error:', error);
    }
  }

  private static fallbackStorage = new Map<string, any>();

  private static broadcastChange(key: string, value: string | null): void {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new StorageEvent('storage', {
        key,
        newValue: value
      }));
    }
  }
}

export default Storage;