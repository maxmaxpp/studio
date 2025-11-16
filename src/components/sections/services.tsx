import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { services } from '@/lib/data';

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">My Services</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80 mt-4">
            A range of professional services to meet your business needs.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="text-center flex flex-col items-center justify-center p-6 bg-background/80 shadow-lg hover:shadow-primary/20 transition-shadow duration-300 rounded-xl aspect-square border-none">
              <CardHeader className="p-0 mb-4">
                <div className="bg-primary/10 text-primary rounded-full p-4">
                  <service.icon className="h-10 w-10" strokeWidth={1.5}/>
                </div>
              </CardHeader>
              <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
