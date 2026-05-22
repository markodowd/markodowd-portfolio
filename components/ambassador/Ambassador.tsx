import Image from "next/image";

export default function Ambassador() {
  return (
    <section
      id="ambassador"
      className="relative px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Zero To Mastery Ambassador</h2>
          <h3 className="mt-4 text-xl font-medium text-muted-foreground">Curious where I learned my skills?</h3>
          <p className="mt-6 text-muted-foreground">
            In 2018, I began my software development journey with{" "}
            <a
              href="https://academy.zerotomastery.io/a/aff_fvgz1fnn/external?affcode=441520_4gefpkxw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              Zero To Mastery
            </a>{" "}
            (ZTM). Over the years, the platform has been a cornerstone of my continuous learning, allowing me to constantly stack new skills across a wide variety of tech fields. Today, I&apos;m still deeply active in the ZTM community, where I&apos;ve been recognized as a <strong>Star Mentor</strong> for leadership and helping others grow.
          </p>
          <p className="mt-4 text-muted-foreground">
            As an official ZTM Ambassador, I&apos;m proud to advocate for a platform that genuinely works. My own career is proof of that. If you are looking to start or level up your own development journey, you can use any of the <strong>affiliate links</strong> below to join the Academy. I&apos;ll earn a commission at no extra cost to you, and I look forward to seeing you inside the community!
          </p>
        </div>
        <div className="mt-10">
          <h4 className="text-lg font-semibold text-center mb-4">Some of my favourite courses</h4>
          <ul className="flex flex-col items-center gap-2">
            <li>
              <a
                href="https://academy.zerotomastery.io/a/aff_r1613hhr/external?affcode=441520_4gefpkxw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                Complete Web Developer
              </a>
            </li>
            <li>
              <a
                href="https://academy.zerotomastery.io/a/aff_565yhxdn/external?affcode=441520_4gefpkxw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                Complete React Developer
              </a>
            </li>
            <li>
              <a
                href="https://academy.zerotomastery.io/a/aff_1f8vmvjz/external?affcode=441520_4gefpkxw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                AWS Certified Cloud Practitioner
              </a>
            </li>
            <li>
              <a
                href="https://academy.zerotomastery.io/a/aff_1j06tgpy/external?affcode=441520_4gefpkxw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                AWS Certified Solutions Architect
              </a>
            </li>
            <li>
              <a
                href="https://academy.zerotomastery.io/a/aff_glpct39t/external?affcode=441520_4gefpkxw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                DevOps Bootcamp: Learn Linux & Become a Linux Sysadmin
              </a>
            </li>
            <li>
              <a
                href="https://academy.zerotomastery.io/a/aff_jv545jzd/external?affcode=441520_4gefpkxw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                Rust Programming: The Complete Developer&apos;s Guide
              </a>
            </li>
          </ul>
        </div>
        <a
          href="https://academy.zerotomastery.io/a/aff_fvgz1fnn/external?affcode=441520_4gefpkxw"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 block w-full overflow-hidden rounded-xl"
        >
          <Image
            src="/images/ambassador/ztm.webp"
            alt="Zero To Mastery Academy"
            width={1456}
            height={816}
            className="w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </a>
      </div>
    </section>
  );
}
