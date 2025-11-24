import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-8 text-center">About Heymaxx.site</h1>
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">What does "Heymaxx" mean?</CardTitle>
                    </CardHeader>
                    <CardContent className="text-lg text-foreground/80 space-y-4">
                        <p>
                            HeyMaxx is rooted in a simple idea: delivering maximum value.
                        </p>
                        <p>
                            The word “Maxx” represents the standard I set for myself—always going beyond the basics, always giving more than what is expected, and always showing up with my best work.
                        </p>
                        <p>
                            I chose the name heymaxx.site because it reflects how I approach everything I do as a Creative VA:
                            I aim for maximum clarity, maximum quality, and maximum care in every project.
                            It’s a reminder that whenever someone visits my space, they’re greeted with work that’s thoughtful, intentional, and done with full effort.
                        </p>
                        <p>
                            At its core, HeyMaxx means:
                        </p>
                        <p>    
                            “Hey, welcome in—here’s where you get my maximum.”
                        </p>
                        <p>
                            It’s simple, memorable, and fully aligned with the kind of work ethic and creativity I bring to every client and project.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">The Purpose of This Website</CardTitle>
                    </CardHeader>
                    <CardContent className="text-lg text-foreground/80 space-y-4">
                        <p>
                            This website serves as my creative portfolio and digital workspace, built to showcase the skills, projects, and services I offer as a Creative Virtual Assistant. Everything here is designed to give a clear, honest, and organized look into how I work—my process, my style, and the kind of value I bring to clients.
                        </p>
                        <p>
                            It also acts as a space where I can grow, improve, and document my journey. Whether it’s building systems in Notion, creating digital assets, or exploring new tools, this site reflects both my progress and my passion for learning.
                        </p>
                        <p>
                            Most of all, the purpose of this website is simple:
                            to give you a straightforward, transparent view of what I can do—done with intention, creativity, and my best effort.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}
