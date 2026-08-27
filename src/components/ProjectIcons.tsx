import type { ComponentType, SVGProps } from "react";
import type { ProjectIconName } from "@/lib/projects";

type IconProps = SVGProps<SVGSVGElement>;

const strokeBase = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  xmlns: "http://www.w3.org/2000/svg",
};

function CatIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <polygon points="6.5,9.5 9.5,9.5 6.7,3.2" />
      <polygon points="17.5,9.5 14.5,9.5 17.3,3.2" />
      <circle cx="12" cy="14" r="7" />
      <circle cx="9.4" cy="13.4" r="1.05" style={{ fill: "var(--c-bg)" }} />
      <circle cx="14.6" cy="13.4" r="1.05" style={{ fill: "var(--c-bg)" }} />
    </svg>
  );
}

function HeartIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 21c-4.8-3.2-8-6.9-8-10.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8 4.5C20 14.1 16.8 17.8 12 21Z" />
    </svg>
  );
}

function QuillIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4 20l1-4.4L14.6 6.3l3.6 3.6L8.9 19.2 4 20Z" />
      <path
        d="M13.2 7.7l3.6 3.6"
        style={{ stroke: "var(--c-bg)", strokeWidth: 1.4, strokeLinecap: "round" }}
        fill="none"
      />
      <path
        d="M4 20l3.4-1"
        style={{ stroke: "var(--c-bg)", strokeWidth: 1.1, strokeLinecap: "round" }}
        fill="none"
      />
    </svg>
  );
}

function SignalIcon(props: IconProps) {
  return (
    <svg {...strokeBase} {...props}>
      <circle cx="12" cy="18" r="1.3" fill="currentColor" stroke="none" />
      <path className="signal-arc signal-arc-1" d="M9 15.2a4.2 4.2 0 0 1 6 0" />
      <path className="signal-arc signal-arc-2" d="M6.3 12.4a7.8 7.8 0 0 1 11.4 0" />
      <path className="signal-arc signal-arc-3" d="M3.6 9.6a11.5 11.5 0 0 1 16.8 0" />
    </svg>
  );
}

function ScaleIcon(props: IconProps) {
  return (
    <svg {...strokeBase} {...props}>
      <path d="M12 4v16" />
      <path d="M7 20h10" />
      <path d="M4 7h16" />
      <path d="M4 7 6.4 12.2a2.6 2.6 0 0 1-4.8 0L4 7Z" />
      <path d="M20 7 17.6 12.2a2.6 2.6 0 0 0 4.8 0L20 7Z" />
    </svg>
  );
}

function StethoscopeIcon(props: IconProps) {
  return (
    <svg {...strokeBase} {...props}>
      <path d="M6 3v5.5a3.5 3.5 0 0 0 7 0V3" />
      <path d="M9.5 12.5V15a5 5 0 0 0 10 0v-2" />
      <circle cx="19.5" cy="17.5" r="1.7" />
    </svg>
  );
}

function ShieldIcon(props: IconProps) {
  return (
    <svg {...strokeBase} {...props}>
      <path d="M12 3 5 6v5c0 5 3 8.5 7 10 4-1.5 7-5 7-10V6l-7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function GraduationCapIcon(props: IconProps) {
  return (
    <svg {...strokeBase} {...props}>
      <path d="M12 4 2 9l10 5 10-5-10-5Z" />
      <path d="M6 11.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
      <path d="M22 9v6" />
    </svg>
  );
}

function PaperPlaneIcon(props: IconProps) {
  return (
    <svg {...strokeBase} {...props}>
      <path d="M21 3 3 10.5l7 2.5 2 7L21 3Z" />
      <path d="M10 13l4-4" />
    </svg>
  );
}

function TicketIcon(props: IconProps) {
  return (
    <svg {...strokeBase} {...props}>
      <path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Z" />
      <path d="M14 6v12" strokeDasharray="2 2" />
    </svg>
  );
}

function DinoIcon(props: IconProps) {
  return (
    <svg {...strokeBase} {...props}>
      <path d="M5 19v-4a2 2 0 0 1 2-2h1V9a4 4 0 0 1 4-4h3a3 3 0 0 1 3 3v1h1.5a1.5 1.5 0 0 1 0 3H18v3a4 4 0 0 1-4 4h-1v2" />
      <circle cx="16" cy="8" r=".55" fill="currentColor" stroke="none" />
      <path d="M9 19v2M13 19v2" />
    </svg>
  );
}

const ICONS: Record<
  ProjectIconName,
  { Icon: ComponentType<IconProps>; animationClass: string }
> = {
  cat: { Icon: CatIcon, animationClass: "icon-tilt" },
  heart: { Icon: HeartIcon, animationClass: "icon-pulse" },
  quill: { Icon: QuillIcon, animationClass: "icon-wiggle" },
  signal: { Icon: SignalIcon, animationClass: "" },
  scale: { Icon: ScaleIcon, animationClass: "icon-swing" },
  stethoscope: { Icon: StethoscopeIcon, animationClass: "icon-swing" },
  shield: { Icon: ShieldIcon, animationClass: "icon-pulse" },
  "graduation-cap": { Icon: GraduationCapIcon, animationClass: "icon-bounce" },
  "paper-plane": { Icon: PaperPlaneIcon, animationClass: "icon-drift" },
  ticket: { Icon: TicketIcon, animationClass: "icon-flicker" },
  dino: { Icon: DinoIcon, animationClass: "icon-bounce" },
};

export function ProjectIcon({ name }: { name: ProjectIconName }) {
  const { Icon, animationClass } = ICONS[name];
  return (
    <Icon
      className={`project-icon ${animationClass}`.trim()}
      width={20}
      height={20}
    />
  );
}
