import type { CreateEmailResponse } from "resend";

import { resend } from "..";
import { env } from "../../env";
import { SignUp } from "./template";

interface Props {
  email: string;
  token: string;
  city?: string;
  country?: string;
  ip?: string;
}

export function sendSignUp({
  email,
  token,
  city,
  country,
  ip,
}: Props): Promise<CreateEmailResponse> {
  return resend.emails.send({
    from: env.RESEND_FROM,
    to: email,
    subject: "Sign up for Ryuu",
    react: <SignUp token={token} city={city} country={country} ip={ip} />,
  });
}
