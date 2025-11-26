
"use client";

import { useActionState, useEffect, useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm, type FormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import Image from 'next/image';

const initialState: FormState = {
  message: '',
};

const Asterisk = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="54"
    height="53"
    viewBox="0 0 54 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27 0.999982L29.5358 20.4641L45.9228 9.53588L35.011 23.011L53.021 27L35.011 30.989L45.9228 44.4641L29.5358 33.5359L27 53L24.4642 33.5359L8.07718 44.4641L18.989 30.989L0.979004 27L18.989 23.011L8.07718 9.53588L24.4642 20.4641L27 0.999982Z"
      fill="hsl(var(--accent))"
      fillOpacity="0.5"
    />
  </svg>
);


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full font-bold" size="lg">
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Send Message
    </Button>
  );
}

export default function ContactSection() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.isSuccess ? 'Success!' : 'Error',
        description: state.message,
        variant: state.isSuccess ? 'default' : 'destructive',
      });
      if (state.isSuccess) {
        formRef.current?.reset();
        setOpen(false);
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="relative overflow-hidden w-full py-20 md:py-32 bg-background">
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Asterisk className="absolute top-1/4 left-[5%] w-8 h-8 opacity-30 text-accent animate-spin-slow [animation-delay:-1s]" />
          <Asterisk className="absolute top-1/2 right-[5%] w-14 h-14 opacity-40 text-accent animate-spin-slow [animation-delay:-3s]" />
          <Asterisk className="absolute top-[10%] right-[10%] w-12 h-12 opacity-50 text-accent animate-spin-slow" />
          <Asterisk className="absolute bottom-[15%] left-[10%] w-10 h-10 opacity-40 text-accent animate-spin-slow [animation-delay:-2s]" />
          <Asterisk className="absolute bottom-[5%] right-[15%] w-16 h-16 opacity-60 text-accent animate-spin-slow [animation-delay:-4s]" />
        </div>
       <div className="absolute -bottom-12 -left-48 opacity-30 pointer-events-none">
        <Image src="/cons-design.png" alt="Constellation design" width={500} height={500} />
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Get in Touch</h2>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80 mt-4">
            Ready to work together? My inbox is always open! You can contact me via email at <a href="mailto:elainejennat@gmail.com" className="underline font-medium hover:text-primary">elainejennat@gmail.com</a> or via the contact form below:
        </p>
        <div className="mt-8">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="font-bold">Contact Form</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg rounded-lg">
                <DialogHeader>
                  <DialogTitle>Contact Me</DialogTitle>
                  <DialogDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </DialogDescription>
                </DialogHeader>
                <form ref={formRef} action={formAction} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="sr-only">Name</Label>
                        <Input id="name" name="name" placeholder="Your Name" required />
                        {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name.join(', ')}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email" className="sr-only">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                        {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email.join(', ')}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="subject" className="sr-only">Subject</Label>
                        <Input id="subject" name="subject" placeholder="Project Subject" required />
                        {state.errors?.subject && <p className="text-sm font-medium text-destructive">{state.errors.subject.join(', ')}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message" className="sr-only">Message</Label>
                        <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={6} required />
                        {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message.join(', ')}</p>}
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                         <Button type="button" variant="outline">Cancel</Button>
                      </DialogClose>
                      <SubmitButton />
                    </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
        </div>
      </div>
    </section>
  );
}
