import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

import NavBar from "@/components/navbar/NavBar";
import StarsCanvas from "@/components/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://hardik-dev.tech/"),
    title: "Hardik Bhammar - Aspiring Software Engineer | Full Stack Developer",
    description:
        "Aspiring Software Engineer currently pursuing B.E with a passion for AI, machine learning, and full-stack development. Experienced in developing AI-powered applications, enhancing network management operations, and creating scalable web solutions. Proficient in React, Node.js, and natural language processing.",
    keywords: [
        "Bhammar",
        "Hardik",
        "Hardik Bhammar",
        "Aspiring Software Engineer",
        "AI Enthusiast",
        "Machine Learning",
        "B.Tech Student",
        "GECGN",
        "ECE",
        "ZeroTOHero",
        "DSA",
        "Engineering",
        "Full Stack Developer",
        "AI-powered applications",
        "React Developer",
        "Node.js Developer",
        "NLP",
        "Natural Language Processing",
        "Portfolio",
        "JavaScript Developer",
        "Python Developer",
        "Software Intern",
        "Frontend Developer",
        "Backend Developer",
        "Web Developer",
        "Tech Enthusiast",
    ],
    openGraph: {
        title: "Hardik Bhammar - Aspiring Software Engineer | Full Stack Developer",
        description:
            "Aspiring Software Engineer currently pursuing B.E with a passion for AI, machine learning, and full-stack development. Experienced in developing AI-powered applications, enhancing network management operations, and creating scalable web solutions. Proficient in React, Node.js, and natural language processing. Notable projects include BuyerEdage, SocialPeida, and StudySync.",
        images: "/hdk.png",
    },
    alternates: {
        canonical: "https://hardik-dev.tech",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <meta
                name='google-site-verification'
                content='tTPhKz96r1hhQLemKLlEmTQQXJHoUJ-QnKs5bjCnUNU'
            />
            <body
                className={`${inter.className} bg-[var(--bgColor)] overflow-y-scroll overflow-x-hidden`}
            >
                <NavBar />
                <StarsCanvas />
                {children}
            </body>
        </html>
    );
}
