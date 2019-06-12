import { ProviderRegistration } from "oeq-cloudproviders/registration";

export const vendorId = "myvendor";

export function providerRegistration(): ProviderRegistration {
  return {
    name: "My Cloud Provider",
    description: "My sample cloud provider, including a wizard control",
    vendorId: vendorId,
    baseUrl: "http://localhost:5000/",
    iconUrl:
      "https://user-images.githubusercontent.com/4625498/55527161-8591ca80-56e3-11e9-8865-ca7c3bc5b7f2.gif",
    providerAuth: {
      clientId: "universityid",
      clientSecret: "universitysecret"
    },
    serviceUris: {
      oauth: {
        uri: "${baseurl}oauthtoken",
        authenticated: false
      },
      refresh: {
        uri: "${baseurl}refresh",
        authenticated: false
      },
      controls: {
        uri: "${baseurl}controls",
        authenticated: false
      },
      control_omdb: {
        uri: "${baseurl}omdb.js",
        authenticated: false
      }
    },
    viewers: {
      myattachment: {
        "": {
          name: "Default viewer",
          serviceId: "viewattachment"
        }
      }
    }
  };
}