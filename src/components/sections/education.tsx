import { GraduationCap } from 'lucide-react';

const educationHistory = [
    {
        level: 'Elementary School',
        schools: [
            { name: 'Dau Elementary School', years: '2009-2015' },
        ],
    },
    {
        level: 'Junior High School',
        schools: [
            { name: 'Jocson College', years: '2015-2018' },
            { name: 'Pampanga High School', years: '2019-2020' },
        ],
    },
    {
        level: 'Senior High School',
        schools: [
            { name: 'Pampanga High School', years: '2020-2022' },
        ],
    },
];

const BentArrow = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2 h-5 w-5 text-accent/80">
        <path d="M10 4C10 4 10 10.0001 16 10.0001C22 10.0001 22 4 22 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 7L16 10L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export default function Education() {
  return (
    <section>
        <div className="text-center mb-12">
            <div className='flex justify-center items-center gap-4'>
                <GraduationCap className="h-10 w-10 text-primary/70" strokeWidth={1.5} />
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground/80">Education</h2>
            </div>
        </div>

        <div className="space-y-8">
            {educationHistory.map((edu, index) => (
                <div key={index}>
                    <h3 className="flex items-center text-lg font-bold font-headline text-foreground/80 mb-2">
                        <span className="w-2 h-2 bg-primary/50 rounded-full mr-3"></span>
                        {edu.level}
                    </h3>
                    <div className="pl-5 space-y-1">
                        {edu.schools.map((school, sIndex) => (
                             <p key={sIndex} className="text-foreground/70 flex items-center">
                                <BentArrow />
                                <span>{school.years}: {school.name}</span>
                             </p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}
