import { certificationsData } from '@/lib/data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12 font-headline text-primary">
        Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {certificationsData.map((cert, index) => (
          <Dialog key={index}>
            <Card
              className="group overflow-hidden bg-background/60 backdrop-blur-sm border-black/5 dark:border-white/10 shadow-sm hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <DialogTrigger asChild>
                <div className="p-4 cursor-pointer">
                  <div className="relative h-48 w-full bg-muted rounded-md flex items-center justify-center">
                    <img
                      src={cert.image.imageUrl}
                      alt={cert.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={cert.image.imageHint}
                    />
                  </div>
                </div>
              </DialogTrigger>
              <CardContent className="p-4 pt-0">
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {cert.institution}
                </p>
                {cert.description && (
                  <p className="text-sm font-bold text-foreground/80 mt-2">{cert.description}</p>
                )}
              </CardContent>
            </Card>
            <DialogContent className="max-w-4xl h-[90vh]">
              <DialogHeader>
                <DialogTitle>{cert.title}</DialogTitle>
              </DialogHeader>
              <div className="relative h-full w-full">
                <img
                  src={cert.image.imageUrl}
                  alt={cert.title}
                  className="w-full h-full object-contain"
                  data-ai-hint={cert.image.imageHint}
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
