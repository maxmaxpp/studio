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

const initialState: FormState = {
  message: '',
};

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
    <section id="contact" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Get in Touch</h2>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80 mt-4">
            Ready to work together? My inbox is always open! You can contact me via email at <a href="mailto:gelyne.potenciano@gmail.com" className="underline font-medium hover:text-primary">gelyne.potenciano@gmail.com</a> or via the contact form below:
        </p>
        <div className="mt-8">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="font-bold">Contact Form</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
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
