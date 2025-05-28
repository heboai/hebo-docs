// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "hebo-docs",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: input?.stage === "production" ? { cloudflare: "6.2.0" } : { aws: true },
    };
  },
  async run() {
    const domain = $app.stage === "production" 
      ? { name: "docs.hebo.ai", dns: sst.cloudflare.dns() }
      : undefined;
    new sst.aws.Nextjs("HeboDocs", {
      domain: domain,
    });
  },
});
