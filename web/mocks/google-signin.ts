export const statusCodes = {
  SIGN_IN_CANCELLED: 'SIGN_IN_CANCELLED',
  IN_PROGRESS: 'IN_PROGRESS',
  PLAY_SERVICES_NOT_AVAILABLE: 'PLAY_SERVICES_NOT_AVAILABLE',
};

export const GoogleSignin = {
  configure: () => {},
  hasPlayServices: async () => true,
  signIn: async () => {
    const error = new Error('Google Sign-In is not available in the web preview build.');
    (error as Error & { code?: string }).code = statusCodes.PLAY_SERVICES_NOT_AVAILABLE;
    throw error;
  },
  signOut: async () => {},
  revokeAccess: async () => {},
};
