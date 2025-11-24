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
                            This website serves as a central hub for my professional services and creative portfolio. It's designed to give you a clear and comprehensive look at the skills and expertise I offer across various fields, including Data Entry, Social Media Management, Graphic Design, and Web Development.
                        </p>
                        <p>
                            The goal is to showcase the quality and versatility of my work, and to make it easy for potential clients to get in touch and start a conversation about their needs. Whether you're a startup looking to build a brand or an established business needing reliable support, this site is the first step toward our collaboration.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}
