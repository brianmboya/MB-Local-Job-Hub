import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { User, IdCard, Phone, MapPin, Lock, UserCircle } from 'lucide-react';
import { motion } from 'motion/react';

const signUpSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  idNumber: z.string().min(5, 'Please enter a valid ID number'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  location: z.string().min(3, 'Please enter your location'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Please confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Sign up data:', data);
    toast.success('Account created successfully!', {
      description: 'You can now sign in to your account.',
    });
    navigate('/signin');
  };

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-slate-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl"
      >
        <Card className="shadow-xl border-slate-100">
          <CardHeader className="text-center space-y-1">
            <CardTitle className="text-3xl font-bold">Create an Account</CardTitle>
            <CardDescription>
              Join MB Business Local Jobs Hub today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center gap-2">
                    <User className="w-4 h-4 text-slate-400" />
                    Full Names
                  </Label>
                  <Input id="fullName" placeholder="John Doe" {...register('fullName')} />
                  {errors.fullName && <p className="text-xs text-destructive">{errors.fullName.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="idNumber" className="flex items-center gap-2">
                    <IdCard className="w-4 h-4 text-slate-400" />
                    ID Number
                  </Label>
                  <Input id="idNumber" placeholder="12345678" {...register('idNumber')} />
                  {errors.idNumber && <p className="text-xs text-destructive">{errors.idNumber.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-400" />
                    Phone Number
                  </Label>
                  <Input id="phone" placeholder="0712345678" {...register('phone')} />
                  {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    Location
                  </Label>
                  <Input id="location" placeholder="Nairobi, Kenya" {...register('location')} />
                  {errors.location && <p className="text-xs text-destructive">{errors.location.message}</p>}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <Label htmlFor="username" className="flex items-center gap-2">
                  <UserCircle className="w-4 h-4 text-slate-400" />
                  Username
                </Label>
                <Input id="username" placeholder="johndoe123" {...register('username')} />
                {errors.username && <p className="text-xs text-destructive">{errors.username.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-slate-400" />
                    Password
                  </Label>
                  <Input id="password" type="password" {...register('password')} />
                  {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-slate-400" />
                    Repeat Password
                  </Label>
                  <Input id="confirmPassword" type="password" {...register('confirmPassword')} />
                  {errors.confirmPassword && <p className="text-xs text-destructive">{errors.confirmPassword.message}</p>}
                </div>
              </div>

              <Button type="submit" className="w-full h-12 text-lg mt-4" disabled={isSubmitting}>
                {isSubmitting ? 'Creating Account...' : 'Sign Up'}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center border-t border-slate-50 pt-6">
            <p className="text-sm text-slate-600">
              Already have an account?{' '}
              <Link to="/signin" className="text-primary font-bold hover:underline">
                Sign In
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
