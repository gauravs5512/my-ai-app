const conversation = new Map<string, string>();

export const converationRepository = {
  getLastResponseId(conversationId: string) {
    return conversation.get(conversationId) || undefined;
  },

  setLastResponseId(conversationId: string, responseId: string) {
    conversation.set(conversationId, responseId);
  },
};
