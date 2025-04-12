import { observersConfigType } from './components/Bot';
import { BubbleTheme } from './features/bubble/types';
import { StorageAdapter } from './utils/storage/storageAdapter';

/* eslint-disable solid/reactivity */
type BotProps = {
  chatflowid: string;
  apiHost?: string;
  onRequest?: (request: RequestInit) => Promise<void>;
  chatid?: string;
  storageAdapter?: StorageAdapter;
  chatflowConfig?: Record<string, unknown>;
  observersConfig?: observersConfigType;
  theme?: BubbleTheme;
};

let elementUsed: Element | undefined;

export const initFull = (props: BotProps & { id?: string }) => {
  destroy();
  const fullElement = props.id ? document.getElementById(props.id) : document.querySelector('flowise-fullchatbot');
  if (!fullElement) throw new Error('<flowise-fullchatbot> element not found.');
  Object.assign(fullElement, props);
  elementUsed = fullElement;
};

export const init = (props: BotProps) => {
  destroy();
  const element = document.createElement('flowise-chatbot');
  Object.assign(element, props);
  document.body.appendChild(element);
  elementUsed = element;
};

export const destroy = () => {
  elementUsed?.remove();
};

// Function to send a message programmatically
export const sendMessage = (text: string, files?: File[]) => {
  // Prefer the element associated with the last init, fallback to querySelector
  const element = elementUsed ?? document.querySelector('flowise-fullchatbot, flowise-chatbot');
  if (!element) {
    console.error('Flowise chatbot element not found. Make sure the chatbot is initialized before sending messages.');
    return;
  }

  // Set the property on the custom element.
  // The component's createEffect will handle this.
  try {
    // Use 'any' to bypass strict type checking for the custom element property
    (element as any).externalCommand = { text, files: files || [], timestamp: Date.now() };
  } catch (error) {
    console.error('Failed to set externalCommand property on the chatbot element:', error);
  }
};

type Chatbot = {
  initFull: typeof initFull;
  init: typeof init;
  destroy: typeof destroy;
  sendMessage: typeof sendMessage; // Add the new method type
};

declare const window:
  | {
      Chatbot: Chatbot | undefined;
    }
  | undefined;

export const parseChatbot = (): Chatbot => ({
  // Ensure return type matches Chatbot type
  initFull,
  init,
  destroy,
  sendMessage, // Include the new method
});

export const injectChatbotInWindow = (bot: Chatbot) => {
  if (typeof window === 'undefined') return;
  window.Chatbot = { ...bot };
};
