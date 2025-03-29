import { StorageAdapter } from './storageAdapter';

export const LocalStorageAdapter: StorageAdapter = {
  async saveMessages(chatflowid: string, saveObj: { chatId?: string; [k: string]: any } = {}) {
    localStorage.setItem(`${chatflowid}_EXTERNAL`, JSON.stringify(saveObj));
  },

  async getMessages(chatflowid: string) {
    const chatDetails = localStorage.getItem(`${chatflowid}_EXTERNAL`);
    if (!chatDetails) return {};
    try {
      return JSON.parse(chatDetails);
    } catch (e) {
      return {};
    }
  },

  async removeMessages(chatflowid: string, chatId: string): Promise<void> {
    localStorage.removeItem(`${chatflowid}_EXTERNAL`);
  },
};
