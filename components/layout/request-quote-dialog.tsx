"use client";

import { FormEvent, ReactNode, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface RequestQuoteDialogProps {
  trigger: ReactNode;
}

const matterOptions = [
  { value: "civil", label: "Civil" },
  { value: "criminal", label: "Criminal" },
  { value: "partly-heard", label: "Partly heard" },
  { value: "divorce", label: "Divorce" },
  { value: "maintenance", label: "Maintenance" },
];

export const RequestQuoteDialog = ({ trigger }: RequestQuoteDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setIsOpen(nextOpen);

    if (!nextOpen) {
      formRef.current?.reset();
      setIsSubmitted(false);
    }
  };

  const handleReset = () => {
    formRef.current?.reset();
    setIsSubmitted(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-3xl w-[95vw] sm:w-full max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
          <DialogDescription>
            Fill in the case template below so our team can prepare an accurate quotation.
          </DialogDescription>
        </DialogHeader>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
          <section>
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-4">
              Contact Details
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="fullName">Full name</Label>
                <Input id="fullName" name="fullName" placeholder="Your full name" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Contact number"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="organisation">Organisation</Label>
                <Input
                  id="organisation"
                  name="organisation"
                  placeholder="Company / Department"
                />
              </div>
            </div>
          </section>

          <section>
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-4">
              Case Information
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="courtHeld">Court held</Label>
                <Input
                  id="courtHeld"
                  name="courtHeld"
                  placeholder="Court name"
                  defaultValue="Pretoria Magistrates Court"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="courtRoomNumber">Court room nr</Label>
                <Input
                  id="courtRoomNumber"
                  name="courtRoomNumber"
                  placeholder="Room number"
                  defaultValue="E and B"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="caseNumber">Case number</Label>
                <Input
                  id="caseNumber"
                  name="caseNumber"
                  placeholder="Case number"
                  defaultValue="E25/198/2021"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="judgeName">Name of judge</Label>
                <Input
                  id="judgeName"
                  name="judgeName"
                  placeholder="Presiding judge"
                  defaultValue="Rogaju"
                />
              </div>
            </div>
            <div className="space-y-1.5 mt-4">
              <Label htmlFor="partiesInvolved">Parties involved</Label>
              <Textarea
                id="partiesInvolved"
                name="partiesInvolved"
                rows={2}
                placeholder="List the parties involved"
                defaultValue="The State v Wentzel Christoffel Marais"
              />
            </div>
            <div className="space-y-1.5 mt-4">
              <Label htmlFor="languageRequired">Language required</Label>
              <Input
                id="languageRequired"
                name="languageRequired"
                placeholder="e.g. English, isiZulu"
                defaultValue="N/A"
              />
            </div>
          </section>

          <section>
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-4">
              Type of matter
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {matterOptions.map((option) => (
                <label
                  key={option.value}
                  htmlFor={`matter-${option.value}`}
                  className="flex items-center gap-2 rounded-md border border-input bg-muted/10 px-3 py-2 text-sm hover:border-primary"
                >
                  <input
                    id={`matter-${option.value}`}
                    name="matter"
                    type="checkbox"
                    value={option.value}
                    defaultChecked={option.value === "criminal"}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </section>

          <section>
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-4">
              Additional notes
            </p>
            <Textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="Share any timelines, special requirements, or supporting information."
            />
            {isSubmitted && (
              <p className="text-sm text-green-600">
                Thanks! Your details have been captured. Our team will follow up within one business day.
              </p>
            )}
          </section>

          <DialogFooter>
            <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:justify-end">
              <Button type="button" variant="outline" onClick={handleReset}>
                Reset template
              </Button>
              <Button type="submit">Submit request</Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
