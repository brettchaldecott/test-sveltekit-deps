import type {RequestEvent} from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export async function authHandler ({
    request,
    params,
    url: originURL,
  }: RequestEvent) {
    /*const options = parseSearchParamsToObject(originURL.search);
    console.log("Fred");
    let url: URL | null = null;
    switch (params.kindeAuth) {
      case "login":
        storePostLoginRedirectUrl(options);
        let kindelogin = await kindeAuthClient.login(
          request as unknown as SessionManager,
          options,
        );
        url = kindelogin.href;
        console.log("Login");
        break;
      case "health":
        if (!kindeConfiguration.debug) {
          url = new URL(kindeConfiguration.loginRedirectURL);
          break;
        }
        return new Response(
          JSON.stringify({
            authDomain: kindeConfiguration.authDomain || "",
            clientId: kindeConfiguration.clientId || "",
            logoutRedirectURL: kindeConfiguration.logoutRedirectURL || "",
            redirectURL: kindeConfiguration.redirectURL || "",
            audience: kindeConfiguration.audience || "",
            scope: kindeConfiguration.scope || "",
            // deepcode ignore HardcodedNonCryptoSecret: <this is read from env var vand validated here>
            clientSecret: validateClientSecret(
              kindeConfiguration.clientSecret || "",
            )
              ? "Set correctly"
              : "Not set correctly",
            loginRedirectURL: kindeConfiguration.loginRedirectURL || "",
            authUsePKCE: kindeConfiguration.authUsePKCE,
            version: version,
            framework: "sveltekit",
          }),
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          },
        );
      case "register":
        storePostLoginRedirectUrl(options);
        url = await kindeAuthClient.register(
          request as unknown as SessionManager,
          options,
        );
        console.log("Register");
        break;
      case "create_org":
        url = await kindeAuthClient.createOrg(
          request as unknown as SessionManager,
          options,
        );
        break;
      case "kinde_callback":
        await kindeAuthClient.handleRedirectToApp(
          request as unknown as SessionManager,
          new URL(request.url),
        );
        redirectToPostLoginUrl();
        throw redirect(302, kindeConfiguration.loginRedirectURL ?? "/");
      case "logout":
        url = await kindeAuthClient.logout(request as unknown as SessionManager);
        break;
      default:
        throw error(404, "Not Found");
    }
    console.log("Direct : ",url);*/
    return redirect(
      // @ts-ignore
      302,
      "/test_stuff/"
    );
  }