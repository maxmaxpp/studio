import { Briefcase } from 'lucide-react';

const workExperience = [
    {
        title: 'Sales Representative',
        dates: 'Oct 2024 - Jan 2025',
        description: 'In my previous work-from-home role, I gained valuable sales experience by persuading patients to secure insurance with us, effectively combining expertise in insurance, healthcare, and sales to meet their needs and ensure comprehensive coverage.',
    },
    {
        title: 'Billing & Sales Representative',
        dates: 'Nov 2023 - Apr 2024',
        description: "I was assigned to the sales/billing department, specifically handling AT&T account. It was my first experience in handling sales account. Though it wasn't for a long period, and only a total of 10 months, I still gained a lot of knowledge that helped me become more knowledgeable in sales and handling sales account.",
    },
    {
        title: 'Insurance Customer Service Representative',
        dates: 'Jan 2023 - Sept 2023',
        description: 'For the first few months, I worked in a collections/financial account, and then in the same company I was re-assigned to a car insurance account for the remaining months. Overall, I have a total of 1 year and 1 month of experience with this company.',
    },
    {
        title: 'Collection Specialist',
        dates: 'Aug 2022 - Dec 2022',
        description: '',
    },
];

export default function WorkExperience() {
  return (
    <section>
        <div className="text-center mb-12">
            <div className='flex justify-center items-center gap-4'>
                <Briefcase className="h-10 w-10 text-primary/70" strokeWidth={1.5} />
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground/80">Work Experience</h2>
            </div>
        </div>

        <div className="relative pl-6 md:pl-12">
            <div className="absolute left-6 md:left-12 top-0 bottom-0 w-0.5 bg-primary/20"></div>

            <div className="space-y-12">
            {workExperience.map((job, index) => (
                <div key={index} className="relative">
                    <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-primary/30 border-4 border-background"></div>
                    <div className="pl-8">
                        <h3 className="text-lg font-bold font-headline text-foreground/80">{job.title}: <span className="text-primary font-medium">{job.dates}</span></h3>
                        {job.description && (
                             <p className="mt-2 text-foreground/70">{job.description}</p>
                        )}
                    </div>
                </div>
            ))}
            </div>
      </div>
    </section>
  );
}
