import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const ConnectWithMeProps = {
  githubUrl: "https://github.com/Hard-patel",
  twitterUrl: "https://x.com/Hardpatel2602",
  linkedinUrl: "https://www.linkedin.com/in/hard-patel-b0b508215/",
  instagramUrl: "https://www.instagram.com/hardpatel2626/",
};

export function ConnectWithMe() {
  return (
    <div className="flex items-center space-x-4 sm:space-x-12 md:space-x-16 mt-8 sm:mt-20 md:mt-28 justify-center">
      <a
        href={ConnectWithMeProps.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="p-3 bg-muted hover:bg-foreground/10 rounded-full"
      >
        <Github className="w-5 h-5 text-gray-700" />
      </a>

      <a
        href={ConnectWithMeProps.twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="p-3 bg-muted hover:bg-foreground/10 rounded-full"
      >
        <Twitter className="w-5 h-5 text-blue-500 " />
      </a>

      <a
        href={ConnectWithMeProps.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="p-3 bg-muted hover:bg-foreground/10 rounded-full"
      >
        <Linkedin className="w-5 h-5 text-blue-600 " />
      </a>

      <a
        href={ConnectWithMeProps.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="p-3 bg-muted hover:bg-foreground/10 rounded-full"
      >
        <Instagram className="w-5 h-5 text-pink-500" />
      </a>
    </div>
  );
}
