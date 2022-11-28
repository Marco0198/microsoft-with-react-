export const msalConfig = {
  auth: {
    clientId: "c0ff54a0-2dc5-42b2-8e6d-45bf9f72c08b",
    authority:
      "https://login.microsoftonline.com/cc6148eb-d356-4f38-900f-3a4d62b954c8", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com",
};
