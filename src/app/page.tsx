import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { ProjectCard } from '@/components/project-card';
import { ResumeCard } from '@/components/resume-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { DATA } from '@/data/resume';
import { getImagePath } from '@/lib/utils';
import Link from 'next/link';
import Markdown from 'react-markdown';

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(' ')[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage
                  alt={DATA.name}
                  src={getImagePath(DATA.avatarUrl)}
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">關於我</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">工作經歷</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={getImagePath(work.logoUrl)}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? 'Present'}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">學歷</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={getImagePath(education.logoUrl)}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">技能</h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold">Frontend</h3>
                <div className="flex flex-wrap gap-1">
                  {DATA.skills.frontend.map((skill, id) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold">Backend</h3>
                <div className="flex flex-wrap gap-1">
                  {DATA.skills.backend.map((skill, id) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold">Database</h3>
                <div className="flex flex-wrap gap-1">
                  {DATA.skills.database.map((skill, id) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold">DevOps & Tools</h3>
                <div className="flex flex-wrap gap-1">
                  {DATA.skills.devops.map((skill, id) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  瀏覽我的作品
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  我的專案包含Web和Mobile APP。
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  isYoutubeVideo={project.isYoutubeVideo}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="devs">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  In Development
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  開發中的應用
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  以下是我目前在開發的應用。
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.devs.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  isYoutubeVideo={project.isYoutubeVideo}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={getImagePath(project.image)}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                聯絡我
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                想跟我聯繫嗎？只要發送一條訊息至我的
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                >
                  {` LinkedIn `}
                </Link>
                或
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="text-blue-500 hover:underline"
                >
                  {` ${DATA.contact.email} `}
                </Link>
                我就會回應。請不要發送任何廣告或不雅訊息。
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
