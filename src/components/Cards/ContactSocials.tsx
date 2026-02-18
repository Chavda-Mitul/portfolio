import Link from "next/link";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

import { selfData } from "@/constant";

export const ContactSocials = () => {
  const socialLinks = [
    {
      Icon: FaGithub,
      link: selfData.socials_username.github ? `https://github.com/${selfData.socials_username.github}` : "#",
      initial: -10,
      label: "GitHub",
    },
    {
      Icon: FaLinkedinIn,
      link: selfData.socials_username.linkedin ? `https://www.linkedin.com/in/${selfData.socials_username.linkedin}` : "#",
      initial: 10,
      label: "LinkedIn",
    },
    {
      Icon: FaTwitter,
      link: selfData.socials_username.twitter ? `https://twitter.com/${selfData.socials_username.twitter}` : "#",
      initial: -10,
      label: "Twitter",
    },
  ];

  return (
    <ul className="flex mt-12 space-x-4">
      {socialLinks.map((social, index) => (
        <ContactSocialItem
          key={index}
          Icon={social.Icon}
          link={social.link}
          initial={social.initial}
          label={social.label}
        />
      ))}
    </ul>
  );
};

const ContactSocialItem = ({
  Icon,
  link,
  initial,
  label,
}: {
  Icon: IconType;
  link: string;
  initial: number;
  label: string;
}) => {
  return (
    <motion.li
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: initial }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      whileHover={{
        scale: 1.1,
      }}
      className="bg-purple-700 text-slate-300 hover:bg-slate-400 hover:text-purple-700 h-10 w-10 rounded-full flex items-center justify-center shrink-0"
      title={label}
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <Icon className="text-slate-300 hover:text-purple-700 w-6 h-6" />
      </Link>
    </motion.li>
  );
};
