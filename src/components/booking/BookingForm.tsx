import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SERVICES } from '@/constants';
import { toast } from 'sonner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Phone, User, Briefcase } from 'lucide-react';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  location: z.string().min(5, 'Please enter your location'),
  date: z.string().min(1, 'Please select a date'),
  details: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Booking submitted:', data);
    toast.success('Booking request sent!', {
      description: "We'll contact you shortly to confirm your service.",
    });
    reset();
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl border-slate-100">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-3xl font-bold">Request a Service</CardTitle>
        <CardDescription className="text-lg">
          Fill out the form below and we'll match you with a vetted professional instantly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="w-4 h-4 text-slate-400" />
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                {...register('name')}
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400" />
                Phone Number
              </Label>
              <Input
                id="phone"
                placeholder="+123 456 7890"
                {...register('phone')}
                className={errors.phone ? 'border-destructive' : ''}
              />
              {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="service" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-slate-400" />
                Service Needed
              </Label>
              <select
                id="service"
                {...register('service')}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
              {errors.service && <p className="text-xs text-destructive">{errors.service.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400" />
                Preferred Date
              </Label>
              <Input
                id="date"
                type="date"
                {...register('date')}
                className={errors.date ? 'border-destructive' : ''}
              />
              {errors.date && <p className="text-xs text-destructive">{errors.date.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-400" />
              Service Location
            </Label>
            <Input
              id="location"
              placeholder="Your full address"
              {...register('location')}
              className={errors.location ? 'border-destructive' : ''}
            />
            {errors.location && <p className="text-xs text-destructive">{errors.location.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="details">Additional Details (Optional)</Label>
            <Textarea
              id="details"
              placeholder="Tell us more about your requirements..."
              className="min-h-[120px]"
              {...register('details')}
            />
          </div>

          <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
            {isSubmitting ? 'Sending Request...' : 'Get Matched Instantly'}
          </Button>
          
          <p className="text-center text-xs text-slate-500">
            By submitting this form, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
