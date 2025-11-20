import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { educationData } from '@/lib/data';
import { GraduationCap } from 'lucide-react';

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-3xl font-bold text-center mb-12 font-headline text-primary">
            {children}
        </h2>
    );
}

export default function EducationSection() {
  return (
    <section id="education" className="py-12">
      <SectionTitle>Education</SectionTitle>
      <div className="max-w-4xl mx-auto space-y-8">
        {educationData.map((edu, index) => (
             <Card key={index} className="bg-background/60 backdrop-blur-sm border-black/5 dark:border-white/10 shadow-sm hover:shadow-primary/10 transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms`}}>
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                        <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardDescription className="text-primary">{edu.institution}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                    <p className="mt-2 font-bold text-foreground/80">{edu.description}</p>
                </CardContent>
            </Card>
        ))}
      </div>
    </section>
  );
}
