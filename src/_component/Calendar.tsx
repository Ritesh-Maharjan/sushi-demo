"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, SidebarClose, SidebarOpen } from "lucide-react";
import { Calendar as Cal } from "@/components/ui/calendar";
import MaxWidthContent from "./MaxWidthContent";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const TIMES = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
];

const formSchema = z.object({
  dor: z.date({
    required_error: "A date of birth is required.",
  }),
  time: z.string({
    required_error: "Please select the timezone to book.",
  }),
  numberOfPeople: z.coerce
    .number({
      required_error: "Please enter the number of people",
    })
    .min(1),
});

const Calendar = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dor: new Date(),
      time: "11:00 AM",
      numberOfPeople: 1,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="fixed flex justify-center overflow-scroll inset-0 z-50 bg-black/60">
      <div className="bg-black border-2 border-yellow-500 text-white rounded-2xl absolute h-fit top-1/2 -translate-y-1/2 p-8">
        <button aria-label="close popover" className="absolute top-2 right-2 ">
          <SidebarClose />
        </button>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-4 flex flex-col mx-auto my-auto h-full justify-center space-y-8 w-72"
          >
            <h2 className="text-center text-2xl font-medium">
              Book you reservations
            </h2>

            <FormField
              control={form.control}
              name="dor"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of reservations</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"default"}
                          className={cn(
                            " pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Cal
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        fromDate={new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select the time</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-primary text-white">
                        <SelectValue placeholder="Select a timezone" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-primary text-white">
                      {TIMES.map((el, index) => (
                        <SelectItem value={el} key={index}>
                          {el}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="numberOfPeople"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number Of People</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="bg-primary text-white"
                      placeholder="1"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button variant={"ghost"} type="submit">
              Book Now
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Calendar;
