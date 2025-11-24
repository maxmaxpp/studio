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
                            "Heymaxx" is a playful and memorable name derived from my nickname. It represents a friendly, approachable, and creative spirit. The name is a conversation starter, embodying the collaborative and personal approach I bring to every project.
                        </p>
                        <p>
                            The ".site" domain is a modern and straightforward choice, reflecting the focus on providing dedicated online solutions and a strong web presence for my clients.
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
