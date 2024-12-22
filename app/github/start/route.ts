import { redirect } from "next/navigation";

export async function GET() {
    console.log("get!");
    const baseURL = "https://github.com/login/oauth/authorize";
    const params = {
        client_id: process.env.GITHUB_CLIENT_ID!,
        scope: "read:user",
        allow_signup: "false",
    };
    const formattedParams = new URLSearchParams(params).toString();
    const finalUrl = `${baseURL}?${formattedParams}`;
    console.log(finalUrl);
    return redirect(finalUrl);
}
