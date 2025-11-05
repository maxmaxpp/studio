'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitTestimonial, type FormState } from '@/app/testimonial-actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';

const initialState: FormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full font-bold">
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Submit Testimonial
    </Button>
  );
}

export default function AddTestimonial() {
  const [state, formAction] = useActionState(submitTestimonial, initialState);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="font-bold">Leave a Testimonial</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Leave a Testimonial</DialogTitle>
          <DialogDescription>
            Share your experience working with me. Your feedback is greatly
            appreciated!
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} action={formAction} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your Name" required />
            {state.errors?.name && (
              <p className="text-sm font-medium text-destructive">
                {state.errors.name.join(', ')}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              placeholder="Your Company (Optional)"
            />
             {state.errors?.company && (
              <p className="text-sm font-medium text-destructive">
                {state.errors.company.join(', ')}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="quote">Testimonial</Label>
            <Textarea
              id="quote"
              name="quote"
              placeholder="Your testimonial..."
              rows={4}
              required
            />
            {state.errors?.quote && (
              <p className="text-sm font-medium text-destructive">
                {state.errors.quote.join(', ')}
              </p>
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <SubmitButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
