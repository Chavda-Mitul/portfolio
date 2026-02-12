import { selfData, skillsData } from "@/constant";

export function generatePersonStructuredData() {
  const skills = skillsData.flatMap((category) =>
    category.data.map((skill) => skill.title)
  );

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: selfData.name,
    givenName: selfData.first_name,
    familyName: selfData.last_name,
    jobTitle: selfData.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: selfData.workFor,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Charusat University",
    },
    email: selfData.email,
    telephone: selfData.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: selfData.current_location.city,
      addressRegion: selfData.current_location.state,
      addressCountry: selfData.current_location.country,
    },
    sameAs: [
      selfData.socials_username.github ? `https://github.com/${selfData.socials_username.github}` : "",
      selfData.socials_username.linkedin ? `https://linkedin.com/in/${selfData.socials_username.linkedin}` : "",
      selfData.socials_username.twitter ? `https://twitter.com/${selfData.socials_username.twitter}` : "",
    ].filter(Boolean),
    url: "https://your-portfolio-url.vercel.app",
    description: selfData.bio,
    knowsAbout: skills,
  };
}

export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mitul Chavda - Portfolio",
    url: "https://your-portfolio-url.vercel.app",
    description:
      "Mitul Chavda's portfolio featuring scalable web applications, real-time systems, and full-stack development projects",
    author: {
      "@type": "Person",
      name: selfData.name,
    },
    publisher: {
      "@type": "Person",
      name: selfData.name,
    },
    inLanguage: "en-US",
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      "@type": "Person",
      name: selfData.name,
    },
  };
}

export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: selfData.name,
    url: "https://your-portfolio-url.vercel.app",
    logo: "https://your-portfolio-url.vercel.app/images/logo.png",
    description: selfData.bio,
    founder: {
      "@type": "Person",
      name: selfData.name,
    },
    sameAs: [
      selfData.socials_username.github ? `https://github.com/${selfData.socials_username.github}` : "",
      selfData.socials_username.linkedin ? `https://linkedin.com/in/${selfData.socials_username.linkedin}` : "",
      selfData.socials_username.twitter ? `https://twitter.com/${selfData.socials_username.twitter}` : "",
    ].filter(Boolean),
  };
}

export function generateResumeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: "Mitul Chavda Resume",
    description:
      "Professional resume of Mitul Chavda - Full-Stack Software Engineer specializing in React, Next.js, TypeScript, Node.js, and PostgreSQL",
    url: "https://your-portfolio-url.vercel.app/resume",
    author: {
      "@type": "Person",
      name: selfData.name,
      email: selfData.email,
      telephone: selfData.phone,
      jobTitle: selfData.jobTitle,
      worksFor: {
        "@type": "Organization",
        name: selfData.workFor,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: selfData.current_location.city,
        addressRegion: selfData.current_location.state,
        addressCountry: selfData.current_location.country,
      },
      sameAs: [
        selfData.socials_username.github ? `https://github.com/${selfData.socials_username.github}` : "",
        selfData.socials_username.linkedin ? `https://linkedin.com/in/${selfData.socials_username.linkedin}` : "",
      ].filter(Boolean),
    },
    dateModified: new Date().toISOString(),
    fileFormat: "application/pdf",
    contentUrl: "https://your-portfolio-url.vercel.app/docs/Resume.pdf",
    downloadUrl: "https://your-portfolio-url.vercel.app/docs/Resume.pdf",
    keywords: [
      "Full-Stack Software Engineer",
      "React Developer",
      "Next.js Developer",
      "TypeScript Developer",
      "Node.js Developer",
      "PostgreSQL Developer",
      "WebSockets",
      "Real-Time Systems",
      "Charusat University",
      "Ahmedabad",
      "India",
    ],
  };
}
