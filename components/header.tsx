"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton, useClerk, SignInButton } from "@clerk/nextjs";
import { useState } from "react";

export default function Header() {
  const [showEscrowForm, setShowEscrowForm] = useState(false);
  const { openSignIn } = useClerk(); // Use useClerk for programmatic sign-in
  const router = useRouter();

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          TrustBridge
        </Link>

        <div className="flex space-x-4">
          {/* Projects button - Always visible */}
          <Button onClick={() => router.push("/projects")}>
        Projects
      </Button>
  <SignedOut>
    {/* Custom button for signing in as a freelancer */}
    <Button onClick={() => openSignIn({})}>
      Sign in as Freelancer
    </Button>
  </SignedOut>

  <SignedOut>
    {/* Custom button for signing in as a company */}
    <Button onClick={() => openSignIn({})}>
      Sign in as Company
    </Button>
  </SignedOut>

  <SignedOut>
    {/* SignInButton without hydration error */}
    <SignInButton mode="modal" />
  </SignedOut>

  <SignedIn>
    {/* Escrow button */}
    <Button onClick={() => setShowEscrowForm(!showEscrowForm)}>
      Escrow
    </Button>
    <UserButton />
  </SignedIn>

  
</div>

        {showEscrowForm && (
          <div className="absolute right-4 top-16 mt-2 w-64 rounded-md bg-white shadow-lg">
            <div className="p-4">
              <form
                action="https://www.escrow.com/checkout"
                method="post"
                target="_blank"
              >
                <input type="hidden" name="type" value="domain_name" />
                <input
                  type="hidden"
                  name="non_initiator_email"
                  value="keshavpromotionandbranding@gmail.com"
                />
                <input type="hidden" name="non_initiator_id" value="3540551" />
                <input
                  type="hidden"
                  name="non_initiator_role"
                  value="seller"
                />
                <input type="hidden" name="title" value="TrustBridge" />
                <input type="hidden" name="currency" value="USD" />
                <input
                  type="hidden"
                  name="domain"
                  value="https://congenial-space-orbit-4jg449wj96j5fq5pw-3000.app.github.dev/"
                />
                <input type="hidden" name="price" value="10" />
                <input type="hidden" name="concierge" value="false" />
                <input type="hidden" name="with_content" value="false" />
                <input type="hidden" name="inspection_period" value="1" />
                <input type="hidden" name="fee_payer" value="seller" />
                <input
                  type="hidden"
                  name="return_url"
                  value="https://congenial-space-orbit-4jg449wj96j5fq5pw-3000.app.github.dev/getting-started"
                />
                <input type="hidden" name="button_types" value="both" />
                <input type="hidden" name="auto_accept" value="1000" />
                <input type="hidden" name="auto_reject" value="1000" />
                <input type="hidden" name="item_key" value="trust" />
                <button
                  className="EscrowButtonSecondary"
                  type="submit"
                  style={{
                    backgroundImage:
                      "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAALCAMAAABGfiMeAAAAjVBMVEUAAAA8ul08ul48ul08ul08ul9CwGE/vGFHv2lT2Hs8ul08ul49ul09u188ul09ul09ul08ul09ul49ul49u149ul48ul4+u18+u2A9uV09ul49ul5Av2FCvWE8uV09ul49ul49u149u18+vGA/wGM8ul48ul48ul48ul49ul49u18/vWE8uV09ul88uV1RkItgAAAALnRSTlMA+/fz1m4RKwwF4cWUV+vbzLGBU0qlnj01rI16HRq6uGdNYDAV5tC/tYdEI5p0k6hGXAAAAi1JREFUOMuFktuSojAURXcCIheROypIt8hV2t7//3lzwjjVXc7Ysx5SVA45K8kO3ld2QFP6eog74BIp7Zdo34T7FoBbj1ZUnpEzBjBQfv6g5UHoksiPCwDhexSkLnAYSghuFOHfUO2FCQjkY7HDhbQ0bWxo0CKcSansG1cpB1tKDVfOgGgt+r6lgVRm94w9tFQ9TF298tlYaWi7QO9h5AI4W/HNbfbGQgxDBzfhDTFbsx32KPkJGM3VLAUs/wyvYIiQayUgvZ99Dsf1D0/tYRDfDuIakYkTOHBGxQoFY2bweYSQ0IHhzBLAkSmuZGSWkc4Lnx8KLjDSrs/Ga3/5xPWO7NHsbQ1w0CF350d8gcbDd4ex3HChxQMqGZsXvpUPyWIkRdF/+fxk1rx+8zlKHTnJjq6yjdVnPfs2rFh4ez/hx6vz5YILoast5t/OZ0jxzYeYicyMMta/ferZVzOM9YZ1we3P+T0cNbT15ztZbNO35QnAwgSoSB6wW0fD6ZFS/4g4Rcr2QqWaO4//8WWd5xa8IODV6bfLmt9WqyMa6hbnialRU3vIaOJbdg1q8xjdDhiso3nCGSoursUEOx5e5aeFAI5FRe576WawVx8ujFxUNCXfARxyMqcxd2szRbOn0lRASA6ak7d62s0WN+Zo6s/8L+tppYK7mfyoNCHnUxQFN+SnK4D0lEm3WSYcCFURAtiZ8RJ0wPkexHNl4i2DZOMBaWxaSDUW03LIn2/1F/O5RSAdFTG2AAAAAElFTkSuQmCC)",
                    backgroundColor: "#f0f2f5",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 13px",
                    borderRadius: "4px",
                    border: "1px solid rgba(0, 0, 0, .05)",
                    boxShadow: "0 2px 4px 0 hsla(0, 12%, 54%, .1)",
                    color: "#555",
                    cursor: "pointer",
                    display: "inline-block",
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "14px",
                    fontWeight: "600",
                    letterSpacing: ".4px",
                    lineHeight: "1.2",
                    minHeight: "40px",
                    padding: "8px 118px 8px 21px",
                    textAlign: "left",
                    textDecoration: "none",
                    textShadow: "none",
                    textTransform: "none",
                    transition: "all .1s linear",
                    verticalAlign: "middle",
                  }}
                >
                  Here Is your payout
                </button>
                <img
                  src="https://t.escrow.com/1px.gif?name=bin&price=10&title=TrustBridge&user_id=3540551"
                  style={{ display: "none" }}
                />
              </form>

              <form
                action="https://www.escrow.com/offer"
                method="post"
                target="_blank"
              >
                <input type="hidden" name="type" value="domain_name" />
                <input
                  type="hidden"
                  name="non_initiator_email"
                  value="keshavpromotionandbranding@gmail.com"
                />
                <input type="hidden" name="non_initiator_id" value="3540551" />
                <input
                  type="hidden"
                  name="non_initiator_role"
                  value="seller"
                />
                <input type="hidden" name="title" value="TrustBridge" />
                <input type="hidden" name="currency" value="USD" />
                <input
                  type="hidden"
                  name="domain"
                  value="https://congenial-space-orbit-4jg449wj96j5fq5pw-3000.app.github.dev/"
                />
                <input type="hidden" name="price" value="10" />
                <input type="hidden" name="concierge" value="false" />
                <input type="hidden" name="with_content" value="false" />
                <input type="hidden" name="inspection_period" value="1" />
                <input type="hidden" name="fee_payer" value="seller" />
                <input
                  type="hidden"
                  name="return_url"
                  value="https://congenial-space-orbit-4jg449wj96j5fq5pw-3000.app.github.dev/getting-started"
                />
                <input type="hidden" name="button_types" value="both" />
                <input type="hidden" name="auto_accept" value="1000" />
                <input type="hidden" name="auto_reject" value="1000" />
                <input type="hidden" name="item_key" value="trust" />
                <button
                  className="EscrowButtonSecondary"
                  type="submit"
                  style={{
                    backgroundImage:
                      "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAALCAMAAABGfiMeAAAAjVBMVEUAAAA8ul08ul48ul08ul08ul9CwGE/vGFHv2lT2Hs8ul08ul49ul09u188ul09ul09ul08ul09ul49ul49u149ul48ul4+u18+u2A9uV09ul49ul5Av2FCvWE8uV09ul49ul49u149u18+vGA/wGM8ul48ul48ul48ul49ul49u18/vWE8uV09ul88uV1RkItgAAAALnRSTlMA+/fz1m4RKwwF4cWUV+vbzLGBU0qlnj01rI16HRq6uGdNYDAV5tC/tYdEI5p0k6hGXAAAAi1JREFUOMuFktuSojAURXcCIheROypIt8hV2t7//3lzwjjVXc7Ysx5SVA45K8kO3ld2QFP6eog74BIp7Zdo34T7FoBbj1ZUnpEzBjBQfv6g5UHoksiPCwDhexSkLnAYSghuFOHfUO2FCQjkY7HDhbQ0bWxo0CKcSansG1cpB1tKDVfOgGgt+r6lgVRm94w9tFQ9TF298tlYaWi7QO9h5AI4W/HNbfbGQgxDBzfhDTFbsx32KPkJGM3VLAUs/wyvYIiQayUgvZ99Dsf1D0/tYRDfDuIakYkTOHBGxQoFY2bweYSQ0IHhzBLAkSmuZGSWkc4Lnx8KLjDSrs/Ga3/5xPWO7NHsbQ1w0CF350d8gcbDd4ex3HChxQMqGZsXvpUPyWIkRdF/+fxk1rx+8zlKHTnJjq6yjdVnPfs2rFh4ez/hx6vz5YILoast5t/OZ0jxzYeYicyMMta/ferZVzOM9YZ1we3P+T0cNbT15ztZbNO35QnAwgSoSB6wW0fD6ZFS/4g4Rcr2QqWaO4//8WWd5xa8IODV6bfLmt9WqyMa6hbnialRU3vIaOJbdg1q8xjdDhiso3nCGSoursUEOx5e5aeFAI5FRe576WawVx8ujFxUNCXfARxyMqcxd2szRbOn0lRASA6ak7d62s0WN+Zo6s/8L+tppYK7mfyoNCHnUxQFN+SnK4D0lEm3WSYcCFURAtiZ8RJ0wPkexHNl4i2DZOMBaWxaSDUW03LIn2/1F/O5RSAdFTG2AAAAAElFTkSuQmCC)",
                    backgroundColor: "#f0f2f5",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 13px",
                    borderRadius: "4px",
                    border: "1px solid rgba(0, 0, 0, .05)",
                    boxShadow: "0 2px 4px 0 hsla(0, 12%, 54%, .1)",
                    color: "#555",
                    cursor: "pointer",
                    display: "inline-block",
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "14px",
                    fontWeight: "600",
                    letterSpacing: ".4px",
                    lineHeight: "1.2",
                    minHeight: "40px",
                    padding: "8px 118px 8px 21px",
                    textAlign: "left",
                    textDecoration: "none",
                    textShadow: "none",
                    textTransform: "none",
                    transition: "all .1s linear",
                    verticalAlign: "middle",
                  }}
                >
                  Offer your price
                </button>
                <img
                  src="https://t.escrow.com/1px.gif?name=bin&price=10&title=TrustBridge&user_id=3540551"
                  style={{ display: "none" }}
                />
              </form>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
